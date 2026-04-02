import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuración para GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/Parcial_Final_Interfaces2/', // <- obligatorio para GitHub Pages
  build: {
    outDir: 'dist', // carpeta de salida
  },
});