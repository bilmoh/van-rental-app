import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.API_KEY': JSON.stringify(process.eventNames.API_KEY),
    'process.env.AUTH_DOMAIN': JSON.stringify(process.eventNames.AUTH_DOMAIN),
    'process.env.PROJECT_ID': JSON.stringify(process.eventNames.PROJECT_ID),
    'process.env.STORAGE_BUCKET': JSON.stringify(process.eventNames.STORAGE_BUCKET),
    'process.env.MESSAGING_SENDER_ID': JSON.stringify(process.eventNames.MESSAGING_SENDER_ID),
    'process.env.APP_ID': JSON.stringify(process.eventNames.APP_ID)
  }
})
