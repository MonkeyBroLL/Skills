# MonkeyBroLL Skills

Personal Codex skills by MonkeyBroLL.

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

The installer copies every skill under `skills/*/SKILL.md` into:

- `$CODEX_HOME/skills` when `CODEX_HOME` is set
- `~/.agents/skills` otherwise

## Local Install

From this repository:

```bash
npm install
npm run check
node ./bin/install.js
```

## Skills

- `insight-capture` - Captures valuable discussion conclusions, design insights, investigation findings, and spontaneous ideas into durable notes after confirmation.

## Publish

```bash
npm login
npm publish --access public
```
