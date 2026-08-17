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
| First model-callable tool | `docs/user/develop/basic/tool.md`, `docs/user/develop/basic/tool.zh.md` |
| Typed plugin configuration | `docs/user/develop/basic/config.md`, `docs/user/develop/basic/config.zh.md` |
| Package and install a plugin | `docs/user/develop/basic/publish.md`, `docs/user/develop/basic/publish.zh.md` |
| Plugin lifecycle and effects | `docs/user/develop/framework/index.md`, `docs/user/develop/framework/index.zh.md`, `docs/cordis-tutorial/02-lifecycle-and-effects.md`, `docs/cordis-tutorial/02-lifecycle-and-effects.zh.md` |
| Services and dependencies | `docs/user/develop/framework/service.md`, `docs/user/develop/framework/service.zh.md`, `docs/cordis-tutorial/03-services.md`, `docs/cordis-tutorial/03-services.zh.md` |
| Events and plugin communication | `docs/user/develop/framework/events.md`, `docs/user/develop/framework/events.zh.md`, `docs/cordis-tutorial/04-events.md`, `docs/cordis-tutorial/04-events.zh.md` |
| Composition, HMR, and Fiber diagnosis | `docs/cordis-tutorial/06-composition-and-hmr.md`, `docs/cordis-tutorial/06-composition-and-hmr.zh.md`, `apps/cli/reference/README.md` |
| Public architecture vocabulary | `docs/architecture.md`, `docs/architecture.zh.md` |

## Visual system provenance

- DeepSeek Harness supplies the product wordmark, typography, screenshots, and dark product language.
- Sandbase supplies the single accent token: `#22bd7e`, sourced from the Sandbase Blog design tokens.
- Layout and interaction refinements follow the installed `design-taste-frontend` audit rules; they are not presented as official DeepSeek design assets.

Internal postmortems, maintainer workflows, test guides, and unpublished
implementation notes are intentionally excluded from the primary guide.
