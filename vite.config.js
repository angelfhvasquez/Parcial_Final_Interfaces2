import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Parcial_Final_Interfaces2/', // <- esto corrige la página en blanco
});