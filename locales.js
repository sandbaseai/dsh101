export const en = {
  '技术预览': 'Preview',
  '入门': 'Guide',
  '开发': 'Development',
  '参考': 'Reference',
  '搜索文档': 'Search docs',
  '中文': 'English',
  '菜单': 'Menu',
  '使用 Web UI': 'Use the Web UI',
  '运行': 'Run',
  '配置模型': 'Configure models',
  '选择工作区': 'Select a workspace',
  '运行任务': 'Run a task',
  '第一个 Harness 插件': 'Your first Harness plugin',
  '插件与生命周期': 'Plugins and lifecycle',
  '架构': 'Architecture',
  '能力服务': 'Capability services',
  '开发者预览': 'Developer preview',
  '打开': 'Open',
  '设置 → 模型': 'Settings → Models',
  '，在 DeepSeek 卡片输入 API 密钥并保存。模型路由会立即可用，不需要重启服务器。': ', enter an API key on the DeepSeek card, and save. The model route becomes available immediately without a server restart.',
  '保存后浏览器只收到脱敏描述符。密钥存储在': 'After saving, the browser receives only a redacted descriptor. The key is stored in',
  '，settings 只保留凭据引用。': ', while settings retain only its credential reference.',
  '点击': 'Choose',
  '，添加启动': ', add the project directory where',
  '时所在的项目目录，然后选中它。选中工作区前，会话输入框不可用。': 'was started, then select it. The session composer remains unavailable until a workspace is selected.',
  '官方最小示例使用': 'The official minimal example uses',
  '，只能在可丢弃的 checkout 或容器内运行。': 'and must run only in a disposable checkout or container.',
  '插件是一个导出': 'A plugin is a TypeScript module exporting an',
  '函数的 TypeScript 模块。框架加载时传入': 'function. The framework supplies',
  '，插件通过它注册能力。': 'at load time, and the plugin registers capabilities through it.',
  '事件监听、工具和定时器等通过': 'Resources registered through',
  '注册的资源会在插件卸载时自动清理。需要手动释放的连接等资源应通过': ', including event listeners, tools, and timers, are cleaned up automatically when the plugin unloads. Connections and other manually released resources should register a disposer through',
  '注册 disposer。': '.',
  'DeepSeek Harness 是由 DeepSeek AI 开发的开源 agent harness。它采用“一切皆插件”的架构，并由 Cordis 驱动。': 'DeepSeek Harness is an open-source agent harness developed by DeepSeek AI. It follows an “everything is a plugin” architecture powered by Cordis.',
  'DeepSeek Harness 正在快速迭代，未来会出现破坏兼容性的变更。本页按上游公开文档整理，不承诺尚未发布的内部接口。': 'DeepSeek Harness is iterating rapidly and will have compatibility-breaking changes. This page follows public upstream documentation and makes no promises about unpublished internal interfaces.',
  '安装 Node.js，然后运行官方发布的 CLI：': 'Install Node.js, then run the published CLI:',
  '复制': 'Copy',
  '进程会把调用目录作为默认文件系统位置，但新的 Web UI 在添加工作区前不会选中任何工作区。': 'The process uses its invocation directory as the default filesystem location, but a new Web UI does not select a workspace until one is added.',
  '打开设置 → 模型，在 DeepSeek 卡片输入 API 密钥并保存。模型路由会立即可用，不需要重启服务器。': 'Open Settings → Models, enter an API key on the DeepSeek card, and save. The model route becomes available immediately without a server restart.',
  '凭据是只写的': 'Credentials are write-only',
  '保存后浏览器只收到脱敏描述符。密钥存储在 $DSH_HOME/.credentials.yaml，settings 只保留凭据引用。': 'After saving, the browser receives only a redacted descriptor. The key is stored in $DSH_HOME/.credentials.yaml, while settings retain only its credential reference.',
  '也可以添加 Anthropic、OpenAI 等目录提供方，或配置公司网关和自建 OpenAI 兼容端点。使用 Bedrock、Vertex、Azure 与 Codex 时，需要各自的原生认证。': 'You may also add catalog providers such as Anthropic and OpenAI, or configure a company gateway or self-hosted OpenAI-compatible endpoint. Bedrock, Vertex, Azure, and Codex require their respective native authentication.',
  '点击选择工作区，添加启动 dsh 时所在的项目目录，然后选中它。选中工作区前，会话输入框不可用。': 'Choose Select workspace, add the project directory where dsh was started, then select it. The session composer remains unavailable until a workspace is selected.',
  '启动一个会话并发送：': 'Start a session and send:',
  'Agent 可以读取和编辑工作区文件、运行命令、委派工作并维护计划。当前权限策略要求审批时，Web UI 会先询问你。': 'The agent can read and edit workspace files, run commands, delegate work, and maintain a plan. The Web UI asks first when the current permission policy requires approval.',
  'Python SDK 用于在 Web UI 之外调用相同的 Harness API。它需要 Python 3.10+；安装后的内置运行时不要求系统提供 Node.js。': 'The Python SDK calls the same Harness API outside the Web UI. It requires Python 3.10+, while its installed bundled runtime does not require system Node.js.',
  '隔离运行': 'Run in isolation',
  '官方最小示例使用 danger-full-access，只能在可丢弃的 checkout 或容器内运行。': 'The official minimal example uses danger-full-access and must run only in a disposable checkout or container.',
  '插件是一个导出 apply 函数的 TypeScript 模块。框架加载时传入 ctx，插件通过它注册能力。': 'A plugin is a TypeScript module exporting an apply function. The framework supplies ctx at load time, and the plugin registers capabilities through it.',
  '事件监听、工具和定时器等通过 ctx 注册的资源会在插件卸载时自动清理。需要手动释放的连接等资源应通过 ctx.effect() 注册 disposer。': 'Resources registered through ctx, including event listeners, tools, and timers, are cleaned up automatically when the plugin unloads. Connections and other manually released resources should register a disposer through ctx.effect().',
  'DeepSeek Harness 不是一个固定功能集合，而是由 Cordis Context 组合的一组插件。Agent loop、LLM、工具、文件访问、权限、会话持久化和 Web UI 都由可替换的插件提供。': 'DeepSeek Harness is not a fixed feature set; it is a composition of plugins in a Cordis Context. Replaceable plugins provide the agent loop, LLMs, tools, filesystem access, permissions, session persistence, and Web UI.',
  '一切皆插件': 'Everything is a plugin',
  '能力通过服务、事件和配置组合，不由单体应用硬编码。': 'Capabilities compose through services, events, and configuration rather than being hard-coded into a monolith.',
  'Session 是真源': 'The Session is the source of truth',
  '模型消息、工具结果和可恢复状态由仅追加事件日志派生。': 'Model messages, tool results, and recoverable state derive from an append-only event log.',
  '作用域隔离': 'Scoped isolation',
  '全局贡献与单 Agent scope 保持扁平、明确的可见性边界。': 'Global contributions and per-agent scopes maintain flat, explicit visibility boundaries.',
  '内容来源': 'Content provenance',
  '页面按 DeepSeek Harness 官方 README、公开 Web UI 指南、Python SDK 指南、插件教程及官方 website publication manifest 整理。': 'This page follows the official DeepSeek Harness README, public Web UI guide, Python SDK guide, plugin tutorial, and website publication manifest.',
  '查看官方源码 →': 'View official source →',
  '上游采用 MIT 协议 · 本站为非官方社区镜像': 'Upstream is MIT-licensed · This is an unofficial community mirror',
  '在 GitHub 上查看本站': 'View this site on GitHub',
  '本页目录': 'On this page',
  '输入关键词以搜索本页内容': 'Type to search this page',
  '↵ 选择': '↵ Select',
  '↑↓ 导航': '↑↓ Navigate',
  'ESC 关闭': 'ESC Close',
}

