import type { StorybookConfig } from "@storybook/vue3-vite";
import { mergeConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const config: StorybookConfig = {
  stories: [
    "../src/components/challenges/**/*.stories.@(js|ts|mdx)",
    "../stories/**/*.mdx",
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-docs",
    "@storybook/addon-links" // (Opcional, mas recomendado)
  ],
  framework: {
    name: "@storybook/vue3-vite", // Corrigi um typo ("vite" estava escrito "vite")
    options: {},
  },
  async viteFinal(config, { configType }) {
    return mergeConfig(config, {
      base: configType === "PRODUCTION" ? "/vue-daily-challenge/" : "/",
      plugins: [vue()],
      resolve: {
        alias: {
          "@": "/src",
          "~": "/src",
        },
      },
      build: {
        chunkSizeWarningLimit: 2000,
        sourcemap: configType !== "PRODUCTION",
      },
    });
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ['../public'], // Garante que arquivos estáticos sejam copiados
  features: {
    // Removido `storyStoreV7` (não é mais necessário no Storybook 7+)
    // Se quiser, pode adicionar outras features compatíveis, como:
    // interactionsDebugger: true, (opcional)
  },
};

export default config;