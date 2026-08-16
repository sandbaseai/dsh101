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
| CLI and profiles | `apps/cli/README.zh.md` |
| User profile patch layering, hot reload, and last-good HMR fallback | `packages/boot/app-boot/README.zh.md` |
| Headless execution and configuration dumps | `apps/cli/reference/README.zh.md` |
| First plugin | `docs/user/develop/basic/index.zh.md` |
| Tool development | `docs/user/develop/basic/tool.zh.md`, `docs/subsystems/tools.zh.md` |
| Code Mode nested tool-call topology, incremental keyed updates, malformed-edge limits, and UI ownership | `packages/client/runtime/README.zh.md`, `packages/client/ui-tool/README.zh.md` |
| Plugin configuration | `docs/user/develop/basic/config.zh.md` |
| Bundles and publishing | `docs/user/develop/basic/publish.zh.md` |
| Fiber lifecycle | `docs/user/develop/framework/index.zh.md` |
| Web client module graph and bundle delivery | `docs/subsystems/client-modules.zh.md` |
| Browser UI slot declarations, chain selection, stores, and recursive lifecycle cleanup | `packages/client/ui-slots/README.zh.md` |
| Slot declaration injection, epoch-bound effects, transactional registration, and teardown | `packages/client/runtime/README.zh.md` |
| Client bundle rebuild detection, serialized HMR replacement, cleanup, and failure semantics | `packages/client/hmr/README.zh.md` |
| Runtime plugin inventory and Settings diagnostics | `packages/host/plugin-inventory/README.zh.md`, `packages/client/ui-settings-plugin-inventory/README.zh.md`, `apps/cli/reference/README.zh.md` |
| Scoped registration layers and ownership | `docs/subsystems/scope.zh.md` |
| Web server routing and exposure boundary | `docs/subsystems/web-server.zh.md` |
| Browser RPC transport and privileged API boundary | `packages/host/apiproxy/README.zh.md`, `packages/client/connection/README.zh.md` |
| Host-native path opening, WSL handoff, shell-free command execution, and desktop detection | `packages/host/apiproxy/README.zh.md`, `packages/util/native-command/README.zh.md`, `packages/host/directory-picker-auto/README.zh.md`, `packages/client/connection/README.zh.md` |
| Browser WebSocket readiness, generations, and reconnect backoff | `packages/client/connection/README.zh.md`, `packages/client/connection/src/client/connection.ts` |
| Generated TypeRT remote-call boundary | `docs/subsystems/typert.zh.md` |
| Services and dependency injection | `docs/user/develop/framework/service.zh.md` |
| Event dispatch modes | `docs/user/develop/framework/events.zh.md` |
| Capability role design | `docs/user/develop/practice/index.zh.md` |
| LLM adapter protocol | `docs/user/develop/practice/llm-adapter.zh.md` |
| LLM streaming, normalized failures, retry policy, max-token termination, and Web status | `docs/subsystems/llm-streaming.zh.md`, `docs/subsystems/session.zh.md`, `packages/core/agent-loop/README.zh.md`, `packages/llm/llm-retry/README.zh.md`, `packages/client/runtime/README.zh.md`, `packages/client/ui-conversation/README.zh.md` |
| Durable retry-notice transitions, browser-relative countdowns, terminal-output freezing, and AUTH display redaction | `packages/client/runtime/README.zh.md`, `packages/client/ui-conversation/README.zh.md` |
| Agent-authored dynamic Cordis extensions | `docs/subsystems/extensions.zh.md`, `packages/extensions/README.zh.md`, `packages/extensions/cordis-host-runner/README.zh.md`, `packages/extensions/tool-cordis/README.zh.md` |
| Optional code runtime and structured bindings | `docs/subsystems/code-runtime.zh.md` |
| Agent delivery, cancellation, and ownership | `docs/subsystems/core.zh.md` |
| Web queue snapshots, editing, steering, and keyboard delivery | `packages/host/apiproxy/README.zh.md`, `packages/client/ui-conversation/README.zh.md` |
| Queue text-only editing, immutable mixed-content steering, subagent read-only behavior, race convergence, and pending-to-durable bubble handoff | `packages/client/ui-conversation/README.zh.md` |
| Idle/busy keyboard delivery matrix, host-backed Busy Enter preference, empty-draft whole-queue steering, subagent fallback, and best-effort composer steering | `packages/client/ui-conversation/README.zh.md` |
| MCP transports and tool bridge | `packages/mcp/mcp-client/README.zh.md` |
| Skill discovery and loading | `docs/subsystems/skills.zh.md`, `packages/skill/skill/README.zh.md`, `packages/skill/tool-skill/README.zh.md` |
| Plan collaboration state | `docs/subsystems/plan.zh.md`, `packages/plan/plan-mode/README.zh.md` |
| Web search and fetch tools | `docs/subsystems/web.zh.md`, `packages/web/tool-web/README.zh.md` |
| Persistent image attachments and browser admission UX | `docs/subsystems/attachment.zh.md`, `packages/attachment/attachment-local/README.zh.md`, `packages/client/ui-attachment/README.zh.md`, `packages/client/ui-conversation/README.zh.md` |
| Turn deliverables, clickable file mentions, and native-open boundary | `packages/client/ui-deliverables/README.zh.md`, `packages/client/ui-conversation/README.zh.md` |
| Structured user questions, response validation, and Web recovery | `docs/subsystems/user-questions.zh.md`, `packages/interaction/tool-ask-user/README.zh.md`, `packages/host/apiproxy/README.zh.md`, `packages/client/ui-user-questions/README.zh.md`, `packages/client/runtime/README.zh.md` |
| Filesystem targets and observation guards | `docs/subsystems/filesystem.zh.md` |
| Bundled glob/grep search and result budgets | `packages/fs/tool-fs-search/README.zh.md` |
| Shell execution and persistent terminals | `docs/subsystems/shell.zh.md`, `docs/subsystems/terminal.zh.md`, `packages/terminal/tool-terminal/README.zh.md` |
| Subprocess streams and process-tree termination | `docs/subsystems/subprocess.zh.md` |
| Shared E2B remote filesystem and subprocess runtime | `packages/e2b/e2b/README.zh.md`, `packages/e2b/fs-e2b/README.zh.md`, `packages/e2b/subprocess-e2b/README.zh.md` |
| LSP semantic code navigation | `docs/subsystems/lsp.zh.md`, `packages/lsp/tool-lsp/README.zh.md` |
| Subagent delegation and lifecycles | `docs/subsystems/subagent.zh.md`, `packages/subagent/subagent/README.zh.md`, `packages/subagent/tool-subagent/README.zh.md` |
| Todo snapshots | `packages/todo/tool-todo/README.zh.md` |
| TodoDock current-plan projection, turn-boundary clearing, slot order, collapsed status counts, composer visibility, and single-line limit | `packages/client/ui-conversation/README.zh.md`, `packages/todo/tool-todo/README.zh.md` |
| Persistent goals and goal rounds | `docs/subsystems/goal.zh.md`, `packages/goal/tool-goal/README.zh.md`, `packages/goal/goal-round-driver/README.zh.md` |
| Context compaction | `docs/subsystems/compaction.zh.md`, `packages/compaction/compaction-basic/README.zh.md` |
| Permission presets and approvals | `packages/interaction/permission-presets/README.zh.md`, `packages/interaction/user-approval/README.zh.md` |
| Effective permission preset derivation | `docs/subsystems/permission-presets.zh.md` |
| Approval request lifecycle and audit | `docs/subsystems/approval.zh.md` |
| Browser approval composer takeover, sidebar pending projection, one-time-only decisions, restoration, and Full access confirmation | `packages/client/ui-conversation/README.zh.md`, `packages/client/ui-workspace/README.zh.md` |
| Filesystem sandbox policy | `docs/subsystems/sandbox.zh.md`, `packages/fs/fs-sandbox/README.zh.md` |
| Tool timeout enforcement, wrapper ordering, and per-agent repetition reminders | `packages/guard/timeout-policy/README.zh.md`, `packages/guard/repeat-tool-reminder/README.zh.md` |
| Background job runtime | `docs/subsystems/jobs.zh.md` |
| Append-only session event model | `docs/subsystems/session.zh.md` |
| Session search and log export | `docs/subsystems/session-query.zh.md`, `packages/session-query/tool-session-query/README.zh.md`, `packages/session-query/session-log-export/README.zh.md` |
| Browser session search, local metadata fallback, request cancellation, query limits, and result navigation | `packages/client/ui-workspace/README.zh.md`, `packages/client/runtime/README.zh.md` |
| Structured cross-session references | `docs/subsystems/session-reference.zh.md` |
| Durable session titles | `docs/subsystems/session-title.zh.md` |
| Session fork, rename, archive, and workspace deletion boundaries | `packages/host/apiproxy/README.zh.md`, `packages/client/runtime/README.zh.md`, `packages/client/ui-conversation/README.zh.md`, `packages/client/ui-workspace/README.zh.md` |
| Assistant footer action placement, completed-turn branching, read-only user messages, and selection behavior on failure | `packages/client/ui-conversation/README.zh.md` |
| Full-snapshot archive set, cross-tab and reconnect convergence, selection clearing, and UI failure behavior | `packages/client/runtime/README.zh.md`, `packages/client/ui-workspace/README.zh.md` |
| Session persistence and crash recovery | `docs/subsystems/persistence.zh.md`, `packages/session/session-checkpoint-policy/README.zh.md` |
| Session projections and cold-read cache | `docs/subsystems/session-projection.zh.md` |
| Browser ConversationNode incremental assembly, prepend identity, gap repair, and frame-coalesced streaming | `packages/client/runtime/README.zh.md`, `packages/client/ui-conversation/README.zh.md` |
| Recoverable composer blocks, localized disabled posture, model-seat exception, dependency direction, no-Workspace precedence, and Host authority | `packages/client/ui-conversation/README.zh.md`, `packages/client/ui-model-selection/README.zh.md` |
| Persistent Chat scroll shell, reserved gutter, sticky composer geometry, textarea wheel chaining, and deferred per-message pagination | `packages/client/ui-conversation/README.zh.md` |
| Non-user context disclosures, durable producer labels, source-shape rendering, opaque compatibility, and steering presentation | `packages/client/ui-conversation/README.zh.md` |
| Streaming Think-row summaries, internal tail following, expanded reading control, and settled-state stabilization | `packages/client/ui-conversation/README.zh.md` |
| Domain storage | `docs/subsystems/storage.zh.md` |
| Atomic Settings/Credentials replacement, cross-process locks, and durability limits | `packages/util/atomic-write/README.zh.md`, `packages/settings/settings-file/README.zh.md`, `packages/credentials/credentials-local/README.zh.md`, `packages/storage/storage-json/README.zh.md` |
| Oversized tool result spill | `docs/subsystems/spill.zh.md` |
| User slash commands | `docs/subsystems/commands.zh.md` |
| Browser input triggers, command discovery, and keyboard arbitration | `packages/client/ui-input-trigger/README.zh.md`, `packages/client/ui-commands/README.zh.md`, `packages/client/ui-conversation/README.zh.md` |
| Codex and Claude Code hook bridges | `packages/hooks/hooks-codex/README.zh.md`, `packages/hooks/hooks-claude-code/README.zh.md` |
| Session-local schedules | `docs/subsystems/schedule.zh.md` |
| Dynamic workflows and Ralph | `docs/subsystems/workflow.zh.md`, `packages/workflow/tool-workflow/README.zh.md`, `packages/workflow/tool-ralph/README.zh.md` |
| Layered user settings, file hot reload, safe mutation, revision conflicts, and secret redaction | `docs/subsystems/settings.zh.md`, `packages/settings/settings/README.zh.md`, `packages/settings/settings-file/README.zh.md`, `packages/client/ui-settings/README.zh.md`, `packages/host/apiproxy/README.zh.md` |
| Browser schema rehydration, user-layer drafts, validation, and executable-envelope trust | `packages/client/schema-form/README.zh.md`, `packages/client/ui-settings-plugins/README.zh.md` |
| Credential references, rotation, local-document validation, permissions, and same-UID boundary | `docs/subsystems/credentials.zh.md`, `packages/credentials/credentials-local/README.zh.md` |
| Frozen launch environment, `.env` provenance, and credential-source precedence | `packages/util/launch-environment/README.zh.md`, `packages/boot/app-boot/README.zh.md`, `packages/credentials/credentials-local/README.zh.md` |
| Agent preset composition | `packages/preset/agent-presets/README.zh.md` |
| Persona and system prompt assembly | `packages/preset/persona/README.zh.md`, `docs/subsystems/system-prompt.zh.md` |
| Durable workspace instruction discovery, refresh, and byte budgets | `packages/context/agent-instructions/README.zh.md` |
| Request-local browser time zones and durable per-step time context | `packages/context/time-context/README.zh.md`, `packages/client/runtime/README.zh.md`, `docs/subsystems/schedule.zh.md` |
| Optional tmux location detection, TTY verification, and persistent snapshots | `packages/context/tmux-context/README.zh.md`, `packages/shell/shell/README.zh.md` |
| Token metering, context pressure, and Web statistics | `docs/subsystems/token-meter.zh.md`, `packages/llm/token-meter/README.zh.md`, `packages/client/ui-conversation/README.zh.md` |
| Trajectory event inspection, timeline interaction, virtualized history, and streaming follow | `packages/client/ui-trajectory/README.zh.md` |
| Session telemetry and redaction | `docs/subsystems/session-telemetry.zh.md` |
| Per-home anonymous user identity | `packages/identity/anonymous-user-id/README.zh.md` |
| Package-owned runtime invariants | `docs/subsystems/invariants.zh.md` |
| Per-message feedback | `docs/subsystems/feedback.zh.md` |

## Refresh checklist

When updating content from upstream:

1. Fetch the latest `deepseek-ai/deepseek-harness` default branch.
2. Review changes to every canonical source listed above.
3. Update both Chinese content and the English locale dictionary together.
4. Replace the reviewed commit and date in this file and on the page.
5. Run `npm run check` and `npm run build`.

Do not copy API keys, local paths, unpublished implementation details, or
community contact images into this repository.
