import { existsSync, readFileSync } from 'node:fs'

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8')
const cordis = readFileSync(new URL('../cordis/index.html', import.meta.url), 'utf8')
const ecosystem = readFileSync(new URL('../ecosystem/index.html', import.meta.url), 'utf8')
const quickstart = readFileSync(new URL('../quickstart/index.html', import.meta.url), 'utf8')
const plugin = readFileSync(new URL('../plugin/index.html', import.meta.url), 'utf8')
const tool = readFileSync(new URL('../tool/index.html', import.meta.url), 'utf8')
const config = readFileSync(new URL('../config/index.html', import.meta.url), 'utf8')
const publish = readFileSync(new URL('../publish/index.html', import.meta.url), 'utf8')
const lifecycle = readFileSync(new URL('../lifecycle/index.html', import.meta.url), 'utf8')
const services = readFileSync(new URL('../services/index.html', import.meta.url), 'utf8')
const script = readFileSync(new URL('../landing.js', import.meta.url), 'utf8')
const styles = readFileSync(new URL('../landing.css', import.meta.url), 'utf8')
const manifest = readFileSync(new URL('../public/site.webmanifest', import.meta.url), 'utf8')
const socialCard = readFileSync(new URL('../public/social-card.svg', import.meta.url), 'utf8')
const brandStyles = readFileSync(new URL('../brand.css', import.meta.url), 'utf8')

for (const [label, source] of Object.entries({ landing: html, cordis, ecosystem, quickstart, plugin, tool, config, publish, lifecycle, services })) {
  const pageIds = new Set([...source.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]))
  const missing = [...source.matchAll(/\bhref="#([^"]+)"/g)].map(match => match[1]).filter(id => !pageIds.has(id))
  if (missing.length) throw new Error(`${label} has broken local anchors: ${[...new Set(missing)].join(', ')}`)
}

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
  if (![html, cordis, ecosystem, quickstart, plugin, tool, config, publish, lifecycle, services].some(source => source.includes(url))) throw new Error(`Missing ${label} reference: ${url}`)
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
const quickstartLocalizedNodes = [...quickstart.matchAll(/<[^>]+\bdata-zh="([^"]*)"[^>]+\bdata-en="([^"]*)"[^>]*>/g)]
if (quickstartLocalizedNodes.length < 30) throw new Error(`Quickstart locale coverage is unexpectedly small: ${quickstartLocalizedNodes.length}`)
const pluginLocalizedNodes = [...plugin.matchAll(/<[^>]+\bdata-zh="([^"]*)"[^>]+\bdata-en="([^"]*)"[^>]*>/g)]
if (pluginLocalizedNodes.length < 30) throw new Error(`Plugin guide locale coverage is unexpectedly small: ${pluginLocalizedNodes.length}`)
const toolLocalizedNodes = [...tool.matchAll(/<[^>]+\bdata-zh="([^"]*)"[^>]+\bdata-en="([^"]*)"[^>]*>/g)]
if (toolLocalizedNodes.length < 35) throw new Error(`Tool guide locale coverage is unexpectedly small: ${toolLocalizedNodes.length}`)
const configLocalizedNodes = [...config.matchAll(/<[^>]+\bdata-zh="([^"]*)"[^>]+\bdata-en="([^"]*)"[^>]*>/g)]
if (configLocalizedNodes.length < 40) throw new Error(`Config guide locale coverage is unexpectedly small: ${configLocalizedNodes.length}`)
const publishLocalizedNodes = [...publish.matchAll(/<[^>]+\bdata-zh="([^"]*)"[^>]+\bdata-en="([^"]*)"[^>]*>/g)]
if (publishLocalizedNodes.length < 50) throw new Error(`Publish guide locale coverage is unexpectedly small: ${publishLocalizedNodes.length}`)
const lifecycleLocalizedNodes = [...lifecycle.matchAll(/<[^>]+\bdata-zh="([^"]*)"[^>]+\bdata-en="([^"]*)"[^>]*>/g)]
if (lifecycleLocalizedNodes.length < 45) throw new Error(`Lifecycle guide locale coverage is unexpectedly small: ${lifecycleLocalizedNodes.length}`)
const servicesLocalizedNodes = [...services.matchAll(/<[^>]+\bdata-zh="([^"]*)"[^>]+\bdata-en="([^"]*)"[^>]*>/g)]
if (servicesLocalizedNodes.length < 50) throw new Error(`Services guide locale coverage is unexpectedly small: ${servicesLocalizedNodes.length}`)
for (const [, zh, en] of [...localizedNodes, ...cordisLocalizedNodes, ...ecosystemLocalizedNodes, ...quickstartLocalizedNodes, ...pluginLocalizedNodes, ...toolLocalizedNodes, ...configLocalizedNodes, ...publishLocalizedNodes, ...lifecycleLocalizedNodes, ...servicesLocalizedNodes]) {
  if (!zh.trim() || !en.trim()) throw new Error('Landing locale pair contains an empty value')
}

