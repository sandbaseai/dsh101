# Content sources

DSH 101 is an independent community guide. Product facts and code examples are
adapted from the public DeepSeek Harness repository and rewritten for this
site's learning path.

Last upstream review:

- Repository: `deepseek-ai/deepseek-harness`
- Commit: `47f943859bef60e4160492346772ded9b24f765a`
- Commit date: 2026-08-13

## Source map

| DSH 101 section | Canonical upstream source |
| --- | --- |
| Install and run | `README.zh.md` |
| Web UI quickstart | `docs/user/guide/index.zh.md` |
| Model providers and credentials | `docs/user/guide/providers.zh.md` |
| Python SDK and security boundary | `docs/user/guide/python-sdk.zh.md` |
| CLI and profiles | `apps/cli/README.zh.md` |
| First plugin | `docs/user/develop/basic/index.zh.md` |
| Tool development | `docs/user/develop/basic/tool.zh.md` |
| Plugin configuration | `docs/user/develop/basic/config.zh.md` |
| Bundles and publishing | `docs/user/develop/basic/publish.zh.md` |
| Fiber lifecycle | `docs/user/develop/framework/index.zh.md` |
| Web client module graph and bundle delivery | `docs/subsystems/client-modules.zh.md` |
| Scoped registration layers and ownership | `docs/subsystems/scope.zh.md` |
| Web server routing and exposure boundary | `docs/subsystems/web-server.zh.md` |
| Generated TypeRT remote-call boundary | `docs/subsystems/typert.zh.md` |
| Services and dependency injection | `docs/user/develop/framework/service.zh.md` |
| Event dispatch modes | `docs/user/develop/framework/events.zh.md` |
| Capability role design | `docs/user/develop/practice/index.zh.md` |
| LLM adapter protocol | `docs/user/develop/practice/llm-adapter.zh.md` |
| LLM streaming, normalized failures and retry policy | `docs/subsystems/llm-streaming.zh.md` |
| Agent-authored dynamic Cordis extensions | `docs/subsystems/extensions.zh.md`, `packages/extensions/README.zh.md`, `packages/extensions/cordis-host-runner/README.zh.md`, `packages/extensions/tool-cordis/README.zh.md` |
| MCP transports and tool bridge | `packages/mcp/mcp-client/README.zh.md` |
| Skill discovery and loading | `packages/skill/skill/README.zh.md`, `packages/skill/tool-skill/README.zh.md` |
| Plan collaboration state | `packages/plan/plan-mode/README.zh.md` |
| Web search and fetch tools | `packages/web/tool-web/README.zh.md` |
| Persistent image attachments | `docs/subsystems/attachment.zh.md` |
| Structured user questions | `docs/subsystems/user-questions.zh.md` |
| Filesystem targets and observation guards | `docs/subsystems/filesystem.zh.md` |
| Shell execution and persistent terminals | `docs/subsystems/shell.zh.md`, `docs/subsystems/terminal.zh.md`, `packages/terminal/tool-terminal/README.zh.md` |
| Subprocess streams and process-tree termination | `docs/subsystems/subprocess.zh.md` |
| LSP semantic code navigation | `docs/subsystems/lsp.zh.md`, `packages/lsp/tool-lsp/README.zh.md` |
| Subagent delegation and lifecycles | `packages/subagent/subagent/README.zh.md`, `packages/subagent/tool-subagent/README.zh.md` |
| Todo snapshots | `packages/todo/tool-todo/README.zh.md` |
| Persistent goals and goal rounds | `packages/goal/tool-goal/README.zh.md`, `packages/goal/goal-round-driver/README.zh.md` |
| Context compaction | `packages/compaction/compaction-basic/README.zh.md` |
| Permission presets and approvals | `packages/interaction/permission-presets/README.zh.md`, `packages/interaction/user-approval/README.zh.md` |
| Approval request lifecycle and audit | `docs/subsystems/approval.zh.md` |
| Filesystem sandbox policy | `packages/fs/fs-sandbox/README.zh.md` |
| Tool reliability guardrails | `packages/guard/timeout-policy/README.zh.md`, `packages/guard/repeat-tool-reminder/README.zh.md` |
| Background job runtime | `docs/subsystems/jobs.zh.md` |
| Session search and log export | `docs/subsystems/session-query.zh.md`, `packages/session-query/tool-session-query/README.zh.md`, `packages/session-query/session-log-export/README.zh.md` |
| Structured cross-session references | `docs/subsystems/session-reference.zh.md` |
| Durable session titles | `docs/subsystems/session-title.zh.md` |
| Session persistence and crash recovery | `docs/subsystems/persistence.zh.md`, `packages/session/session-checkpoint-policy/README.zh.md` |
| Session projections and cold-read cache | `docs/subsystems/session-projection.zh.md` |
| Domain storage | `docs/subsystems/storage.zh.md` |
| Oversized tool result spill | `docs/subsystems/spill.zh.md` |
| User slash commands | `docs/subsystems/commands.zh.md` |
| Codex and Claude Code hook bridges | `packages/hooks/hooks-codex/README.zh.md`, `packages/hooks/hooks-claude-code/README.zh.md` |
| Session-local schedules | `docs/subsystems/schedule.zh.md` |
| Dynamic workflows and Ralph | `docs/subsystems/workflow.zh.md`, `packages/workflow/tool-workflow/README.zh.md`, `packages/workflow/tool-ralph/README.zh.md` |
| Layered user settings | `docs/subsystems/settings.zh.md` |
| Credential references and rotation | `docs/subsystems/credentials.zh.md` |
| Agent preset composition | `packages/preset/agent-presets/README.zh.md` |
| Persona and system prompt assembly | `packages/preset/persona/README.zh.md`, `docs/subsystems/system-prompt.zh.md` |
| Token metering | `docs/subsystems/token-meter.zh.md` |
| Session telemetry and redaction | `docs/subsystems/session-telemetry.zh.md` |
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
