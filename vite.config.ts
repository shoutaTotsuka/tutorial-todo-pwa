import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: './',
  root: './src',
  build: {
    outDir: '../docs',
    emptyOutDir: true
  },
  resolve: {
    alias: [
      { find: '@/', replacement: `${path.resolve(__dirname, 'src')}/` }
    ]
  },
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: 'todo PWA',
        short_name: 'todo PWA',
        description: 'todo Progressive web apps',
        start_url: '.',
        display: 'standalone',
        orientation: 'portrait',
        theme_color: '#3f51b2',
        background_color: '#efeff4',
        icons: [
          {
            src: 'icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'icon-512x512-mask.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable'
          }
        ],
      }
    })
  ]
})
