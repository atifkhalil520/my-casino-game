import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.', // Ensure root is the project folder
  build: {
    outDir: 'dist', // Output directory for the build
    emptyOutDir: true, // Ensure it's cleared before building
  },
})


