// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // ─── Muda para o teu domínio real antes do deploy ───────────
  site: 'https://henriqueoliv.pt',

  // Static export — zero JS no cliente por padrão
  output: 'static',

  integrations: [
   // sitemap(), // gera sitemap.xml automaticamente → +SEO
  ],

  image: {
    // Astro converte automaticamente para WebP/AVIF e gera srcset
    // Formatos aceites: .jpg .jpeg .png .webp .avif .gif .tiff
    remotePatterns: [], // adiciona domínios externos se precisares
  },
});