for (const forbidden of ['TypeRT', 'DSH 101', '最后核对上游提交']) {
  if ([html, cordis, manifest, socialCard].some(source => source.includes(forbidden))) throw new Error(`Stale or incorrect public copy remains: ${forbidden}`)
}

for (const forbidden of ['—', '–']) {
  if ([html, cordis, ecosystem, quickstart, plugin, tool, config, publish, lifecycle, services].some(source => source.includes(forbidden))) throw new Error(`Taste preflight failed, forbidden dash remains: ${forbidden}`)
}
if (!brandStyles.includes('--brand-green:#22bd7e')) throw new Error('Sandbase brand green token is missing')
if (!html.includes('class="hero-product"') || !html.includes('feat-plugin.en.png')) throw new Error('Taste preflight failed, hero lacks a real product visual')
if (html.includes('class="hero-glow"')) throw new Error('Taste preflight failed, decorative hero glow remains')
if (/<article><span>0\d<\/span>/.test(html)) throw new Error('Taste preflight failed, numbered feature labels remain')
const eyebrowCount = [...html.matchAll(/class="(?:kicker|section-label)"/g)].length
if (eyebrowCount > 2) throw new Error(`Taste preflight failed, too many eyebrow labels: ${eyebrowCount}`)
if (!socialCard.toLowerCase().includes('#22bd7e')) throw new Error('Social card does not use Sandbase green')

for (const concept of ['时间可组合性', '空间可组合性', '可逆副作用', '响应式协效应', 'revertible effects', 'Reactive coeffects']) {
  if (!cordis.toLowerCase().includes(concept.toLowerCase())) throw new Error(`Cordis concept page is missing: ${concept}`)
}
if (!html.includes('href="/cordis/"')) throw new Error('Landing page does not route to the Cordis concept page')
if (!html.includes('href="/ecosystem/"')) throw new Error('Landing page does not route to the ecosystem page')
if (!html.includes('href="/quickstart/"')) throw new Error('Landing page does not route to the quickstart page')
if (!html.includes('href="/plugin/"')) throw new Error('Landing page does not route to the first-plugin guide')
if (!html.includes('href="/tool/"')) throw new Error('Landing page does not route to the tool guide')
if (!html.includes('href="/config/"')) throw new Error('Landing page does not route to the config guide')
if (!html.includes('href="/publish/"')) throw new Error('Landing page does not route to the publishing guide')
if (!html.includes('href="/lifecycle/"')) throw new Error('Landing page does not route to the lifecycle guide')
if (!html.includes('href="/services/"')) throw new Error('Landing page does not route to the services guide')
for (const navigation of ['id="primaryNav"', 'class="nav-group"', 'class="menu-toggle"', 'href="#approach"', 'href="#modes"']) {
  if (!html.includes(navigation)) throw new Error(`Landing navigation is missing: ${navigation}`)
}

for (const required of ['npx @deepseek-ai/dsh web', '127.0.0.1:3080', '$DSH_HOME/.credentials.yaml', 'Settings → Models', 'Choose workspace', 'dsh --profile headless', 'dsh --profile web --dump-config', 'dsh plugin --profile web add', '47f9438']) {
  if (!quickstart.includes(required)) throw new Error(`Quickstart is missing verified material: ${required}`)
}

for (const required of ["export function apply(ctx: Context)", "export const inject = ['tools']", 'ctx.effect(() =>', 'mkdir -p scratch-plugin/src', "name: '/absolute/path/to/deepseek-harness/scratch-plugin/src/my-plugin.ts'", 'pnpm dsh web --patch ./scratch-plugin/cordis.yml', '127.0.0.1:3080', '47f9438']) {
  if (!plugin.includes(required)) throw new Error(`First-plugin guide is missing verified material: ${required}`)
}

for (const required of ["import { defineTool } from '@deepseek-ai/dsh-tools'", "name: 'greet'", "description: 'Greet someone by name.'", "name: {", "schema: { type: 'string' }", 'render: (_args, value)', 'async execute(args)', 'Use the greet tool to greet Ada.', 'Hello, Ada!', 'pnpm dsh web --patch ./scratch-plugin/cordis.yml', '47f9438']) {
  if (!tool.includes(required)) throw new Error(`Tool guide is missing verified material: ${required}`)
}

for (const required of ["import Schema from '@deepseek-ai/schemastery'", 'export interface Config', 'export const Config: Schema&lt;Config&gt;', "greeting: Schema.string().default('Hello')", 'maxRetries: Schema.number().default(3)', 'verbose: Schema.boolean().default(false)', 'export function apply(ctx: Context, config: Config)', "apiKey: Schema.string().required()", "Schema.union(['fast', 'accurate']).default('fast')", "name: '/absolute/path/to/deepseek-harness/scratch-plugin/src/my-plugin.ts'", 'Standard Schema', '热替换', '47f9438']) {
  if (!config.includes(required)) throw new Error(`Config guide is missing verified material: ${required}`)
}
if (!config.includes("官方配置篇片段使用 ./src/my-plugin.ts") || !config.includes('The official config snippet uses ./src/my-plugin.ts')) throw new Error('Config guide does not disclose the upstream path discrepancy')

