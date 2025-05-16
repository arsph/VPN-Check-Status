import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/VPN-Check-Status/',
  plugins: [
    react(),
    tailwindcss()
  ],

  // server: {
  //   proxy: {
  //     '/api': 'http://localhost:5001',
  //   }
  // },

  server: {
    proxy: {
      '/login': {
        target: 'http://85.9.97.246:8080',
        changeOrigin: true, // Ensures the origin is modified
        withCredentials: true,
        secure: false, // If the backend is not using HTTPS
      },
      '/panel/api/inbounds/getClientTraffics': {
        target: 'http://85.9.97.246:8080',
        changeOrigin: true, // Ensures the origin is modified
        withCredentials: true,
        secure: false, // If the backend is not using HTTPS
      },
    },
  },
  
  headers: {
    'Access-Control-Allow-Origin': '*', // Allow all origins
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS', // Allowed methods
    'Access-Control-Allow-Headers': 'Content-Type, Authorization', // Allowed headers
    'Access-Control-Allow-Credentials': 'true', // Allow cookies
  },
});