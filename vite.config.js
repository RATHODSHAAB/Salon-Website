import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
      },
    },
  },
  plugins: [react(),
    tailwindcss(),
  ],
  server: {
    allowedHosts: [
      "achievable-nonserviceably-luisa.ngrok-free.dev"
    ]
  }
})
