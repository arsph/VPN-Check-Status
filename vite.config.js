import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), 
    tailwindcss()],

  server: {
    proxy: {
      '/login': { // Proxy requests to /login to your backend
        target: 'http://85.9.97.246:8080',
        changeOrigin: true, // Essential for CORS
        withCredentials: true, // Important for forwarding cookies
        },
        '/panel/api/inbounds/getClientTraffics': { 
        target: 'http://85.9.97.246:8080',
        changeOrigin: true, // Essential for CORS
        withCredentials: true, // Important for forwarding cookies
        }
      }
    }
  })