export const normalizedEn = new Map(Object.entries(en).map(([source, translation]) => [source.trim(), translation.trim()]))
const originals = new WeakMap()

function translateText(root, locale) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT)
  const nodes = []
  while (walker.nextNode()) nodes.push(walker.currentNode)
  for (const node of nodes) {
    if (node.parentElement?.closest('script, style, pre, code, svg')) continue
    if (!originals.has(node)) originals.set(node, node.nodeValue)
    const original = originals.get(node)
    if (locale === 'zh') {
      node.nodeValue = original
      continue
    }
    const value = original.trim()
    const translation = normalizedEn.get(value)
    if (value && translation) node.nodeValue = original.replace(value, translation)
  }
}

export function installLocale() {
  const button = document.querySelector('#languageButton')
  const label = document.querySelector('#languageLabel')
  const input = document.querySelector('#searchInput')
  function apply(locale) {
    translateText(document.body, locale)
    const english = locale === 'en'
    document.documentElement.lang = english ? 'en-US' : 'zh-CN'
    document.title = english ? 'DeepSeek Harness Documentation' : 'DeepSeek Harness 文档'
    const description = english ? 'Documentation for the plugin-based SDK for building agent harnesses.' : 'DeepSeek Harness 中文文档：Web UI、模型配置、SDK、插件开发与架构参考。'
    document.querySelector('meta[name="description"]').content = description
    document.querySelector('meta[property="og:title"]').content = document.title
    document.querySelector('meta[property="og:description"]').content = description
    label.textContent = english ? 'English' : '中文'
    input.placeholder = english ? 'Search docs' : '搜索文档'
    document.querySelector('#backToTop').setAttribute('aria-label', english ? 'Back to top' : '返回顶部')
    document.querySelector('#menuButton').setAttribute('aria-label', english ? 'Open menu' : '打开菜单')
    document.querySelector('#searchButton').setAttribute('aria-label', english ? 'Search docs' : '搜索文档')
    document.querySelector('#themeButton').setAttribute('aria-label', english ? 'Toggle theme' : '切换主题')
    document.querySelector('.brand').setAttribute('aria-label', english ? 'DeepSeek Harness home' : 'DeepSeek Harness 首页')
    document.querySelector('.topnav').setAttribute('aria-label', english ? 'Primary navigation' : '主导航')
    localStorage.setItem('dsh-locale', locale)
  }
  let locale = localStorage.getItem('dsh-locale') === 'en' ? 'en' : 'zh'
  apply(locale)
  button.addEventListener('click', () => {
    locale = locale === 'zh' ? 'en' : 'zh'
    apply(locale)
  })
}
