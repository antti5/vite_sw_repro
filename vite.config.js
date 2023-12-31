import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import macros from 'vite-plugin-babel-macros';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    macros(),
    VitePWA({
      strategies: 'injectManifest',
      filename: 'sw.js',
   })
  ],
  server: {
    open: true
  }
});
