# MonkeyBroLL Skills

Personal agent skills by MonkeyBroLL for Claude, Codex, and Agent-Skills-standard harnesses.

## Install from npm

Install directly from GitHub:

```bash
npm install -g github:MonkeyBroLL/Skills
monkeybroll-skills
```

Or run it with `npx`:

```bash
npx github:MonkeyBroLL/Skills
```

After this package is published to npm:

```bash
npm install -g monkeybroll-skills
monkeybroll-skills
```

Or run it without a global install:

```bash
npx monkeybroll-skills
```

The installer recursively finds every skill under `skills/**/SKILL.md` and copies each skill into:

- `~/.claude/skills` for Claude Code
- `~/.agents/skills` for Codex and other Agent-Skills-standard harnesses
- `$CODEX_HOME/skills` as an extra Codex target when `CODEX_HOME` is set

## Local Install

From this repository:

```bash
npm install
npm run check
node ./bin/install.js
```

## Skills

- `concept-investigator` - Builds a sourced mental model for an unfamiliar concept using safe web research, repository documentation, and implementation call-path tracing.
- `insight-capture` - Captures valuable discussion conclusions, design insights, investigation findings, and spontaneous ideas into durable notes after confirmation.

## Publish

```bash
npm login
npm publish --access public
```
