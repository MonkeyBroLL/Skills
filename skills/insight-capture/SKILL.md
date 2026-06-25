---
name: insight-capture
description: Persist valuable discussion conclusions, design insights, investigation findings, and spontaneous ideas into durable notes. Use when the user asks to capture, save, remember, persist, write down, log, or preserve an insight, conclusion, spark, decision, lesson, or AI discussion takeaway.
---

# Insight Capture

## Purpose

Capture knowledge that would otherwise evaporate: crisp conclusions from AI discussions, design tradeoffs, investigation findings, surprising observations, unresolved questions, and sudden sparks of product or engineering insight.

## Quick Start

When triggered, create or update a durable note with:

- The insight in one or two clear sentences
- Why it matters
- Context that will make it understandable later
- Links to relevant files, issues, docs, commits, or conversation artifacts when available
- Follow-up actions only if they are concrete

Prefer small, high-signal entries over transcript-like summaries.

## Default Destination

The default destination folder is `C:\work\docs\insights`.

Always ask the user to confirm the destination path before creating or editing any file. Offer the default path first unless the user has already named another destination.

Use a brief filename based on the insight, not a date-only filename. Prefer lowercase words separated by hyphens, such as `threshold-removal-risk.md` or `agent-memory-spark.md`.

## Capture Workflow

1. Identify the capture type: `Insight`, `Decision`, `Investigation`, `Spark`, `Question`, or `Lesson`.
2. Extract the durable core, not the full conversation.
3. Preserve uncertainty honestly. Use language like "Working hypothesis" or "Open question" when the idea is not settled.
4. Add enough context to recover the thread later: project area, problem being discussed, constraints, and relevant terms.
5. Draft the exact insight entry and ask the user to confirm or revise the details before writing any file.
6. Ask the user to confirm the destination path and proposed brief filename before writing any file.
7. Persist the confirmed entry only after both the insight details and destination are confirmed.
8. Tell the user where it was saved and summarize the captured point.

## Entry Template

```md
## HH:mm - Type: Short Title

**Insight:** One or two sentences stating the durable idea.

**Why it matters:** The consequence, risk, opportunity, or design pressure this reveals.

**Context:** The discussion, feature, bug, investigation, or file area that produced it.

**Links:** Relevant files, issues, ADRs, commits, or docs. Omit if none.

**Next:** Concrete follow-up. Omit if there is no clear action.
```

## Style

- Write in the user's project vocabulary.
- Keep entries short enough to reread.
- Do not over-polish sparks; preserve the live edge of the idea.
- Do not invent certainty, rationale, links, or next steps.
- If an insight belongs in an ADR, suggest that destination and ask before editing it.
- If the user asks to capture "this", infer the referent from the immediate conversation, then ask the user to confirm the drafted insight details and destination before saving.

## Examples

User: "Capture that conclusion."

Action: Draft the current conclusion as a `Decision` or `Insight`, then ask the user to confirm the details, destination, and brief filename before saving.

User: "That spark is important, write it down."

Action: Draft it as `Spark`, preserving the rough idea and any open questions, then ask the user to confirm before saving.

User: "We should remember this investigation finding."

Action: Draft it as `Investigation`, including evidence, affected area, and next diagnostic step if known.
