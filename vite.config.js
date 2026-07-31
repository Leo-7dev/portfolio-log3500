import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuration Vite du client React.
// - build.outDir : dossier « dist » servi ensuite par le middleware statique d'Express.
// - server.proxy : en developpement, les appels /api sont rediriges vers le serveur
//   Express local (port 3000) afin de reproduire le comportement de production.
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false
  },
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
  }
});
