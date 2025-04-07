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
    "@storybook/addon-docs"
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [vue()], // Plugin Vue essencial
      resolve: {
        alias: {
          "@": "/src", // Alias comum em projetos Vue
          "~": "/src", // Alias usado no Nuxt
        },
      },
    });
  },
  docs: {
    autodocs: "tag", // Gera docs automáticos para componentes marcados
  },
};

export default config;
