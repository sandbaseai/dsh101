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

const requiredSections = ['quickstart', 'install', 'headless', 'inspect-config', 'model', 'workspace', 'session-log', 'permissions', 'permission-presets', 'approval-flow', 'sandbox', 'e2b-runtime', 'python', 'plugins', 'tools', 'config-schema', 'events', 'lifecycle', 'client-modules', 'scope-routing', 'web-server', 'typert-remote', 'capability-seam', 'llm-adapter', 'llm-streaming', 'dynamic-extensions', 'profiles', 'settings-system', 'credentials-system', 'agent-presets', 'prompt-assembly', 'mcp', 'skills', 'plan-mode', 'web-tools', 'attachments', 'user-questions', 'filesystem-seam', 'file-search', 'shell-terminal', 'subprocess-seam', 'lsp-navigation', 'commands', 'hooks', 'schedule', 'workflows', 'token-meter', 'telemetry', 'anonymous-id', 'invariants', 'feedback', 'subagents', 'todos', 'goals', 'compaction', 'guardrails', 'background-jobs', 'session-history', 'session-reference', 'session-title', 'persistence', 'session-projection', 'storage-domains', 'spill-output']
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
