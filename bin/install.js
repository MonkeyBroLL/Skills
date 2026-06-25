#!/usr/bin/env node

import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(__dirname, "..");
const skillsRoot = path.join(packageRoot, "skills");

const targetRoots = [
  path.join(os.homedir(), ".claude", "skills"),
  path.join(os.homedir(), ".agents", "skills"),
];

if (process.env.CODEX_HOME) {
  targetRoots.push(path.join(process.env.CODEX_HOME, "skills"));
}

const uniqueTargetRoots = [...new Set(targetRoots.map((target) => path.resolve(target)))];

function walkSkills(dir, skills = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name === "deprecated") {
      continue;
    }

    const entryPath = path.join(dir, entry.name);

    if (!entry.isDirectory()) {
      continue;
    }

    if (fs.existsSync(path.join(entryPath, "SKILL.md"))) {
      skills.push({
        name: entry.name,
        source: entryPath,
      });
      continue;
    }

    walkSkills(entryPath, skills);
  }

  return skills;
}

function listSkills() {
  if (!fs.existsSync(skillsRoot)) {
    return [];
  }

  return walkSkills(skillsRoot).sort((a, b) => a.name.localeCompare(b.name));
}

const skills = listSkills();

if (skills.length === 0) {
  console.error(`No skills found in ${skillsRoot}`);
  process.exitCode = 1;
} else {
  for (const targetRoot of uniqueTargetRoots) {
    fs.mkdirSync(targetRoot, { recursive: true });

    for (const skill of skills) {
      const target = path.join(targetRoot, skill.name);
      fs.cpSync(skill.source, target, { recursive: true, force: true });
      console.log(`Installed ${skill.name} to ${target}`);
    }
  }
}
