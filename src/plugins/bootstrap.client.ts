// Importa apenas o CSS (JS é opcional)
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Opcional: Registra componentes Bootstrap como globais (exemplo)
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(nuxtApp => {
  // Se quiser acessar Bootstrap JS em componentes:
  nuxtApp.provide('bootstrap', {
    Modal: typeof window !== 'undefined' ? require('bootstrap/js/dist/modal') : null
  })
})