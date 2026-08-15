const en = {
  '社区指南': 'Community Guide',
  '入门': 'Guide',
  '概念': 'Concepts',
  '实践': 'Practice',
  '搜索文档': 'Search docs',
  '菜单': 'Menu',
  '使用 Web UI': 'Use the Web UI',
  '安装与启动': 'Install and run',
  '配置模型': 'Configure models',
  '核心概念': 'Core concepts',
  '工作区': 'Workspace',
  '会话与任务': 'Sessions and tasks',
  '权限与审批': 'Permissions and approvals',
  'Python 快速上手': 'Python quickstart',
  '会话与运行时': 'Sessions and runtime',
  '进阶': 'Advanced',
  '第一个插件': 'Your first plugin',
  '开发 Tool': 'Build a tool',
  '配置 Schema': 'Configuration schema',
  '事件系统': 'Event system',
  '插件生命周期': 'Plugin lifecycle',
  '能力三层拆分': 'Capability roles',
  'LLM 适配器': 'LLM adapters',
  'Profile 与组合包': 'Profiles and bundles',
  '入门 · 5 分钟': 'GUIDE · 5 MIN',
  '用 DeepSeek Harness 启动你的第一个智能编程任务。本指南将带你完成模型配置、工作区选择和首次运行。': 'Start your first agentic coding task with DeepSeek Harness. This guide walks through model setup, workspace selection, and your first run.',
  '开始之前': 'Before you start',
  '你需要 Node.js 20+、一个 DeepSeek API Key，以及一个准备让 Agent 读取的本地项目。': 'You need Node.js 20+, a DeepSeek API key, and a local project that the agent may read.',
  '在终端中运行以下命令。DSH 会在当前目录启动服务，并打印 Web UI 的访问地址。': 'Run the command below. DSH starts in the current directory and prints the Web UI address.',
  '复制': 'Copy',
  '已复制': 'Copied',
  '打开右上角的 ': 'Open ',
  '，选择 DeepSeek，输入 API Key 并保存。模型变更会在下一次请求时生效，无需重启服务。': ', choose DeepSeek, enter an API key, and save. Model changes apply to the next request without restarting the server.',
  '设置 → 模型': 'Settings → Models',
  '1': '1',
  '2': '2',
  '3': '3',
  '进入模型设置': 'Open model settings',
  '点击设置图标，在侧栏选择「模型」。': 'Select the settings icon, then choose Models in the sidebar.',
  '添加凭证': 'Add credentials',
  '选择服务提供方，并粘贴你的 API Key。': 'Choose a provider and paste your API key.',
  '验证连接': 'Verify the connection',
  '保存后状态显示为绿色，即可创建会话。': 'Once the saved state turns green, you can create a session.',
  '凭据不会返回浏览器': 'Credentials never return to the browser',
  'API Key 是只写字段。保存后前端只会收到脱敏描述符；明文保存在 ': 'The API key is write-only. After saving, the frontend receives only a redacted descriptor; the plaintext value is stored in ',
  '，settings 中只保存凭据引用。': ', while settings retain only a credential reference.',
  '自定义提供方': 'Custom providers',
  '公司网关或自建 OpenAI 兼容端点可通过「添加自定义提供方」配置。Provider ID 会被请求、会话、默认模型和凭据引用使用，因此保存后应视为永久标识；展示名称、URL、协议和模型仍可修改。': 'Use Add custom provider for a company gateway or self-hosted OpenAI-compatible endpoint. Provider IDs are referenced by requests, sessions, model defaults, and credentials, so treat them as permanent after saving. Display name, URL, protocol, and models remain editable.',
  '在模型页保存密钥，或提供配置引用的环境变量。': 'Save the key on the Models page, or provide the referenced environment variable.',
  '重新选择已配置模型，或在自定义提供方中添加模型。': 'Select a configured model, or add the model to the custom provider.',
  '检查凭据；不提供模型发现端点时应手动录入模型。': 'Check the credentials; enter models manually when the endpoint has no model discovery API.',
  '选择工作区': 'Select a workspace',
  '点击「选择工作区」，添加你启动 ': 'Choose Select workspace and add the project directory where you launched ',
  ' 时所在的项目目录。工作区决定 Agent 能够读取和修改的文件范围。': '. The workspace determines which files the agent can read and modify.',
  '注意': 'Caution',
  '选择工作区前，会话输入框保持禁用。请勿将包含敏感凭证的目录设为工作区。': 'The session input stays disabled until a workspace is selected. Never select a directory that contains sensitive credentials.',
  '运行第一个任务': 'Run your first task',
  '新建一个会话，然后尝试发送一个目标明确、可以验证的任务：': 'Create a session, then send a focused task with a verifiable outcome:',
  '总结这个仓库，列出它的主要模块，并解释各模块之间的关系。': 'Summarize this repository, list its main modules, and explain how they relate.',
  'Agent 可以读取文件、执行命令并维护计划。当某项操作超出当前权限策略时，Web UI 会先请求你的批准。': 'The agent can read files, run commands, and maintain a plan. When an action exceeds the active permission policy, the Web UI asks for approval first.',
  'Harness 默认采用最小权限策略。文件写入、网络访问和高风险命令会根据你的配置触发审批，所有工具调用都会保留清晰记录。': 'Harness follows a least-privilege policy. File writes, network access, and high-risk commands may require approval, and tool calls remain auditable.',
  '程序化使用': 'PROGRAMMATIC USE',
  '从 Web UI 走向 SDK': 'From the Web UI to the SDK',
  'Python SDK 快速上手': 'Python SDK quickstart',
  'Python SDK 适合批处理、自动化流水线和把 Harness 嵌入现有服务。它要求 Python 3.10+；已发布的 SDK 自带同版本运行时，普通使用不要求系统安装 Node.js。': 'The Python SDK is designed for batch jobs, automation, and embedding Harness into existing services. It requires Python 3.10+. Published SDK packages include a matching runtime, so regular use does not require Node.js.',
  '最小调用由 ': 'The minimal API uses ',
  ' 管理内置运行时的生命周期。同一个实例可以复用运行时；只有要延续对话与持久 Shell 状态时才复用 session id。': ' to manage the bundled runtime lifecycle. Reuse one instance for the runtime, and reuse a session ID only when continuing a conversation and persistent shell state.',
  'Workspace 与 Session': 'Workspace and sessions',
  '选择 Agent 工作的项目目录。应当指向隔离、可恢复的 checkout。': 'Selects the agent workspace. Point it at an isolated, recoverable checkout.',
  '保存 JSONL 会话日志、工具调用和组装后的模型请求。': 'Stores JSONL session logs, tool calls, and assembled model requests.',
  '决定是否延续同一段对话以及持久 Bash 进程状态。': 'Determines whether a conversation and persistent Bash process state continue.',
  '安全边界': 'Security boundary',
  '官方最小 Python 示例使用 ': 'The official minimal Python example uses ',
  '，Bash 和编辑器可修改运行时进程能访问的路径。只在可丢弃的 checkout 或容器中运行。': '; Bash and the editor can modify any path visible to the runtime process. Use only a disposable checkout or container.',
  '可扩展架构': 'EXTENSIBLE ARCHITECTURE',
  '一切皆插件': 'Everything is a plugin',
  '创建第一个插件': 'Create your first plugin',
  'Harness 由 Cordis 驱动。最小插件是导出 ': 'Harness is powered by Cordis. A minimal plugin is a TypeScript module exporting an ',
  ' 函数的 TypeScript 模块；框架在依赖就绪后传入上下文对象。': ' function; the framework supplies a context after dependencies become ready.',
  '本地开发时，通过 patch 层加载绝对路径，并以 Web profile 启动：': 'During local development, load the absolute path through a patch layer and start the Web profile:',
  '开发一个 Tool': 'Build a tool',
  '工具插件通过 ': 'A tool plugin declares its dependency with ',
  ' 声明依赖，再用 ': ', then uses ',
  ' 同时定义参数校验、规范输出和模型可见的渲染结果。': ' to define argument validation, canonical output, and the model-visible rendering.',
  '声明输入': 'Declare input',
  'Parameters 会推导并校验 execute 的参数。': 'Parameters infer and validate the execute arguments.',
  '返回规范值': 'Return canonical data',
  '返回顶部': 'Back to top',
  'execute 返回由 output schema 约束的数据。': 'Execute returns data constrained by the output schema.',
  '渲染模型内容': 'Render model content',
  'render 将规范值转换为模型真正看到的结果。': 'Render turns canonical data into the result the model actually sees.',
  '插件通过同名的 TypeScript ': 'A plugin accepts configuration through a TypeScript ',
  ' 类型和 Schemastery schema 接受配置。默认值属于 schema；无效配置应在插件加载时立即失败，而不是运行到一半才降级。': ' type and a Schemastery schema with the same name. Defaults belong in the schema; invalid configuration should fail at plugin load instead of degrading at runtime.',
  '判断标准': 'Rule of thumb',
  '不同部署是否可能需要改变这个值？如果是，它就应该是配置字段，而不是硬编码常量。': 'Could different deployments need a different value? If so, make it a configuration field instead of a hardcoded constant.',
  '修改 ': 'Changing ',
  ' 会触发插件热替换：旧实例先卸载并清理 effects，新实例再使用已校验的配置加载。': ' triggers hot replacement: the old instance unloads and cleans up its effects before a new instance loads with validated configuration.',
  '事件是插件间松耦合通信的核心机制。Cordis 提供四种模式，它们的执行与返回规则不同：': 'Events are the core mechanism for loosely coupled communication between plugins. Cordis provides four modes with distinct execution and return rules:',
  '同步广播': 'Synchronous broadcast',
  '执行所有监听器，忽略返回值。': 'Runs every listener and ignores return values.',
  '同步短路': 'Synchronous short circuit',
  '首个有效返回值会停止后续监听器。': 'The first meaningful return value stops later listeners.',
  '异步顺序': 'Asynchronous sequence',
  '按注册顺序等待，同样支持短路。': 'Awaits listeners in registration order and supports short circuiting.',
  '包装流水线': 'Wrapping pipeline',
  '监听器包装下游返回值，形成处理链。': 'Listeners wrap downstream return values to form a processing chain.',
  'Waterfall 的关键规则': 'The critical waterfall rule',
  '监听器必须调用 ': 'A listener must call ',
  ' 才会继续下游；不调用会有意短路整条流水线，适合拦截器和网关。': ' to continue downstream. Omitting it intentionally stops the pipeline, which is useful for interceptors and gateways.',
  'Cordis 事件通常采用 ': 'Cordis events generally use ',
  ' 命名。持久化的 ': ' names. Persisted ',
  ' 和 ': ' and ',
  ' 是会话事件类型；观察它们时应监听 ': ' are session event types. Observe them by listening to ',
  ' 并检查 event type。': ' and checking the event type.',
  '每个插件运行在独立 Fiber 中。依赖未就绪时等待，加载成功后进入 ACTIVE；必需服务消失时自动卸载，服务恢复后重新加载。': 'Every plugin runs in its own Fiber. It waits for dependencies, enters ACTIVE after loading, unloads when a required service disappears, and reloads when that service returns.',
  '、工具注册和 ': ', tool registrations, and ',
  ' 都由 Fiber 追踪，卸载时自动撤销。若多个清理步骤存在先后依赖，应放入同一个 effect 的 disposer 中串行执行。': ' are tracked by the Fiber and revoked on unload. Cleanup steps with ordering constraints belong in one effect disposer and should run sequentially there.',
  '能力的三种角色': 'Three capability roles',
  '当能力需要可替换提供方时，Harness 将它拆成三个角色。只有完整组合才构成一个 capability seam；单独一个角色并不完整。': 'When a capability needs replaceable providers, Harness separates it into three roles. Only the full composition forms a capability seam; no single role is complete on its own.',
  '定义 Cordis 服务以及 Request / Result 类型。': 'Defines the Cordis service and its Request / Result types.',
  '实现本地、远程或沙箱中的具体行为。': 'Implements concrete behavior locally, remotely, or in a sandbox.',
  '把能力呈现为 Tool、API 或其他用户界面。': 'Presents the capability as a tool, API, or another user interface.',
  'Provider 与 Consumer 都依赖 Definition，但彼此不依赖。只有角色需要独立演进或替换时才拆包；简单工具无需预防性拆分。': 'Provider and Consumer both depend on the Definition but not on each other. Split packages only when roles need independent evolution or replacement; simple tools need no speculative split.',
  '新的模型提供方通过继承 ': 'A new model provider integrates by extending ',
  ' 并实现异步 ': ' and implementing asynchronous ',
  ' 接入。适配器把统一请求转换成提供方 API，再把流式响应转换成 Harness 的 ': '. The adapter converts a unified request into the provider API and converts streaming responses back into Harness ',
  '。': '.',
  '每个 ': 'Every ',
  ' 必须有对应的 ': ' must have a matching ',
  '。': '.',
  ' 从 0 递增，用于标记内容块顺序。': ' increases from 0 to identify content block order.',
  ' 必须在 ': ' must appear before ',
  ' 之前；': '; ',
  ' 必须是最后一个分片。': ' must be the final chunk.',
  '不支持的字段应抛出带稳定 code 的 ': 'Unsupported fields should raise an ',
  '，不得静默丢弃。': ' with a stable code instead of being silently dropped.',
  '组合包（bundle）': 'A bundle ',
  '贡献一层配置，': 'contributes one configuration layer, while a ',
  'profile': 'profile',
  '则描述哪些组合包按什么顺序构成一个可启动应用。二者职责不同，不应混为一种 manifest。': ' describes which bundles form a runnable application and in what order. They have distinct responsibilities and manifest types.',
  '临时覆盖层': ' temporary overlay',
  'Profile 自有 patch': 'Profile-owned patch',
  'Bundle patch 列表': 'Bundle patch list',
  '后应用的层按行胜出。一个 patch 会替换目标行的整个 ': 'Later layers win by row. A patch replaces the entire ',
  '，而不是递归合并其中的字段。': ' value on the target row instead of recursively merging its fields.',
  '内容来源': 'Content provenance',
  '本页依据 DeepSeek Harness 仓库中的中文指南、CLI 参考与插件开发文档整理，最后核对上游提交 ': 'This page is based on the DeepSeek Harness guides, CLI reference, and plugin development documentation, last checked against upstream commit ',
  '（2026-08-13）。项目仍处于开发者预览阶段，接口可能发生不兼容变化。': ' (2026-08-13). The project is in developer preview and may introduce incompatible changes.',
  '查看官方源码 →': 'View official source →',
  '继续探索': 'Continue exploring',
  '在官方仓库中查看完整 API 与配置目录': 'Browse the complete API and configuration catalog',
  '以 Apache-2.0 协议开放 · 由社区维护': 'Open under Apache-2.0 · Community maintained',
  '在 GitHub 上编辑此页': 'Edit this page on GitHub',
  '本页目录': 'On this page',
  '输入关键词以搜索本页内容': 'Type to search this page',
  '没有找到相关内容': 'No matching content',
  '选择': 'select',
  '导航': 'navigate',
  '关闭': 'close'
}

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
    if (!value || !en[value]) continue
    node.nodeValue = original.replace(value, en[value])
  }
}

export function installLocale() {
  const button = document.querySelector('#languageButton')
  const label = document.querySelector('#languageLabel')
  const input = document.querySelector('#searchInput')

  function apply(locale) {
    translateText(document.body, locale)
    document.documentElement.lang = locale === 'en' ? 'en' : 'zh-CN'
    document.title = locale === 'en' ? 'DSH 101 — DeepSeek Harness Guide' : 'DSH 101 — DeepSeek Harness 入门指南'
    label.textContent = locale === 'en' ? 'English' : '中文'
    input.placeholder = locale === 'en' ? 'Search docs' : '搜索文档'
    document.querySelector('#backToTop').setAttribute('aria-label', locale === 'en' ? 'Back to top' : '返回顶部')
    localStorage.setItem('dsh-locale', locale)
  }

  let locale = localStorage.getItem('dsh-locale') === 'en' ? 'en' : 'zh'
  apply(locale)
  button.addEventListener('click', () => {
    locale = locale === 'zh' ? 'en' : 'zh'
    apply(locale)
  })
}
