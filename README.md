# DSH 101

一份面向中文开发者的 DeepSeek Harness 入门与实践指南。

支持简体中文与 English，可在页面顶栏切换并自动保存语言偏好。教程内容的上游来源和同步流程记录在 [`CONTENT_SOURCES.md`](./CONTENT_SOURCES.md)。

如果本地相邻目录中有 `deepseek-harness` checkout，可以检查内容来源是否落后于上游：

```bash
npm run sources:status
```

## 本地开发

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

构建产物位于 `dist/`，可以部署到任意静态托管平台。

## Cloudflare Pages

完成一次性配置后，推送到 `main` 会通过 GitHub Actions 把 `dist/` 部署到 Cloudflare Pages 项目 `dsh101`。也可以在 Actions 页面手动触发 **Deploy Cloudflare Pages**；未配置凭据时仍会完成检查和构建，但会跳过部署。

首次创建项目、配置 `CLOUDFLARE_API_TOKEN` 和验证线上地址的方法见 [`docs/cloudflare-deploy.md`](./docs/cloudflare-deploy.md)。部署结构参考了 `sandbase-blog`。

提交内容更新前请同时运行：

```bash
npm run check
```
