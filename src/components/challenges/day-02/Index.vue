<template>
  <section>
    <div class="card m-auto bg-dark text-white" style="width: 18rem">
      <div class="card-body d-flex justify-content-between gap-3">
        <div>
          <h3 class="card-title mb-2">Contador de tarefas</h3>
          <h5 class="card-text m-0">Tarefas: {{ props.count }}</h5>
        </div>
        <div class="d-flex justify-content-center flex-column gap-2">
          <button
            aria-label="Botão de soma"
            type="button"
            class="btn btn-outline-light"
            @click="emit('increment')"
          >
            +
          </button>
          <button
            aria-label="Botão de subtração"
            type="button"
            class="btn btn-outline-light"
            @click="emit('decrement')"
          >
            -
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
interface Props {
  count: number;
}
interface Emits {
  (e: "increment"): void;
  (e: "decrement"): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();
</script>

<style scoped>
.card {
  width: fit-content !important;
}
.alert {
  animation: appear 3s;
  left: 50%;
  position: fixed;
  top: 0;
  transform: translateX(-50%);
}

@keyframes appear {
  0%,
  100% {
    opacity: 0;
  }
  25%,
  75% {
    opacity: 1;
  }
}
</style>
