---
name: insight-capture
description: Persist valuable discussion conclusions, design insights, investigation findings, and spontaneous ideas into durable notes. Use when the user asks to capture, save, remember, persist, write down, log, or preserve an insight, conclusion, spark, decision, lesson, investigation takeaway, or AI discussion detail.
---

# Insight Capture

## Purpose

Capture knowledge that would otherwise evaporate: crisp conclusions from AI discussions, design tradeoffs, investigation findings, surprising observations, unresolved questions, and sudden sparks of product or engineering insight.

## Quick Start

When triggered, draft a durable note, ask the user to choose a mode, ask the user to confirm the details and destination, then persist only after confirmation.

Always prefer useful synthesis over transcript-like copying.

## Modes

Ask the user to select one mode before drafting the final file:

- `takeaway` - Persist only the key takeaway from an investigation, discussion, or insight. Use this for compact knowledge that should be easy to scan later.
- `detail` - Generate a more detailed Markdown file with an overview plus investigation or discussion details. Use this when the reasoning, evidence, timeline, alternatives, or unresolved questions matter.

If the user already explicitly chose a mode, repeat it back for confirmation before writing.

## Default Destination

The default destination folder is `C:\work\docs\insights`.

Always ask the user to confirm the destination path before creating or editing any file. Offer the default path first unless the user has already named another destination.

Use a brief filename based on the insight, not a date-only filename. Prefer lowercase words separated by hyphens, such as `threshold-removal-risk.md` or `agent-memory-spark.md`.

## Capture Workflow

1. Identify the capture type: `Insight`, `Decision`, `Investigation`, `Spark`, `Question`, or `Lesson`.
2. Ask the user to select `takeaway` or `detail` mode before persisting.
3. Extract the durable core, not the full conversation.
4. Preserve uncertainty honestly. Use language like "Working hypothesis" or "Open question" when the idea is not settled.
5. Draft the exact entry or file content for the selected mode.
6. Ask the user to confirm or revise the drafted details before writing any file.
7. Ask the user to confirm the destination path and proposed brief filename before writing any file.
8. Persist the confirmed content only after mode, details, destination, and filename are confirmed.
9. Tell the user where it was saved and summarize the captured point.

## Takeaway Template

```md
# Short Title

**Type:** Insight | Decision | Investigation | Spark | Question | Lesson

**Key takeaway:** One or two sentences stating the durable point.

**Why it matters:** The consequence, risk, opportunity, or design pressure this reveals.

**Context:** Brief project, discussion, feature, bug, or investigation context.

**Links:** Relevant files, issues, ADRs, commits, or docs. Omit if none.

**Next:** Concrete follow-up. Omit if none.
```

## Detail Template

```md
# Short Title

## Overview

Short paragraph summarizing the conclusion, insight, or investigation result.

## Key Takeaways

- Durable takeaway 1
- Durable takeaway 2

## Investigation Or Discussion Details

Capture the important reasoning, evidence, timeline, alternatives considered, constraints, and examples. Keep it structured and omit filler.

## Open Questions

List unsettled questions or working hypotheses. Omit if none.

## Links

Relevant files, issues, ADRs, commits, or docs. Omit if none.

## Next Steps

Concrete follow-up actions. Omit if none.
```

## Style

- Write in the user's project vocabulary.
- Keep `takeaway` mode short enough to reread quickly.
- Use `detail` mode only for reasoning worth preserving, not raw transcript storage.
- Do not over-polish sparks; preserve the live edge of the idea.
- Do not invent certainty, rationale, links, or next steps.
- If an insight belongs in an ADR, suggest that destination and ask before editing it.
- If the user asks to capture "this", infer the referent from the immediate conversation, then ask for mode, detail confirmation, destination, and filename before saving.

## Examples

- "Capture that conclusion." Ask for `takeaway` or `detail`, draft the content, then confirm details, destination, and filename before saving.
- "Write down the whole investigation." Suggest `detail`, draft overview plus investigation details, then ask for confirmation before saving.
