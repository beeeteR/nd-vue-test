import {createRouter, createWebHistory} from "vue-router";
import auth from './middleware/auth'
import guest from './middleware/guest'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: {
        middlewares: [guest]
      }
    },
    {
      path: '/reg',
      name: 'reg',
      component: () => import('../views/HomeView.vue'),
      meta: {
        middlewares: [guest]
      }
    },
    {
      path: '/notes',
      name: 'notes',
      component: () => import('../views/NotesView.vue'),
      meta: {
        middlewares: [auth],
        requiredAuth: true
      }
    }
  ]
})

export default router
