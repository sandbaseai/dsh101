import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(import.meta.dirname, 'index.html'),
        cordis: resolve(import.meta.dirname, 'cordis/index.html'),
        ecosystem: resolve(import.meta.dirname, 'ecosystem/index.html'),
        quickstart: resolve(import.meta.dirname, 'quickstart/index.html'),
        plugin: resolve(import.meta.dirname, 'plugin/index.html'),
        tool: resolve(import.meta.dirname, 'tool/index.html'),
        config: resolve(import.meta.dirname, 'config/index.html'),
        publish: resolve(import.meta.dirname, 'publish/index.html'),
        lifecycle: resolve(import.meta.dirname, 'lifecycle/index.html'),
      },
    },
  },
})
