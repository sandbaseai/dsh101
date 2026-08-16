import { execFileSync } from 'node:child_process'
import { existsSync, readFileSync } from 'node:fs'
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

if (recorded === revision) {
  console.log(`content sources are current at ${revision.slice(0, 8)} (${date})`)
  process.exit(0)
}

const changed = execFileSync('git', [
  '-C', upstream,
  'diff', '--name-only', `${recorded}..${revision}`, '--',
  'README.zh.md', 'docs/user', 'apps/cli', 'packages/mcp', 'packages/skill', 'packages/plan', 'packages/web',
  'packages/subagent', 'packages/todo', 'packages/goal', 'packages/compaction',
], { encoding: 'utf8' }).trim()

console.log(`upstream moved: ${recorded.slice(0, 8)} -> ${revision.slice(0, 8)} (${date})`)
if (changed) console.log(`review these source files:\n${changed}`)
else console.log('no tracked documentation sources changed')
process.exitCode = 1
