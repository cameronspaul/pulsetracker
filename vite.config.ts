/// <reference types="node" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    dedupe: ['react', 'react-dom'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      fs: 'fs'
    }
  },
  optimizeDeps: {
    include: ['lucide-react']
  },
  assetsInclude: ['**/*.xlsx'],
  publicDir: false // Disable the public directory
});