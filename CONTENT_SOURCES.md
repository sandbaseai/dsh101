# Content sources

DSH 101 is an independent community guide. Product facts and code examples are
adapted from the public DeepSeek Harness repository and rewritten for this
site's learning path.

Last upstream review:

- Repository: `deepseek-ai/deepseek-harness`
- Commit: `47f943859bef60e4160492346772ded9b24f765a`
- Commit date: 2026-08-13
- npm registry checked: 2026-08-16 (`@deepseek-ai/dsh@0.1.0-rc.6`; `latest` and `next`)

## Source map

| DSH 101 section | Canonical upstream source |
| --- | --- |
| Subsystem catalog and boundaries | `docs/subsystems/README.zh.md` |
| Install, Node compatibility, npm release, and license | `README.zh.md`, `package.json`, `apps/cli/package.json`, `LICENSE`, npm registry metadata |
| Web UI quickstart | `docs/user/guide/index.zh.md` |
| Workspace identity and lifecycle | `docs/subsystems/workspace.zh.md` |
| Workspace list baselines, optimistic ordering, concurrent echoes, deletion tombstones, and browser-local session order | `packages/client/runtime/README.zh.md`, `packages/client/ui-workspace/README.zh.md` |
| New Session target selection, host-owned blank state, safe reuse, and placeholder behavior | `packages/client/runtime/README.zh.md`, `packages/client/ui-workspace/README.zh.md` |
| Sidebar pending-interaction status, connection-generation replay, subagent activity aggregation, and accessibility labels | `packages/client/runtime/README.zh.md`, `packages/client/ui-workspace/README.zh.md` |
| Workspace directory picker and adaptive native/browse behavior | `packages/host/directory-picker/README.zh.md`, `packages/host/directory-picker-auto/README.zh.md`, `packages/host/directory-picker-native/README.zh.md`, `packages/host/directory-picker-browse/README.zh.md` |
| Model providers and credentials | `docs/user/guide/providers.zh.md` |
| First-run onboarding, provider readiness, and session model routing | `packages/client/ui-settings-models/README.zh.md`, `packages/client/ui-model-selection/README.zh.md`, `packages/host/apiproxy/README.zh.md`, `packages/llm/llm-deepseek/README.zh.md` |
| Session model directory refresh, selection generations, failure retention, routability blocking, and reconnect convergence | `packages/client/ui-model-selection/README.zh.md`, `packages/client/runtime/README.zh.md` |
| Python SDK and security boundary | `docs/user/guide/python-sdk.zh.md` |
| Cross-process SDK protocol, TypeScript high- and low-level clients, activity-interval aggregation, notification scope, process ownership, and shutdown escalation | `packages/sdk/README.zh.md`, `packages/sdk/protocol/README.zh.md`, `packages/sdk/client/README.zh.md`, `packages/sdk/server/README.zh.md` |
| CLI and profiles | `apps/cli/README.zh.md` |
| User profile patch layering, hot reload, and last-good HMR fallback | `packages/boot/app-boot/README.zh.md` |
| Headless execution and configuration dumps | `apps/cli/reference/README.zh.md` |
| First plugin | `docs/user/develop/basic/index.zh.md` |
| Tool development, typed schema and runtime validation, scoped visibility restrictions, canonical output/presentation boundaries, execution pipeline, and ordered parallel scheduling | `docs/user/develop/basic/tool.zh.md`, `docs/subsystems/tools.zh.md`, `docs/tool-execution-pipeline.zh.md`, `packages/core/tools/README.zh.md`, `packages/core/agent-loop/README.zh.md` |
| Generated model-facing tool Schema catalog, real-context plugin boot, manifest completeness, default-config snapshots, configurable names, package mapping, and freshness verification | `docs/tool-catalog.zh.md`, `scripts/gen-tool-catalog.ts` |
| Code Mode nested tool-call topology, incremental keyed updates, malformed-edge limits, and UI ownership | `packages/client/runtime/README.zh.md`, `packages/client/ui-tool/README.zh.md` |
| Chat tool rendering, details-seat raw fallback, unreachable details entry point, and deferred inspector navigation | `packages/client/ui-conversation/README.zh.md`, `packages/client/ui-tool/README.zh.md` |
| Plugin configuration | `docs/user/develop/basic/config.zh.md` |
| Generated plugin configuration catalog, declared config surface, runtime-schema cross-checking, injected service requirements, freshness verification, and reference-axis boundaries | `docs/config-catalog.zh.md`, `scripts/gen-config-catalog.ts` |
| Postmortem for Loader-metadata JavaScript expressions silently disabling filesystem tools, snapshot false confidence, explicit overlays, static config guards, and semantic UNKNOWN_TOOL rejection | `docs/postmortem/0002-js-expression-disabled-filesystem-tools.zh.md` |
| Documentation graph selection, module peer-dependency edges, capability seams, event producer-consumer relationships, flow ownership, maintenance modes, and freshness gates | `docs/graph-atlas.zh.md`, `docs/module-graph.zh.md`, `docs/capability-seams.zh.md`, `docs/event-producer-consumer.zh.md`, `docs/agent-lifecycle.zh.md`, `docs/tool-execution-pipeline.zh.md`, `scripts/gen-doc-graphs.ts`, `scripts/gen-module-graph.ts` |
| Bundles and publishing | `docs/user/develop/basic/publish.zh.md` |
| Fiber lifecycle | `docs/user/develop/framework/index.zh.md` |
| Cordis Context scoping, Registry dependency scheduling, Fiber ownership, strict service resolution, reversible effects, and generated core API reference | `docs/cordis-primer.zh.md`, `docs/cordis-api/context.zh.md`, `docs/cordis-api/fiber.zh.md`, `docs/cordis-api/registry.zh.md`, `scripts/gen-cordis-catalog.ts` |
| Contributor delivery checklist for workspace packages, Tools, LLM adapters, Conversation Nodes, package manifests, project references, Model Experience docs, composition coverage, and repository gates | `docs/cookbook/adding-a-package.zh.md`, `docs/cookbook/adding-a-tool.zh.md`, `docs/cookbook/adding-an-llm-adapter.zh.md`, `docs/cookbook/adding-a-conversation-node.zh.md`, `docs/testing.zh.md`, `docs/development.zh.md` |
| Web client module graph and bundle delivery | `docs/subsystems/client-modules.zh.md` |
| Web styling ownership, semantic design tokens, theme bootstrap and DOM projection, CSS Module boundaries, scrollbar geometry, focus visibility, and reduced-motion behavior | `docs/web-styling.zh.md`, `packages/client/ui-theme/README.zh.md`, `packages/client/ui-layout/README.zh.md`, `packages/client/ui-primitives/README.zh.md` |
| Browser UI slot declarations, chain selection, stores, and recursive lifecycle cleanup | `packages/client/ui-slots/README.zh.md` |
| Slot declaration injection, epoch-bound effects, transactional registration, and teardown | `packages/client/runtime/README.zh.md` |
| Client bundle rebuild detection, serialized HMR replacement, cleanup, and failure semantics | `packages/client/hmr/README.zh.md` |
| Runtime plugin inventory and Settings diagnostics | `packages/host/plugin-inventory/README.zh.md`, `packages/client/ui-settings-plugin-inventory/README.zh.md`, `apps/cli/reference/README.zh.md` |
| Scoped registration layers and ownership | `docs/subsystems/scope.zh.md` |
| Web server routing and exposure boundary | `docs/subsystems/web-server.zh.md` |
| Postmortem for validating a substitute Web server instead of the current GUI, canonical URL/mode disclosure, application readiness, same-origin external evidence, managed server lifecycle, and production/HMR update paths | `docs/postmortem/0003-web-agent-gui-feedback-loop.zh.md` |
| Browser RPC transport and privileged API boundary | `packages/host/apiproxy/README.zh.md`, `packages/client/connection/README.zh.md` |
| Host-native path opening, WSL handoff, shell-free command execution, and desktop detection | `packages/host/apiproxy/README.zh.md`, `packages/util/native-command/README.zh.md`, `packages/host/directory-picker-auto/README.zh.md`, `packages/client/connection/README.zh.md` |
| Browser WebSocket readiness, generations, and reconnect backoff | `packages/client/connection/README.zh.md`, `packages/client/connection/src/client/connection.ts` |
| Generated TypeRT remote-call boundary, Gateway invocation, cancellation, live resolution, contribution retraction, strict no-downgrade behavior, and protocol ownership | `docs/subsystems/typert.zh.md`, `docs/api-gateway.zh.md`, `packages/api/gateway/README.zh.md`, `packages/api/remotes/README.zh.md`, `packages/client/connection/README.zh.md` |
| Selected Host event forwarding, shared allowlist and type surface, fiber-owned subscriptions, ordered error isolation, disclosure boundary, and no-replay semantics | `packages/api/remotes/README.zh.md`, `packages/api/remotes/src/remote-events.ts`, `packages/api/remotes/src/types.ts`, `packages/api/gateway/README.zh.md`, `packages/api/gateway/src/client/index.ts`, `packages/client/runtime/src/client/index.ts` |
| ACP automation transport, capability negotiation, prompt and committed-message semantics, permissions, cancellation, multi-session ownership, and connection cleanup | `packages/acp/README.zh.md`, `packages/acp/acp/README.zh.md`, `packages/examples/acp-demo/README.zh.md` |
| Postmortem for ACP namespace metadata lost through a default export, optional-service shadow lookup, real Loader topology, keyless stdio e2e coverage, and source-resolution pinning | `docs/postmortem/0001-acp-default-export-drops-inject.zh.md` |
| Services and dependency injection | `docs/user/develop/framework/service.zh.md` |
| Event dispatch modes | `docs/user/develop/framework/events.zh.md` |
| Defensive failure reporting, public-boundary normalization, asynchronous interval ownership, quiescent disposal, listener isolation, scrubbed environments, private temporary files, and link-safe deletion | `docs/defensive-patterns.zh.md` |
| Capability role design | `docs/user/develop/practice/index.zh.md` |
| LLM adapter protocol | `docs/user/develop/practice/llm-adapter.zh.md` |
| LLM streaming, normalized failures, retry policy, max-token termination, and Web status | `docs/subsystems/llm-streaming.zh.md`, `docs/subsystems/session.zh.md`, `packages/core/agent-loop/README.zh.md`, `packages/llm/llm-retry/README.zh.md`, `packages/client/runtime/README.zh.md`, `packages/client/ui-conversation/README.zh.md` |
| Durable retry-notice transitions, browser-relative countdowns, terminal-output freezing, and AUTH display redaction | `packages/client/runtime/README.zh.md`, `packages/client/ui-conversation/README.zh.md` |
| Agent-authored dynamic Cordis extensions | `docs/subsystems/extensions.zh.md`, `packages/extensions/README.zh.md`, `packages/extensions/cordis-host-runner/README.zh.md`, `packages/extensions/tool-cordis/README.zh.md` |
| Optional code runtime, code/both entry boundaries, generated SDK dispatch, and structured bindings | `docs/subsystems/code-runtime.zh.md`, `packages/core/tools/README.zh.md` |
| Agent delivery, cancellation, and ownership | `docs/subsystems/core.zh.md` |
| Web queue snapshots, editing, steering, and keyboard delivery | `packages/host/apiproxy/README.zh.md`, `packages/client/ui-conversation/README.zh.md` |
| Queue text-only editing, immutable mixed-content steering, subagent read-only behavior, race convergence, and pending-to-durable bubble handoff | `packages/client/ui-conversation/README.zh.md` |
| Idle/busy keyboard delivery matrix, host-backed Busy Enter preference, empty-draft whole-queue steering, subagent fallback, and best-effort composer steering | `packages/client/ui-conversation/README.zh.md` |
| MCP stdio and Streamable HTTP transports, deterministic public tool naming, atomic tool generations, list-changed synchronization, call and startup timeouts, reconnect budgets, HMR, non-text projection, structured output validation, and tools-only scope | `packages/mcp/mcp-client/README.zh.md` |
| Skill discovery and loading, scoped shadowing, filesystem rank order, project-root lookup, bundle and flat-file formats, watcher invalidation, incomplete snapshots, separate catalog/body caching, invocation policies, resource guidance, and optional bundled badge | `docs/subsystems/skills.zh.md`, `packages/skill/skill/README.zh.md`, `packages/skill/skill-filesystem/README.zh.md`, `packages/skill/tool-skill/README.zh.md`, `packages/skill/skill-badge/README.zh.md` |
| Plan collaboration state | `docs/subsystems/plan.zh.md`, `packages/plan/plan-mode/README.zh.md` |
| Web search and fetch tools, deterministic provider selection, DeepSeek auxiliary search turns, Perplexity answer/citation mapping, Exa retrieval/highlights, result limits, HTTP transport hygiene, redirect policy, SSRF boundary, timeout layering, and approval limitations | `docs/subsystems/web.zh.md`, `packages/web/web/README.zh.md`, `packages/web/tool-web/README.zh.md`, `packages/web/web-search-deepseek/README.zh.md`, `packages/web/web-search-perplexity/README.zh.md`, `packages/web/web-search-exa/README.zh.md`, `packages/web/web-fetch-http/README.zh.md` |
| Persistent image attachments and browser admission UX | `docs/subsystems/attachment.zh.md`, `packages/attachment/attachment-local/README.zh.md`, `packages/client/ui-attachment/README.zh.md`, `packages/client/ui-conversation/README.zh.md` |
| Turn deliverables, clickable file mentions, and native-open boundary | `packages/client/ui-deliverables/README.zh.md`, `packages/client/ui-conversation/README.zh.md` |
| Structured user questions, response validation, and Web recovery | `docs/subsystems/user-questions.zh.md`, `packages/interaction/tool-ask-user/README.zh.md`, `packages/host/apiproxy/README.zh.md`, `packages/client/ui-user-questions/README.zh.md`, `packages/client/runtime/README.zh.md` |
| Filesystem targets, local UTF-8 reads, version identity, atomic staging and publication, create-without-replace, Windows DACL preservation, literal edit line endings, diff bases, process-local mutation locks, per-Session observation lifecycle, and guarded mutation decisions | `docs/subsystems/filesystem.zh.md`, `packages/fs/fs/README.zh.md`, `packages/fs/fs-local/README.zh.md`, `packages/fs/tool-fs/README.zh.md`, `packages/fs/tool-str-replace-editor/README.zh.md`, `packages/fs/fs-observation-policy/README.zh.md` |
| Bundled glob/grep search and result budgets | `packages/fs/tool-fs-search/README.zh.md` |
| Shell execution, one-shot Bash and PowerShell providers, per-Agent persistent Bash, background Job handoff, bounded output, platform dialects, owner-scoped PTY sessions, readiness detection, send cancellation, sandbox-mode locks, and terminal teardown | `docs/subsystems/shell.zh.md`, `docs/subsystems/terminal.zh.md`, `packages/shell/shell/README.zh.md`, `packages/shell/tool-bash/README.zh.md`, `packages/shell/tool-bash-persistent/README.zh.md`, `packages/shell/tool-pwsh/README.zh.md`, `packages/shell/bash-local/README.zh.md`, `packages/shell/pwsh-local/README.zh.md`, `packages/terminal/terminal/README.zh.md`, `packages/terminal/terminal-bash/README.zh.md`, `packages/terminal/tool-terminal/README.zh.md` |
| Subprocess streams, explicit stdio, credential-name scrubbing, managed environment overlays, bounded tails and private spill files, offset reads, process-tree termination, PTY process observation, synchronous Host-exit cleanup, and platform limitations | `docs/subsystems/subprocess.zh.md`, `packages/subprocess/subprocess/README.zh.md`, `packages/subprocess/subprocess-local/README.zh.md` |
| Shared E2B remote filesystem and subprocess runtime | `packages/e2b/e2b/README.zh.md`, `packages/e2b/fs-e2b/README.zh.md`, `packages/e2b/subprocess-e2b/README.zh.md` |
| LSP semantic navigation, transient documents, pooled stdio server lifecycle, and workspace safety | `docs/subsystems/lsp.zh.md`, `packages/lsp/lsp-stdio/README.zh.md`, `packages/lsp/tool-lsp/README.zh.md` |
| Subagent delegation, continuable Activation routing, Inbox ownership, child-first disposal, interrupt boundaries, explicit reports, settlement notices, and durable directory discovery | `docs/subsystems/subagent.zh.md`, `packages/subagent/subagent/README.zh.md`, `packages/subagent/tool-subagent/README.zh.md`, `packages/subagent/tool-subagent-control/README.zh.md`, `packages/subagent/tool-subagent-report/README.zh.md` |
| Out-of-process Subagent provider selection, startup publication, final-output projection, unattended interaction, native product settings, credential scrubbing, cancellation, and process-tree cleanup | `packages/subagent/subagent-acp/README.zh.md`, `packages/subagent/subagent-dsh-sdk/README.zh.md`, `packages/subagent/subagent-codex/README.zh.md`, `packages/subagent/subagent-claude-code/README.zh.md`, `packages/subprocess/README.zh.md` |
| Todo snapshots | `packages/todo/tool-todo/README.zh.md` |
| TodoDock current-plan projection, turn-boundary clearing, slot order, collapsed status counts, composer visibility, and single-line limit | `packages/client/ui-conversation/README.zh.md`, `packages/todo/tool-todo/README.zh.md` |
| Persistent goals, compare-and-set updates, Goal Round reservation and admission, human-input priority, durability barriers, and cancellation | `docs/subsystems/goal.zh.md`, `packages/goal/tool-goal/README.zh.md`, `packages/goal/goal-round-driver/README.zh.md` |
| Context compaction, durable transaction markers, span revalidation, staged failures, positional ranges, stale-lock handling, and deterministic tool-result pruning | `docs/subsystems/compaction.zh.md`, `packages/compaction/compaction-basic/README.zh.md`, `packages/compaction/compaction-tool-result-pruner/README.zh.md` |
| Browser compaction markers, explicit summary pairing, manual-command identity, unloaded-summary behavior, accessibility affordances, and model-payload suppression | `packages/client/ui-conversation/README.zh.md` |
| Permission presets and approvals | `packages/interaction/permission-presets/README.zh.md`, `packages/interaction/user-approval/README.zh.md` |
| Effective permission preset derivation | `docs/subsystems/permission-presets.zh.md` |
| Approval request lifecycle and audit | `docs/subsystems/approval.zh.md` |
| Browser approval composer takeover, sidebar pending projection, one-time-only decisions, restoration, and Full access confirmation | `packages/client/ui-conversation/README.zh.md`, `packages/client/ui-workspace/README.zh.md` |
| Filesystem sandbox policy, per-call resolution, fail-closed argv confinement, platform runner selection, enforcement classification, Windows ACL boundaries, and remote-provider separation | `docs/subsystems/sandbox.zh.md`, `packages/sandbox/sandbox/README.zh.md`, `packages/sandbox/sandbox-local/README.zh.md`, `packages/sandbox/sandbox-policy/README.zh.md`, `packages/sandbox/sandbox-windows-acl/README.zh.md`, `packages/fs/fs-sandbox/README.zh.md` |
| Landlock partial-enforcement notification misclassification, multi-evidence runner attribution, structured-error preservation, foreground/background convergence, and filesystem-search seam correction | `docs/postmortem/0004-landlock-partial-notice-misclassified-child-failures.zh.md`, `docs/subsystems/sandbox.zh.md`, `packages/shell/bash-sandbox/README.zh.md`, `packages/fs/tool-fs-search/README.zh.md` |
| Tool timeout enforcement, wrapper ordering, and per-agent repetition reminders | `packages/guard/timeout-policy/README.zh.md`, `packages/guard/repeat-tool-reminder/README.zh.md` |
| Background job runtime, per-owner admission, scoped controllers, first-settlement semantics, output budgets, completion delivery, wake limits, and teardown | `docs/subsystems/jobs.zh.md`, `packages/jobs/jobs/README.zh.md`, `packages/jobs/jobs-local/README.zh.md`, `packages/jobs/tool-jobs/README.zh.md` |
| Append-only session event model | `docs/subsystems/session.zh.md` |
| Generated persistence event vocabulary, surface classification, event envelope, declaration merging, unknown-event compatibility, format versioning, and freshness verification | `docs/persistence-catalog.zh.md`, `docs/subsystems/session.zh.md`, `docs/subsystems/persistence.zh.md`, `scripts/gen-persistence-catalog.ts` |
| Session search and log export | `docs/subsystems/session-query.zh.md`, `packages/session-query/tool-session-query/README.zh.md`, `packages/session-query/session-log-export/README.zh.md` |
| Browser session search, local metadata fallback, request cancellation, query limits, and result navigation | `packages/client/ui-workspace/README.zh.md`, `packages/client/runtime/README.zh.md` |
| Structured cross-session references | `docs/subsystems/session-reference.zh.md` |
| Durable session titles, deterministic fallback, first-prompt and all-prompts LLM cadence, route inheritance, request provenance, supersession, failure behavior, and fork semantics | `docs/subsystems/session-title.zh.md`, `packages/session/session-title/README.zh.md`, `packages/session/session-title-llm/README.zh.md`, `packages/session/session-title-first-prompt-llm/README.zh.md`, `packages/session/session-title-all-prompts-llm/README.zh.md` |
| Session fork, rename, archive, and workspace deletion boundaries | `packages/host/apiproxy/README.zh.md`, `packages/client/runtime/README.zh.md`, `packages/client/ui-conversation/README.zh.md`, `packages/client/ui-workspace/README.zh.md` |
| Assistant footer action placement, completed-turn branching, read-only user messages, and selection behavior on failure | `packages/client/ui-conversation/README.zh.md` |
| Full-snapshot archive set, cross-tab and reconnect convergence, selection clearing, and UI failure behavior | `packages/client/runtime/README.zh.md`, `packages/client/ui-workspace/README.zh.md` |
| Session persistence, crash recovery, bounded batching, raw-artifact capability, JSONL/Zstandard layout, SQLite row transactions, suffix reads, lightweight revisions, semantic checkpoint dispatch boundaries, cancellation, and unknown tool outcomes | `docs/subsystems/persistence.zh.md`, `packages/session/session-persistence/README.zh.md`, `packages/session/session-persistence-jsonl/README.zh.md`, `packages/session/session-persistence-sqlite/README.zh.md`, `packages/session/session-checkpoint-policy/README.zh.md` |
| Session projections and cold-read cache | `docs/subsystems/session-projection.zh.md` |
| Browser ConversationNode incremental assembly, prepend identity, gap repair, and frame-coalesced streaming | `packages/client/runtime/README.zh.md`, `packages/client/ui-conversation/README.zh.md` |
| Recoverable composer blocks, localized disabled posture, model-seat exception, dependency direction, no-Workspace precedence, and Host authority | `packages/client/ui-conversation/README.zh.md`, `packages/client/ui-model-selection/README.zh.md` |
| Persistent Chat scroll shell, reserved gutter, sticky composer geometry, textarea wheel chaining, and deferred per-message pagination | `packages/client/ui-conversation/README.zh.md` |
| Non-user context disclosures, durable producer labels, source-shape rendering, opaque compatibility, and steering presentation | `packages/client/ui-conversation/README.zh.md` |
| Streaming Think-row summaries, internal tail following, expanded reading control, and settled-state stabilization | `packages/client/ui-conversation/README.zh.md` |
| Domain storage, per-domain backend routing, JSON whole-unit durability, SQLite row layout, format rejection, in-process change visibility, and multiprocess limits | `docs/subsystems/storage.zh.md`, `packages/storage/storage/README.zh.md`, `packages/storage/storage-domain/README.zh.md`, `packages/storage/storage-json/README.zh.md`, `packages/storage/storage-sqlite/README.zh.md` |
| Atomic Settings/Credentials replacement, cross-process locks, and durability limits | `packages/util/atomic-write/README.zh.md`, `packages/settings/settings-file/README.zh.md`, `packages/credentials/credentials-local/README.zh.md`, `packages/storage/storage-json/README.zh.md` |
| Oversized tool result retention, budget-versus-completeness semantics, UTF-8 boundaries, spill policy scope, private local artifacts, retrieval, and failure fallback | `docs/subsystems/spill.zh.md`, `packages/util/output-retention/README.zh.md`, `packages/spill/spill/README.zh.md`, `packages/spill/spill-local/README.zh.md`, `packages/spill/spill-policy/README.zh.md` |
| User slash commands | `docs/subsystems/commands.zh.md` |
| Browser input triggers, command discovery, and keyboard arbitration | `packages/client/ui-input-trigger/README.zh.md`, `packages/client/ui-commands/README.zh.md`, `packages/client/ui-conversation/README.zh.md` |
| Codex and Claude Code hook bridges, shared exit/output protocol, strict result merging, audit events, and detached-run draining | `packages/hooks/hook-protocol/README.zh.md`, `packages/hooks/hooks-codex/README.zh.md`, `packages/hooks/hooks-claude-code/README.zh.md` |
| Session-local schedules, durable lifecycle, fixed-rate catch-up, fork isolation, and delivery receipts | `docs/subsystems/schedule.zh.md`, `packages/schedule/schedule/README.zh.md` |
| Dynamic workflows, bounded cancellation and quiescence, top-level Chat records, and fresh-agent Ralph handoffs | `docs/subsystems/workflow.zh.md`, `packages/workflow/tool-workflow/README.zh.md`, `packages/workflow/tool-ralph/README.zh.md` |
| Layered user settings, file hot reload, safe mutation, revision conflicts, and secret redaction | `docs/subsystems/settings.zh.md`, `packages/settings/settings/README.zh.md`, `packages/settings/settings-file/README.zh.md`, `packages/client/ui-settings/README.zh.md`, `packages/host/apiproxy/README.zh.md` |
| Browser locale preference, navigator fallback, namespaced dictionaries, live rendering limits, and repository bilingual-document pairing | `packages/client/locale/README.zh.md`, `docs/i18n/README.zh.md`, `docs/i18n/translation-rules.zh.md` |
| Browser schema rehydration, user-layer drafts, validation, and executable-envelope trust | `packages/client/schema-form/README.zh.md`, `packages/client/ui-settings-plugins/README.zh.md` |
| Credential references, rotation, local-document validation, permissions, and same-UID boundary | `docs/subsystems/credentials.zh.md`, `packages/credentials/credentials-local/README.zh.md` |
| Frozen launch environment, `.env` provenance, and credential-source precedence | `packages/util/launch-environment/README.zh.md`, `packages/boot/app-boot/README.zh.md`, `packages/credentials/credentials-local/README.zh.md` |
| Agent preset composition | `packages/preset/agent-presets/README.zh.md` |
| Persona and system prompt assembly | `packages/preset/persona/README.zh.md`, `docs/subsystems/system-prompt.zh.md` |
| Durable workspace instruction discovery, refresh, and byte budgets | `packages/context/agent-instructions/README.zh.md` |
| Request-local browser time zones and durable per-step time context | `packages/context/time-context/README.zh.md`, `packages/client/runtime/README.zh.md`, `docs/subsystems/schedule.zh.md` |
| Optional tmux location detection, TTY verification, and persistent snapshots | `packages/context/tmux-context/README.zh.md`, `packages/shell/shell/README.zh.md` |
| Token metering, context pressure, and Web statistics | `docs/subsystems/token-meter.zh.md`, `packages/llm/token-meter/README.zh.md`, `packages/client/ui-conversation/README.zh.md` |
| Full-log session statistics, window fallback, TTFT/throughput sample admission, per-turn timing footers, truncation tooltip, and missing-unit omission | `packages/client/ui-conversation/README.zh.md` |
| Trajectory event inspection, timeline interaction, virtualized history, stable prefix pagination, composer clearance, and streaming follow | `packages/client/ui-trajectory/README.zh.md` |
| Session telemetry, chunk sampling, handoff versus delivery, sharing disclosure, shutdown drain, and redaction | `docs/subsystems/session-telemetry.zh.md` |
| Per-home anonymous user identity | `packages/identity/anonymous-user-id/README.zh.md` |
| Package-owned runtime invariants, atomic registration, child-fiber cleanup, and selection regex semantics | `docs/subsystems/invariants.zh.md` |
| Per-message local feedback, durable target ordering, Web exposure limits, process-local concurrency, and cross-tab visibility | `docs/subsystems/feedback.zh.md` |

## Refresh checklist

When updating content from upstream:

1. Fetch the latest `deepseek-ai/deepseek-harness` default branch.
2. Review changes to every canonical source listed above.
3. Update both Chinese content and the English locale dictionary together.
4. Replace the reviewed commit and date in this file and on the page.
5. Run `npm run check` and `npm run build`.

Do not copy API keys, local paths, unpublished implementation details, or
community contact images into this repository.
