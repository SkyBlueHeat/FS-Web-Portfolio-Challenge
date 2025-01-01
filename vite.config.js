import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  images: {
    domains: ["images.pexels.com","miro.medium.com", "www.cnet.com"],
  },
})