for (const required of ['"dsh": {', '"bundle": {', '"patch": "./cordis.patch.yml"', 'name: dsh-hello-plugin', 'dsh plugin --profile demo add ./hello-plugin', 'dsh --profile demo --dump-config', 'dsh --profile demo', 'dsh plugin --profile demo remove dsh-hello-plugin', '"@deepseek-ai/dsh-base"', '$DSH_HOME/cordis.patch.yml', 'config 整体替换', 'entire config', 'allowBuilds:', 'github:you/hello-plugin#&lt;sha&gt;', 'pnpm pack', '47f9438']) {
  if (!publish.includes(required)) throw new Error(`Publish guide is missing verified material: ${required}`)
}
for (const safety of ['本机代码执行权限', 'local code execution', 'Agent 沙箱之外', 'outside the agent sandbox']) {
  if (!publish.includes(safety)) throw new Error(`Publish guide is missing install safety guidance: ${safety}`)
}

for (const required of ['PENDING', 'LOADING', 'ACTIVE', 'FAILED', 'UNLOADING', 'DISPOSED', "export const inject = ['tools', 'llm']", "ctx.on('some-event', handler)", 'ctx.effect(() =>', 'ctx.tools.register(tool)', 'ctx.llm.registerAdapter', 'ctx.plugin(child)', 'await fiber.dispose()', '多个异步 disposer 会并发运行', 'multiple async disposers run concurrently', 'HMR', '47f9438']) {
  if (!lifecycle.includes(required)) throw new Error(`Lifecycle guide is missing verified material: ${required}`)
}

for (const required of ["super(ctx, 'greeter')", "declare module '@deepseek-ai/cordis'", 'ctx.plugin(GreeterService)', "export const inject = ['greeter']", "ctx.greeter.greet('world')", "ctx.get('greeter')", "inject: ['shell']", 'PENDING Fiber 不会维持 Node 事件循环', 'A PENDING Fiber does not keep the Node event loop alive', 'dsh-bash-local', 'timeoutMs: 5000', 'timeoutMs: 60000', '扁平命名空间', 'flat namespace', '47f9438']) {
  if (!services.includes(required)) throw new Error(`Services guide is missing verified material: ${required}`)
}

for (const concept of ['官方项目', '社区索引', '第三方项目', '不是 DeepSeek 官方商店或安全认证', '安装审查', '卸载与回滚']) {
  if (!ecosystem.includes(concept)) throw new Error(`Ecosystem guide is missing: ${concept}`)
}
for (const repository of ['deepseek-ai/deepseek-harness', 'awesome-dsh-plugin/awesome-dsh-plugin', 'anywhere-labs/deepseek-harness-desktop', 'tt-a1i/archify', 'nexu-io/open-design']) {
  if (!ecosystem.includes(`https://github.com/${repository}`)) throw new Error(`Ecosystem guide is missing repository source: ${repository}`)
}

for (const asset of ['public/favicon.svg', 'public/wordmark.svg', 'public/social-card.svg', 'public/site.webmanifest', 'public/_headers', 'public/_redirects', 'docs/cloudflare-deploy.md', '.github/workflows/ci.yml', '.github/workflows/deploy-cloudflare-pages.yml', 'landing.js', 'landing.css', 'navigation.css', 'brand.css', 'redesign.css', 'subpage.js', 'subpage.css', 'ecosystem.css', 'quickstart.css', 'quickstart.js', 'plugin.css', 'plugin.js', 'tool.css', 'config.css', 'publish.css', 'lifecycle.css', 'services.css', 'cordis/index.html', 'ecosystem/index.html', 'quickstart/index.html', 'plugin/index.html', 'tool/index.html', 'config/index.html', 'publish/index.html', 'lifecycle/index.html', 'services/index.html', 'vite.config.js']) {
  if (!existsSync(new URL(`../${asset}`, import.meta.url))) throw new Error(`Required project asset is missing: ${asset}`)
}
for (const metadata of ['rel="manifest"', 'rel="canonical"', 'property="og:title"', 'property="og:url"', 'name="twitter:card"', 'hreflang="zh-CN"', 'hreflang="en-US"']) {
  if (!html.includes(metadata)) throw new Error(`Required page metadata is missing: ${metadata}`)
}
if (!script.includes('navigator.clipboard.writeText')) throw new Error('Quick-start copy interaction is missing')
if (!styles.includes('@media(max-width:600px)')) throw new Error('Mobile landing breakpoint is missing')

console.log(`content check passed (${ids.size} ids, ${localizedNodes.length} landing + ${cordisLocalizedNodes.length} Cordis + ${ecosystemLocalizedNodes.length} ecosystem + ${quickstartLocalizedNodes.length} quickstart + ${pluginLocalizedNodes.length} plugin + ${toolLocalizedNodes.length} tool + ${configLocalizedNodes.length} config + ${publishLocalizedNodes.length} publish + ${lifecycleLocalizedNodes.length} lifecycle + ${servicesLocalizedNodes.length} services bilingual nodes)`)
