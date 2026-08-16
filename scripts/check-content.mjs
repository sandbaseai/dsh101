import { existsSync, readFileSync } from 'node:fs'

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8')
const cordis = readFileSync(new URL('../cordis/index.html', import.meta.url), 'utf8')
const ecosystem = readFileSync(new URL('../ecosystem/index.html', import.meta.url), 'utf8')
const script = readFileSync(new URL('../landing.js', import.meta.url), 'utf8')
const styles = readFileSync(new URL('../landing.css', import.meta.url), 'utf8')
const manifest = readFileSync(new URL('../public/site.webmanifest', import.meta.url), 'utf8')
const socialCard = readFileSync(new URL('../public/social-card.svg', import.meta.url), 'utf8')

const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]))
const brokenAnchors = [...html.matchAll(/\bhref="#([^"]+)"/g)]
  .map(match => match[1])
  .filter(id => !ids.has(id))
if (brokenAnchors.length) throw new Error(`Broken local anchors: ${[...new Set(brokenAnchors)].join(', ')}`)

for (const [label, url] of Object.entries({
  repository: 'https://github.com/deepseek-ai/deepseek-harness',
  documentation: 'https://deepseek-harness.github.io/deepseek-harness/en/guide/quickstart',
  plugins: 'https://github.com/topics/dsh-plugin',
  paper: 'https://github.com/cordiverse/paper',
})) {
  if (![html, cordis, ecosystem].some(source => source.includes(url))) throw new Error(`Missing ${label} reference: ${url}`)
}

for (const required of [
  '一切皆插件', 'Everything is a plugin',
  'Agent = Model + Harness',
  'Cordis 内核', '每次运行都可追溯',
  'Standard mode', 'Code mode', 'Minimal mode', 'Creator mode',
  'npx @deepseek-ai/dsh web',
  'git clone https://github.com/deepseek-ai/deepseek-harness',
]) {
  if (!html.includes(required)) throw new Error(`Missing official landing content: ${required}`)
}

const localizedNodes = [...html.matchAll(/<[^>]+\bdata-zh="([^"]*)"[^>]+\bdata-en="([^"]*)"[^>]*>/g)]
if (localizedNodes.length < 30) throw new Error(`Landing locale coverage is unexpectedly small: ${localizedNodes.length}`)
const cordisLocalizedNodes = [...cordis.matchAll(/<[^>]+\bdata-zh="([^"]*)"[^>]+\bdata-en="([^"]*)"[^>]*>/g)]
if (cordisLocalizedNodes.length < 20) throw new Error(`Cordis locale coverage is unexpectedly small: ${cordisLocalizedNodes.length}`)
const ecosystemLocalizedNodes = [...ecosystem.matchAll(/<[^>]+\bdata-zh="([^"]*)"[^>]+\bdata-en="([^"]*)"[^>]*>/g)]
if (ecosystemLocalizedNodes.length < 25) throw new Error(`Ecosystem locale coverage is unexpectedly small: ${ecosystemLocalizedNodes.length}`)
for (const [, zh, en] of [...localizedNodes, ...cordisLocalizedNodes, ...ecosystemLocalizedNodes]) {
  if (!zh.trim() || !en.trim()) throw new Error('Landing locale pair contains an empty value')
}

for (const forbidden of ['TypeRT', 'DSH 101', '最后核对上游提交']) {
  if ([html, cordis, manifest, socialCard].some(source => source.includes(forbidden))) throw new Error(`Stale or incorrect public copy remains: ${forbidden}`)
}

for (const concept of ['时间可组合性', '空间可组合性', '可逆副作用', '响应式协效应', 'revertible effects', 'Reactive coeffects']) {
  if (!cordis.toLowerCase().includes(concept.toLowerCase())) throw new Error(`Cordis concept page is missing: ${concept}`)
}
if (!html.includes('href="/cordis/"')) throw new Error('Landing page does not route to the Cordis concept page')
if (!html.includes('href="/ecosystem/"')) throw new Error('Landing page does not route to the ecosystem page')

for (const concept of ['官方项目', '社区索引', '第三方项目', '不是 DeepSeek 官方商店或安全认证', '安装审查', '卸载与回滚']) {
  if (!ecosystem.includes(concept)) throw new Error(`Ecosystem guide is missing: ${concept}`)
}
for (const repository of ['deepseek-ai/deepseek-harness', 'awesome-dsh-plugin/awesome-dsh-plugin', 'anywhere-labs/deepseek-harness-desktop', 'tt-a1i/archify', 'nexu-io/open-design']) {
  if (!ecosystem.includes(`https://github.com/${repository}`)) throw new Error(`Ecosystem guide is missing repository source: ${repository}`)
}

for (const asset of ['public/favicon.svg', 'public/wordmark.svg', 'public/social-card.svg', 'public/site.webmanifest', 'public/_headers', 'public/_redirects', 'docs/cloudflare-deploy.md', '.github/workflows/ci.yml', '.github/workflows/deploy-cloudflare-pages.yml', 'landing.js', 'landing.css', 'subpage.js', 'subpage.css', 'ecosystem.css', 'cordis/index.html', 'ecosystem/index.html', 'vite.config.js']) {
  if (!existsSync(new URL(`../${asset}`, import.meta.url))) throw new Error(`Required project asset is missing: ${asset}`)
}
for (const metadata of ['rel="manifest"', 'rel="canonical"', 'property="og:title"', 'property="og:url"', 'name="twitter:card"', 'hreflang="zh-CN"', 'hreflang="en-US"']) {
  if (!html.includes(metadata)) throw new Error(`Required page metadata is missing: ${metadata}`)
}
if (!script.includes('navigator.clipboard.writeText')) throw new Error('Quick-start copy interaction is missing')
if (!styles.includes('@media(max-width:600px)')) throw new Error('Mobile landing breakpoint is missing')

console.log(`content check passed (${ids.size} ids, ${localizedNodes.length} landing + ${cordisLocalizedNodes.length} Cordis + ${ecosystemLocalizedNodes.length} ecosystem bilingual nodes)`)
