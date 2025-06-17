import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
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
        target: 'https://api.vark.cloud:443',
        changeOrigin: true,
        withCredentials: true,
        secure: false,
      },
      '/panel/api/inbounds/getClientTraffics': {
        target: 'https://api.vark.cloud:443',
        changeOrigin: true,
        withCredentials: true,
        secure: false,
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