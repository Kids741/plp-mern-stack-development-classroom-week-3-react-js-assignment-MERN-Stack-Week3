import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: 'plp-mern-stack-development-classroom-week-3-react-js-assignment-MERN-Stack-Week3', // 👈 repo name
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
