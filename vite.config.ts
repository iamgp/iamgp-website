import path from 'node:path'
import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    tanstackStart({
      prerender: {
        enabled: true,
        crawlLinks: true,
        autoSubfolderIndex: true,
      },
    }),
    viteReact(),
  ],
})
