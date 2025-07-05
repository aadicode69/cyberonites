import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: [
    '**/*.JPG', 
    '**/*.jpg', 
    '**/*.jpeg', 
    '**/*.png', 
    '**/*.PNG', 
    '**/*.webp', 
    '**/*.WEBP', 
    '**/*.svg', 
    '**/*.gif'
  ],
  build: {
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash][extname]'
      }
    }
  }
})
