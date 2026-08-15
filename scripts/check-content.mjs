import { readFileSync } from 'node:fs'

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8')
const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]))
const brokenAnchors = [...html.matchAll(/\bhref="#([^"]+)"/g)]
  .map(match => match[1])
  .filter(id => !ids.has(id))

if (brokenAnchors.length > 0) {
  throw new Error(`Broken local anchors: ${[...new Set(brokenAnchors)].join(', ')}`)
}

const requiredSections = ['quickstart', 'install', 'model', 'workspace', 'python', 'plugins', 'tools', 'config-schema', 'events', 'lifecycle', 'capability-seam', 'llm-adapter', 'profiles', 'mcp', 'skills', 'plan-mode', 'web-tools']
const missingSections = requiredSections.filter(id => !ids.has(id))
if (missingSections.length > 0) {
  throw new Error(`Missing required sections: ${missingSections.join(', ')}`)
}

const localeSource = readFileSync(new URL('../locales.js', import.meta.url), 'utf8')
for (const marker of ['Python SDK quickstart', 'Configuration schema', 'Event system', 'Capability roles', 'LLM adapters', 'Connect an MCP server', 'Skill discovery and loading', 'Web search and fetch', 'Content provenance']) {
  if (!localeSource.includes(marker)) throw new Error(`English locale is missing: ${marker}`)
}

console.log(`content check passed (${ids.size} ids, ${requiredSections.length} required sections)`)
