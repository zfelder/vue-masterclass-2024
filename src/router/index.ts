import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import { h } from 'vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('@/views/ProjectsView.vue'),
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: () => import('@/views/TasksView.vue'),
    },
    {
      path: '/project/:id',
      name: 'single-project',
      component: () => import('@/views/SingleProjectView.vue'),
    },
    {
      path: '/:catchAll(.*)*',
      name: 'not-found',
      component: h(
        'div',
        {
          style: 'font-size: 2rem; font-weight: bold; color: darkred;',
        },
        'Page not found',
      ),
    },
  ],
})

export default router
