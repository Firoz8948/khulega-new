import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@global': resolve(__dirname, 'src/components/global'),
      '@shared': resolve(__dirname, 'src/components/shared'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@css': resolve(__dirname, 'src/assets/css'),
      '@composables': resolve(__dirname, 'src/composables'),
    }
  },
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        shop: resolve(__dirname, 'shop.html'),
        'user-journey': resolve(__dirname, 'user-journey.html'),
        'apply-job': resolve(__dirname, 'apply-job.html'),
        policy: resolve(__dirname, 'policy.html'),
        services: resolve(__dirname, 'services.html'),
        contact: resolve(__dirname, 'contact.html'),
        terms: resolve(__dirname, 'terms.html'),
      }
    }
  }
})
