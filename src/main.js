import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router' // ← OK, bien importé !

createApp(App)
  .use(router)        // ← AJOUTE CETTE LIGNE
  .mount('#app')      // ← Ensuite on monte l'app
