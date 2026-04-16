import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig(({ command }) => {
  return {
    // 如果是執行 npm run build (生產環境)，就用 /ttu-photo-web/
    // 如果是執行 npm run dev (開發環境)，就用根目錄 /
    base: command === 'build' ? '/ttu-photo-web/' : '/',
    
    plugins: [
      vue(),
      tailwindcss(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})