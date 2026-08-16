import { execFileSync } from 'node:child_process'
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { resolve } from 'node:path'

const upstream = resolve(process.cwd(), process.argv[2] ?? '../deepseek-harness')
if (!existsSync(resolve(upstream, '.git'))) {
  throw new Error(`DeepSeek Harness checkout not found at ${upstream}`)
}

const revision = execFileSync('git', ['-C', upstream, 'rev-parse', 'HEAD'], { encoding: 'utf8' }).trim()
const date = execFileSync('git', ['-C', upstream, 'log', '-1', '--format=%cs'], { encoding: 'utf8' }).trim()
const sources = readFileSync(resolve(process.cwd(), 'CONTENT_SOURCES.md'), 'utf8')
const recorded = sources.match(/- Commit: `([0-9a-f]{40})`/u)?.[1]

if (!recorded) throw new Error('CONTENT_SOURCES.md has no recorded 40-character upstream commit')

const subsystemDocs = readdirSync(resolve(upstream, 'docs/subsystems'))
  .filter(name => name.endsWith('.zh.md'))
const unmappedSubsystemDocs = subsystemDocs
  .filter(name => !sources.includes(`docs/subsystems/${name}`))
if (unmappedSubsystemDocs.length > 0) {
  throw new Error(`Unmapped Chinese subsystem docs:\n${unmappedSubsystemDocs.join('\n')}`)
}

if (recorded === revision) {
  console.log(`content sources are current at ${revision.slice(0, 8)} (${date})`)
  process.exit(0)
}

const changed = execFileSync('git', [
  '-C', upstream,
  'diff', '--name-only', `${recorded}..${revision}`, '--',
  'README.zh.md', 'package.json', 'LICENSE', 'docs/user', 'apps/cli', 'packages/mcp', 'packages/skill', 'packages/plan', 'packages/web',
  'packages/client/ui-settings-models', 'packages/client/ui-model-selection',
  'packages/host/plugin-inventory', 'packages/client/ui-settings-plugin-inventory',
  'packages/llm/llm-deepseek',
  'packages/subagent', 'packages/todo', 'packages/goal', 'packages/compaction',
  'packages/interaction', 'packages/fs', 'packages/guard',
  'packages/attachment', 'packages/client/ui-attachment', 'packages/jobs', 'docs/subsystems/attachment.zh.md',
  'docs/subsystems/user-questions.zh.md', 'docs/subsystems/jobs.zh.md',
  'packages/shell', 'packages/terminal', 'packages/lsp', 'packages/session-query',
  'docs/subsystems/shell.zh.md', 'docs/subsystems/terminal.zh.md',
  'docs/subsystems/lsp.zh.md', 'docs/subsystems/session-query.zh.md',
  'packages/session', 'packages/storage', 'packages/spill',
  'docs/subsystems/persistence.zh.md', 'docs/subsystems/storage.zh.md',
  'docs/subsystems/spill.zh.md', 'docs/persistence-catalog.zh.md',
  'packages/hooks', 'packages/schedule', 'packages/workflow',
  'docs/subsystems/commands.zh.md', 'docs/subsystems/schedule.zh.md',
  'docs/subsystems/workflow.zh.md',
  'packages/settings', 'packages/credentials', 'packages/preset',
  'docs/subsystems/settings.zh.md', 'docs/subsystems/credentials.zh.md',
  'docs/subsystems/system-prompt.zh.md',
  'docs/subsystems/approval.zh.md', 'packages/interaction/user-approval',
  'docs/subsystems/session-title.zh.md', 'packages/session/session-title',
  'docs/subsystems/session-projection.zh.md', 'packages/session/session-projection',
  'docs/subsystems/client-modules.zh.md', 'packages/client/modules',
  'docs/subsystems/llm-streaming.zh.md', 'packages/llm/llm', 'packages/llm/llm-retry',
  'docs/subsystems/extensions.zh.md', 'packages/extensions',
  'docs/subsystems/scope.zh.md', 'packages/core/scope',
  'docs/subsystems/web-server.zh.md', 'packages/host/webserver',
  'packages/host/apiproxy', 'packages/host/directory-picker',
  'packages/host/directory-picker-auto', 'packages/host/directory-picker-native',
  'packages/host/directory-picker-browse', 'packages/client/connection',
  'packages/client/ui-conversation', 'packages/client/ui-workspace',
  'packages/client/runtime', 'packages/session-query/session-log-export',
  'docs/subsystems/session-reference.zh.md', 'packages/context/session-reference',
  'docs/subsystems/typert.zh.md', 'packages/typert', 'packages/api/gateway',
  'docs/subsystems/filesystem.zh.md', 'packages/fs',
  'docs/subsystems/subprocess.zh.md', 'packages/subprocess',
  'packages/e2b', 'packages/fs/tool-fs-search', 'packages/identity/anonymous-user-id',
  'docs/subsystems/core.zh.md', 'docs/subsystems/code-runtime.zh.md', 'packages/code-runtime',
  'packages/llm/token-meter', 'packages/session/session-telemetry',
  'packages/runtime-diagnostics/invariants', 'packages/feedback',
  'docs/subsystems/token-meter.zh.md', 'docs/subsystems/session-telemetry.zh.md',
  'docs/subsystems/invariants.zh.md', 'docs/subsystems/feedback.zh.md',
  'docs/subsystems/session.zh.md', 'docs/subsystems/permission-presets.zh.md',
], { encoding: 'utf8' }).trim()

console.log(`upstream moved: ${recorded.slice(0, 8)} -> ${revision.slice(0, 8)} (${date})`)
if (changed) console.log(`review these source files:\n${changed}`)
else console.log('no tracked documentation sources changed')
process.exitCode = 1
