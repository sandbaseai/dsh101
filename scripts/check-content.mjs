import { existsSync, readFileSync } from 'node:fs'
import { normalizedEn } from '../locales.js'

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8')
const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]))
const brokenAnchors = [...html.matchAll(/\bhref="#([^"]+)"/g)]
  .map(match => match[1])
  .filter(id => !ids.has(id))

if (brokenAnchors.length > 0) {
  throw new Error(`Broken local anchors: ${[...new Set(brokenAnchors)].join(', ')}`)
}

const requiredSections = ['quickstart', 'install', 'headless', 'inspect-config', 'model', 'onboarding', 'model-selection-state', 'composer-blocks', 'workspace', 'workspace-list', 'directory-picker', 'new-session', 'session-row-status', 'session-log', 'agent-delivery', 'session-queue', 'queue-operations', 'keyboard-delivery', 'permissions', 'permission-presets', 'approval-flow', 'approval-composer', 'sandbox', 'e2b-runtime', 'python', 'plugins', 'tools', 'tool-call-tree', 'tool-details-boundary', 'config-schema', 'events', 'lifecycle', 'client-modules', 'ui-slots', 'slot-injection', 'client-hmr', 'plugin-inventory', 'scope-routing', 'web-server', 'web-api-security', 'native-open-boundary', 'connection-recovery', 'typert-remote', 'capability-seam', 'llm-adapter', 'llm-streaming', 'llm-retry', 'retry-projection', 'max-tokens', 'dynamic-extensions', 'code-runtime', 'profiles', 'profile-hot-reload', 'settings-system', 'settings-safe-update', 'schema-form', 'settings-file-lifecycle', 'credentials-system', 'credential-file-security', 'launch-environment', 'agent-presets', 'prompt-assembly', 'workspace-instructions', 'time-context', 'tmux-context', 'mcp', 'skills', 'plan-mode', 'web-tools', 'attachments', 'attachment-ui', 'deliverables', 'user-questions', 'user-question-lifecycle', 'filesystem-seam', 'file-search', 'shell-terminal', 'subprocess-seam', 'lsp-navigation', 'commands', 'input-triggers', 'hooks', 'schedule', 'workflows', 'token-meter', 'session-stats', 'context-meter', 'trajectory', 'trajectory-viewport', 'telemetry', 'telemetry-delivery', 'anonymous-id', 'invariants', 'invariant-registration', 'feedback', 'feedback-persistence', 'subagents', 'subagent-activation', 'subagent-report', 'subagent-discovery', 'todos', 'todo-dock', 'goals', 'goal-round-admission', 'compaction', 'compaction-transaction', 'compaction-checkpoint', 'guardrails', 'guardrail-semantics', 'background-jobs', 'session-history', 'browser-session-search', 'session-reference', 'session-title', 'session-management', 'message-actions', 'archive-convergence', 'persistence', 'session-projection', 'chat-assembly', 'chat-scroll-shell', 'context-disclosure', 'thinking-tail', 'storage-domains', 'atomic-file-write', 'spill-output']
const missingSections = requiredSections.filter(id => !ids.has(id))
if (missingSections.length > 0) {
  throw new Error(`Missing required sections: ${missingSections.join(', ')}`)
}

const localeSource = readFileSync(new URL('../locales.js', import.meta.url), 'utf8')
for (const marker of ['Sandbox modes', 'Approval lifecycle', 'Python SDK quickstart', 'Configuration schema', 'Event system', 'Web client modules', 'Scope routing', 'Web server boundaries', 'TypeRT remote boundaries', 'Capability roles', 'LLM adapters', 'Streaming and retries', 'Dynamic runtime extensions', 'Connect an MCP server', 'Skill discovery and loading', 'Layered settings', 'Credential references', 'Agent presets', 'Persona and prompt assembly', 'Web search and fetch', 'Image attachments', 'Ask the user', 'Filesystem semantics', 'Shell and persistent terminals', 'Subprocess runtime', 'Precise LSP code navigation', 'Slash commands', 'Codex and Claude Code hooks', 'Session-local reminders', 'Workflows and Ralph', 'Token metering', 'Session telemetry', 'Runtime invariants', 'Message feedback', 'Subagent delegation', 'Persistent goals', 'Context compaction', 'Tool guardrails', 'Background jobs', 'Session search and log export', 'Cross-session references', 'Durable session titles', 'Session persistence and recovery', 'Session projections and cold reads', 'Domain storage for non-session data', 'Oversized tool results and spill', 'Content provenance']) {
  if (!localeSource.includes(marker)) throw new Error(`English locale is missing: ${marker}`)
}

const translatableHtml = html
  .replace(/<(script|style|pre|svg|title)\b[^>]*>[\s\S]*?<\/\1>/gi, '')
  .replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi, '<i></i>')
  .replace(/<!--([\s\S]*?)-->/g, '')
const chineseTextNodes = [...translatableHtml.matchAll(/>([^<]+)</g)]
  .map(match => match[1].trim())
  .filter(text => text && /\p{Script=Han}/u.test(text))
const untranslated = [...new Set(chineseTextNodes.filter(text => !normalizedEn.has(text)))]
if (untranslated.length > 0) {
  throw new Error(`English locale is missing ${untranslated.length} text nodes:\n${untranslated.map(text => `- ${text}`).join('\n')}`)
}

for (const asset of ['public/favicon.svg', 'public/social-card.svg', 'public/site.webmanifest', 'public/_headers', 'public/_redirects', 'docs/cloudflare-deploy.md', '.github/workflows/ci.yml', '.github/workflows/deploy-cloudflare-pages.yml']) {
  if (!existsSync(new URL(`../${asset}`, import.meta.url))) throw new Error(`Required project asset is missing: ${asset}`)
}

for (const metadata of ['rel="manifest"', 'property="og:title"', 'name="twitter:card"']) {
  if (!html.includes(metadata)) throw new Error(`Required page metadata is missing: ${metadata}`)
}

const lockfile = readFileSync(new URL('../package-lock.json', import.meta.url), 'utf8')
if (/"resolved": "http:/u.test(lockfile) || lockfile.includes('mirrors.tencentyun.com')) {
  throw new Error('package-lock.json contains a non-portable or insecure package registry URL')
}

console.log(`content check passed (${ids.size} ids, ${requiredSections.length} required sections)`)
