// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  vite: {
    build: {
      // Mejora la compresión de los assets
      cssCodeSplit: true,
      // Mejora el rendimiento de build
      reportCompressedSize: false,
      // Opciones para rollup
      rollupOptions: {
        output: {
          // Estrategia de fragmentación para mejores resultados en caché
          manualChunks: {
            'vendor': ['astro/client'],
          },
        },
      },
    },
    // Optimizaciones generales
    optimizeDeps: {
      exclude: [],
    },
    // Preferencias de desarrollo
    server: {
      hmr: true,
    },
    // Plugins personalizados de Vite
    plugins: [],
  },
});
