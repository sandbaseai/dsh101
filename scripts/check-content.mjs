import { existsSync, readFileSync } from 'node:fs'

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8')
const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]))
const brokenAnchors = [...html.matchAll(/\bhref="#([^"]+)"/g)]
  .map(match => match[1])
  .filter(id => !ids.has(id))

if (brokenAnchors.length > 0) {
  throw new Error(`Broken local anchors: ${[...new Set(brokenAnchors)].join(', ')}`)
}

const requiredSections = ['quickstart', 'install', 'model', 'workspace', 'permissions', 'sandbox', 'python', 'plugins', 'tools', 'config-schema', 'events', 'lifecycle', 'capability-seam', 'llm-adapter', 'profiles', 'mcp', 'skills', 'plan-mode', 'web-tools', 'attachments', 'user-questions', 'shell-terminal', 'lsp-navigation', 'subagents', 'todos', 'goals', 'compaction', 'guardrails', 'background-jobs', 'session-history']
const missingSections = requiredSections.filter(id => !ids.has(id))
if (missingSections.length > 0) {
  throw new Error(`Missing required sections: ${missingSections.join(', ')}`)
}

const localeSource = readFileSync(new URL('../locales.js', import.meta.url), 'utf8')
for (const marker of ['Sandbox modes', 'Python SDK quickstart', 'Configuration schema', 'Event system', 'Capability roles', 'LLM adapters', 'Connect an MCP server', 'Skill discovery and loading', 'Web search and fetch', 'Image attachments', 'Ask the user', 'Shell and persistent terminals', 'Precise LSP code navigation', 'Subagent delegation', 'Persistent goals', 'Context compaction', 'Tool guardrails', 'Background jobs', 'Session search and log export', 'Content provenance']) {
  if (!localeSource.includes(marker)) throw new Error(`English locale is missing: ${marker}`)
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
