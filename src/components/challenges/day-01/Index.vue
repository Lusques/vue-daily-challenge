<template>
  <section>
    <div class="card m-auto bg-dark text-white" style="width: 18rem">
      <div class="card-body d-flex justify-content-between gap-3">
        <div>
          <h3 class="card-title mb-2">Contador de tarefas</h3>
          <h5 class="card-text m-0">Tarefas: {{ count }}</h5>
        </div>
        <div class="d-flex justify-content-center flex-column gap-2">
          <button
            type="button"
            class="btn btn-outline-light"
            @click="increment()"
          >
            +
          </button>
          <button
            type="button"
            class="btn btn-outline-light"
            @click="decrement()"
          >
            -
          </button>
        </div>
      </div>
    </div>
    <div :class="`alert alert-${alertType}`" role="alert" v-if="alertMessage">
      {{ alertMessage }}
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const count = ref(0);
const alertMessage = ref("");
const alertType = ref("primary");
function increment() {
  count.value++;
  if (count.value === 10) {
    alertType.value = "primary";
    showTemporaryAlert("Bom trabalho!");
  }
}
function decrement() {
  if (count.value < 1) {
    alertType.value = "danger";
    showTemporaryAlert(`Valor mínimo: ${count.value}`);
  } else {
    count.value--;
  }
}

function showTemporaryAlert(newMessage: string) {
  if (alertMessage.value === newMessage) {
    return;
  }
  alertMessage.value = newMessage;
  setTimeout(() => {
    alertMessage.value = "";
  }, 3000);
}
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
