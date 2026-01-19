import path from 'path'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
  const envFile = mode === 'development' ? '.env.development' : '.env.production'
  dotenv.config({ path: envFile })

  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      proxy: {
        '/api': {
          target: process.env.VITE_APP_API_URL,
          changeOrigin: true,
          secure: false,
        },
      },
    },
  }
})
