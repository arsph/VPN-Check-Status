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
    cors: {
      origin: true,
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization']
    },
    proxy: {
      '/login': {
        target: 'https://de.vark.cloud:9090',
        changeOrigin: true,
        withCredentials: true,
        secure: false,
        configure: (proxy, options) => {
          proxy.on('proxyReq', (proxyReq, req, res) => {
            proxyReq.setHeader('Origin', 'https://de.vark.cloud:9090');
          });
        }
      },
      '/panel/api/inbounds/getClientTraffics': {
        target: 'https://de.vark.cloud:9090',
        changeOrigin: true,
        withCredentials: true,
        secure: false,
        configure: (proxy, options) => {
          proxy.on('proxyReq', (proxyReq, req, res) => {
            proxyReq.setHeader('Origin', 'https://de.vark.cloud:9090');
          });
        }
      },
    },
  },
});