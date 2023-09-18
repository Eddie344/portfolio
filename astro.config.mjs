import { defineConfig } from 'astro/config';
import lit from '@astrojs/lit';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  integrations: [lit()],
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    speedInsights: {
      enabled: true,
    },
  }),
});
