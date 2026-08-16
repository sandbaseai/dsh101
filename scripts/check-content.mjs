import { existsSync, readFileSync } from 'node:fs'
import { normalizedEn } from '../locales.js'

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8')
const manifest = readFileSync(new URL('../public/site.webmanifest', import.meta.url), 'utf8')
const socialCard = readFileSync(new URL('../public/social-card.svg', import.meta.url), 'utf8')
const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]))
const brokenAnchors = [...html.matchAll(/\bhref="#([^"]+)"/g)]
  .map(match => match[1])
  .filter(id => !ids.has(id))
if (brokenAnchors.length) throw new Error(`Broken local anchors: ${[...new Set(brokenAnchors)].join(', ')}`)

const requiredSections = ['quickstart', 'run', 'models', 'workspace', 'task', 'python', 'develop', 'plugin-shapes', 'reference', 'capabilities', 'preview']
const missingSections = requiredSections.filter(id => !ids.has(id))
if (missingSections.length) throw new Error(`Missing official-guide sections: ${missingSections.join(', ')}`)

for (const required of [
  'npx @deepseek-ai/dsh web',
  'deepseek-harness-sdk',
  '@deepseek-ai/cordis',
  'danger-full-access',
  'DeepSeek Harness 是由 DeepSeek AI 开发的开源 agent harness',
  '本站为非官方社区镜像',
]) {
  if (!html.includes(required)) throw new Error(`Missing canonical public content: ${required}`)
}
for (const forbidden of ['TypeRT', 'DSH 101', '最后核对上游提交']) {
  if ([html, manifest, socialCard].some(source => source.includes(forbidden))) throw new Error(`Stale or incorrect public copy remains: ${forbidden}`)
}

const translatableHtml = html
  .replace(/<(script|style|pre|svg|title)\b[^>]*>[\s\S]*?<\/\1>/gi, '')
  .replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi, '<i></i>')
  .replace(/<!--([\s\S]*?)-->/g, '')
const chineseTextNodes = [...translatableHtml.matchAll(/>([^<]+)</g)]
  .map(match => match[1].trim())
  .filter(text => text && /\p{Script=Han}/u.test(text))
const untranslated = [...new Set(chineseTextNodes.filter(text => !normalizedEn.has(text)))]
if (untranslated.length) throw new Error(`English locale is missing ${untranslated.length} text nodes:\n${untranslated.map(text => `- ${text}`).join('\n')}`)

for (const asset of ['public/favicon.svg', 'public/wordmark.svg', 'public/social-card.svg', 'public/site.webmanifest', 'public/_headers', 'public/_redirects', 'docs/cloudflare-deploy.md', '.github/workflows/ci.yml', '.github/workflows/deploy-cloudflare-pages.yml']) {
  if (!existsSync(new URL(`../${asset}`, import.meta.url))) throw new Error(`Required project asset is missing: ${asset}`)
}
for (const metadata of ['rel="manifest"', 'rel="canonical"', 'property="og:title"', 'property="og:url"', 'name="twitter:card"']) {
  if (!html.includes(metadata)) throw new Error(`Required page metadata is missing: ${metadata}`)
}

console.log(`content check passed (${ids.size} ids, ${requiredSections.length} public sections)`)
