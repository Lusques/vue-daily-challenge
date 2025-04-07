#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Configura caminhos corretamente para ES Modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Pega o número do dia do argumento
const dayNumber = process.argv[2];

if (!dayNumber || isNaN(dayNumber)) {
  console.error("❌ Por favor, especifique um número de dia válido!");
  console.log("👉 Uso correto: npm run create-challenge <número-do-dia>");
  process.exit(1);
}

const challengeDir = `day-${dayNumber.toString().padStart(2, "0")}`;
const fullPath = path.join(
  __dirname,
  "..",
  "src",
  "components",
  "challenges",
  challengeDir
);

// Conteúdos dos arquivos (agora com template literais mais limpas)
const vueContent = `
<script setup>
// Seu código Vue aqui
const count = ref(0)
</script>

<template>
  <div>
    <h2>Desafio Day ${dayNumber}</h2>
    <button @click="count++">
      Clicks: {{ count }}
    </button>
  </div>
</template>
`;

const storiesContent = `
import Index from './Index.vue'

export default {
  title: 'Month-n/Week-n/Day-${dayNumber}: TaskName',
  component: Index
}

export const Default = () => ({
  components: { Index },
  template: '<Index />'
})
`;

const specContent = `
import { mount } from '@vue/test-utils'
import Index from './Index.vue'

test('renderiza corretamente', () => {
  const wrapper = mount(Index)
  expect(wrapper.text()).toContain('Desafio Day ${dayNumber}')
})
`;

// Cria a estrutura
try {
  await fs.promises.mkdir(fullPath, { recursive: true });
  await Promise.all([
    fs.promises.writeFile(path.join(fullPath, "Index.vue"), vueContent),
    fs.promises.writeFile(
      path.join(fullPath, "Index.stories.ts"),
      storiesContent
    ),
    fs.promises.writeFile(path.join(fullPath, "Index.spec.ts"), specContent),
  ]);
  console.log(
    `✅ Desafio Day ${dayNumber} criado em: ${fullPath.replace(
      /.*src/,
      "./src"
    )}`
  );
} catch (err) {
  console.error("❌ Erro ao criar desafio:", err);
}
