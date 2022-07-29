import path from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VitePluginReload from 'vite-plugin-reload'
import { findNodeModule } from '../src/index'

const t = findNodeModule(fileURLToPath(new URL('../fixture/module.ts', import.meta.url)))

t?.exports.default()

// eslint-disable-next-line no-console
console.log(t?.exports.child())

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePluginReload({
      includes: ['../src/**/*.{ts,tsx}'],
    }),
  ],
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
})
