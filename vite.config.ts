import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import envCompatible from 'vite-plugin-env-compatible';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    envCompatible(),
    visualizer({
      filename: './dist/stats.html',
      open: false,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    host: true, // Needed for Docker/Kubernetes exposure
    allowedHosts: true,
    watch: {
      usePolling: true,
    },
  },
  envPrefix: 'VITE_',
  build: {
    outDir: 'dist', // Vite-Standard
  },
});
