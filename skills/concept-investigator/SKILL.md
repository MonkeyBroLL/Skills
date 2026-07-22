---
name: concept-investigator
description: Investigates an unfamiliar technical, product, business, or company-internal concept by building a sourced mental model from public material, repository documentation, and implementation call paths. Use when the user asks to understand, learn, research, investigate, explain, or dive into a new concept in the context of a project or codebase.
---

# Concept Investigator

## Purpose

Turn an unfamiliar concept into a concise, evidence-backed mental model: what it is, why it exists, how this project uses it, where it enters the system, and what remains uncertain.

Stay read-only unless the user separately asks for changes.

## Workflow

### 1. Frame the investigation

1. Restate the concept and the question the investigation should answer.
2. Record known aliases, acronyms, likely class names, and spelling variants.
3. Ask one clarifying question only when the concept or desired depth is genuinely ambiguous.
4. Define a stopping condition, such as explaining the main flow, ownership boundary, and two key implementation paths.

### 2. Establish public context safely

1. Decide whether the concept name or surrounding details may be confidential.
2. Never send private code, internal URLs, customer data, credentials, incident details, or proprietary identifiers to public search services.
3. If safe, search the web for the exact term, aliases, and broader industry category.
4. Prefer primary and recent sources: official documentation, standards, papers, vendor docs, and source repositories.
5. If little public information exists, say so. Search generic analogues rather than treating absence as evidence that the concept is unimportant.
6. Capture the basic definition, purpose, vocabulary, alternatives, and source dates.

### 3. Build the repository knowledge map

1. Search documentation before code: README files, architecture docs, ADRs, design specs, wikis mirrored in the repo, runbooks, ownership files, and configuration guides.
2. Search the exact term and aliases, then conceptually related terms.
3. Rank documents by authority and freshness; distinguish current design from historical proposals.
4. Extract:
   - the project-specific definition;
   - responsibilities and boundaries;
   - entry points and dependencies;
   - configuration, flags, rollout, and ownership;
   - known limitations and operational guidance.
5. Cite every repository claim with `path:line`.

### 4. Trace the implementation

1. Identify key types and entry points from the docs or code search.
2. Prefer code intelligence, symbol references, and call hierarchy tools; fall back to exact text search.
3. Trace both directions:
   - inbound: callers, handlers, controllers, jobs, events, or registrations;
   - outbound: callees, service clients, storage, queues, external APIs, and emitted events.
4. Follow interfaces to concrete implementations and include DI registration or factory selection.
5. Check configuration, feature flags, schemas, tests, telemetry, and error paths that change runtime behavior.
6. Stop tracing utility code when it no longer changes the concept-level explanation.
7. Use runtime evidence or targeted tests when available and necessary; do not infer production behavior from code alone.

### 5. Reconcile and report

Compare public context, project docs, and code. Call out drift or contradictions instead of silently choosing one source.

Label conclusions:

- **Fact** - directly supported by a source.
- **Inference** - reasoned from multiple facts but not explicitly documented.
- **Open question** - unresolved or requiring an owner, runtime data, or newer source.

Report:

1. **One-paragraph explanation**
2. **Vocabulary and boundaries**
3. **How this project uses it**
4. **Key call flow** as a short ordered list or diagram
5. **Key files and symbols**
6. **Configuration, tests, telemetry, and ownership**
7. **Facts, inferences, and open questions**
8. **Recommended next reading**

## Quality Rules

- Build a mental model, not an exhaustive grep dump.
- Separate general industry meaning from this repository's meaning.
- Prefer a few authoritative sources over many repetitive ones.
- Treat comments and old design docs as hypotheses until current code confirms them.
- Do not claim a call path is complete without checking registration and alternate implementations.
- State when access limitations prevent searching internal systems or validating runtime behavior.

## Examples

- "Help me understand event sourcing in this service."
- "Investigate what `LuminaHarnessClient` means and how requests reach it."
- "This internal term is new to me. Find the docs and trace the main implementation."
