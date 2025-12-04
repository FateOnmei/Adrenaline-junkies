import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, '.', '');
  
  // Vercel and other providers inject secrets into process.env.
  // We prioritize the process environment variable, then fallback to .env file.
  const apiKey = process.env.API_KEY || env.API_KEY;

  return {
    plugins: [react()],
    define: {
      // Expose API_KEY to the client-side code securely
      'process.env.API_KEY': JSON.stringify(apiKey),
      // Polyfill process.env to prevent "process is not defined" errors in the browser
      'process.env': {}
    }
  }
})