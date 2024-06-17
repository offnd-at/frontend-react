import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

export default defineConfig(({ mode }) => {
  const envFile =
    mode === 'development' ? '.env.development' : '.env.production'
  dotenv.config({ path: envFile })

  return {
    plugins: [react()],
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
