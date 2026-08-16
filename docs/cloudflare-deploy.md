# Cloudflare Pages 部署

本项目沿用 `sandbase-blog` 的 GitHub Actions 部署结构：`main` 分支通过检查和构建后，将 `dist/` 发布到 Cloudflare Pages 的 `dsh101` 项目。

## 一次性配置

### 1. Pages 项目

首次携带有效 Token 运行时，部署 workflow 会查询目标账号；如果 Cloudflare 返回项目不存在，它会自动创建名为 `dsh101`、生产分支为 `main` 的 Direct Upload 项目。后续部署复用同一项目。

也可以提前在 Cloudflare Dashboard 的 **Workers & Pages** 中创建，或在已完成 Wrangler 登录的终端运行：

```bash
npx wrangler pages project create dsh101 --production-branch=main
```

自动创建、手动创建和部署使用的项目名都必须与 [部署 workflow](../.github/workflows/deploy-cloudflare-pages.yml) 中的 `--project-name=dsh101` 保持一致。

### 2. 创建 API Token

在 Cloudflare 创建一个受限 API Token，只授予目标账号的 **Cloudflare Pages: Edit** 权限。不要把 Token 写入源码或 workflow。

当前 workflow 使用的 Cloudflare Account ID 是 `244d49f84a987ecfa2cf9480ed9d8628`。Account ID 是账号标识，不是凭据，因此可以保存在 workflow 中。

### 3. 添加 GitHub Secret

进入 `sandbaseai/dsh101` 仓库：

`Settings` → `Secrets and variables` → `Actions` → `New repository secret`

添加：

| Name | Value |
| --- | --- |
| `CLOUDFLARE_API_TOKEN` | 上一步创建的受限 Cloudflare API Token |

如果组织已经向该仓库开放了同名 organization secret，则不需要重复创建 repository secret。

## 部署与验证

- 推送到 `main`：自动检查内容、构建并部署生产版本。
- 手动部署：在 GitHub 的 **Actions** 页面运行 **Deploy Cloudflare Pages**。
- Secret 缺失：检查和构建照常执行，部署步骤会跳过并显示 warning。
- 部署成功：访问 Cloudflare 返回的地址，通常为 `https://dsh101.pages.dev`；首次部署后也可绑定自定义域名。

部署日志必须出现 Wrangler 的成功输出，才能视为已经上线。单纯看到 workflow 绿色并不够，因为缺少 Secret 时 workflow 会有意跳过部署。

## 本地预检

提交前运行与 CI 相同的核心检查：

```bash
npm ci
npm run check
npm run build
```

构建产物位于 `dist/`。如需从本机直接测试部署，可在完成 Wrangler 登录后运行：

```bash
npx wrangler pages deploy dist --project-name=dsh101 --branch=main
```
