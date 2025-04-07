import type { ArgTypes } from "@storybook/vue3";
import Index from "./Index.vue";

const IndexDescription = `
### 📘 Contador de Tarefas

Este componente exibe um contador de tarefas com botões de incremento e decremento.

- 🧮 Usa a prop \`initialValue\` para iniciar o contador.
- 📢 Exibe alertas personalizados ao atingir certos valores.
- 🎛️ Integrado ao painel de controles do Storybook.
`;

export default {
  title: "Month-1/Week-1/Day-1: Contador",
  component: Index,
  parameters: {
    docs: {
      description: {
        component: IndexDescription,
      },
    },
  },
  argTypes: {
    initialValue: {
      control: { type: "number" },
    },
  },
};

export const Default = () => ({
  components: { Index },
  template: "<Index />",
});

export const StartInFive = () => ({
  components: { Index },
  setup: () => ({ value: 5 }),
  template: "<Index :initialValue='value'/>",
});

export const StartInTwenty = () => ({
  components: { Index },
  setup: () => ({ value: 20 }),
  template: "<Index :initialValue='value'/>",
});

export const Interactive = (args: ArgTypes) => ({
  components: { Index },
  setup: () => ({ args }),
  template: `<Index :initialValue="args.initialValue" />`,
});
