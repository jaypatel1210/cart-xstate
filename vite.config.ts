import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: './src/main.tsx',
        template1: './src/templates/Template1.tsx',
      },
      output: {
        entryFileNames(chunkInfo) {
          if (chunkInfo.name != 'main') {
            return `assets/${chunkInfo.name}.js`;
          }
          return 'assets/[name]-[hash].js';
        },
      },
    },
  },
});
