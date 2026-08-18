// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // ─── Muda para o teu domínio real antes do deploy ───────────
  site: 'https://www.henriqueoliv.pt',

  // Static export — zero JS no cliente por padrão
  output: 'static',

  integrations: [sitemap()],

  image: {
    // Astro converte automaticamente para WebP/AVIF e gera srcset
    // Formatos aceites: .jpg .jpeg .png .webp .avif .gif .tiff
    remotePatterns: [], // adiciona domínios externos se precisares
  },
});