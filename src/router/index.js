import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue'),
    },
    {
      path: '/success',
      name: 'Success',
      component: () => import('../views/Success.vue')
    },
    // {
    //   path: '/contact-2',
    //   name: 'contact2',
    //   component: () => import('../views/Contact2.vue'),
    // },
  ],
})

export default router
