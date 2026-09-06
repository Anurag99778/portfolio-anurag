import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves this as a project page under /portfolio-anurag/, so
  // assets need that base path there. Vercel serves the app at the domain
  // root and sets VERCEL=1 during its build, so use '/' in that case.
  base: process.env.VERCEL ? '/' : '/portfolio-anurag/',
});
