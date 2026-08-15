# Content sources

DSH 101 is an independent community guide. Product facts and code examples are
adapted from the public DeepSeek Harness repository and rewritten for this
site's learning path.

Last upstream review:

- Repository: `deepseek-ai/deepseek-harness`
- Commit: `47f943859bef60e4160492346772ded9b24f765a`
- Commit date: 2026-08-13

## Source map

| DSH 101 section | Canonical upstream source |
| --- | --- |
| Install and run | `README.zh.md` |
| Web UI quickstart | `docs/user/guide/index.zh.md` |
| Model providers and credentials | `docs/user/guide/providers.zh.md` |
| Python SDK and security boundary | `docs/user/guide/python-sdk.zh.md` |
| CLI and profiles | `apps/cli/README.zh.md` |
| First plugin | `docs/user/develop/basic/index.zh.md` |
| Tool development | `docs/user/develop/basic/tool.zh.md` |
| Plugin configuration | `docs/user/develop/basic/config.zh.md` |
| Bundles and publishing | `docs/user/develop/basic/publish.zh.md` |
| Fiber lifecycle | `docs/user/develop/framework/index.zh.md` |
| Services and dependency injection | `docs/user/develop/framework/service.zh.md` |

## Refresh checklist

When updating content from upstream:

1. Fetch the latest `deepseek-ai/deepseek-harness` default branch.
2. Review changes to every canonical source listed above.
3. Update both Chinese content and the English locale dictionary together.
4. Replace the reviewed commit and date in this file and on the page.
5. Run `npm run check` and `npm run build`.

Do not copy API keys, local paths, unpublished implementation details, or
community contact images into this repository.
