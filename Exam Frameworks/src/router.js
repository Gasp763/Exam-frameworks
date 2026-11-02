import { createRouter, createWebHistory } from 'vue-router'

import Accueil from './components/Contenu.vue'
import Films from './components/Films.vue'

const routes = [
  { path: '/', component: Accueil },
  { path: '/films:index', component: Films},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router