# Content sources

DSH 101 is an unofficial community reference implementation. Its product home
follows the official DeepSeek Harness launch page, while technical learning
links lead to the official documentation publication.

Last upstream review:

- Repository: `deepseek-ai/deepseek-harness`
- Commit: `47f943859bef60e4160492346772ded9b24f765a`
- Commit date: 2026-08-13

## Public source map

| DSH 101 surface | Canonical upstream source |
| --- | --- |
| Product narrative, visual hierarchy, feature screenshots, runtime modes, ecosystem calls to action | `https://www.deepseek.com/harness/en/` |
| Published quickstart and documentation navigation | `https://deepseek-harness.github.io/deepseek-harness/en/guide/quickstart` |
| Community plugin discovery | `https://github.com/topics/dsh-plugin` |
| Spatiotemporal composability paper and Cordis foundations | `https://github.com/cordiverse/paper` |
| Brand wordmark and favicon | `website/public/wordmark.svg`, `website/public/favicon.svg` |
| Navigation, public routes, and locale structure | `website/docs.ts`, `website/.vitepress/config.ts` |
| Product identity, preview status, install, and source launch | `README.md`, `README.zh.md` |
| Web UI quickstart | `docs/user/guide/index.md`, `docs/user/guide/index.zh.md` |
| Model configuration | `docs/user/guide/providers.md`, `docs/user/guide/providers.zh.md` |
| Python SDK quickstart | `docs/user/guide/python-sdk.md`, `docs/user/guide/python-sdk.zh.md` |
| First Harness plugin | `docs/user/develop/basic/index.md`, `docs/user/develop/basic/index.zh.md` |
| Public architecture vocabulary | `docs/architecture.md`, `docs/architecture.zh.md` |

Internal postmortems, maintainer workflows, test guides, and unpublished
implementation notes are intentionally excluded from the primary guide.
