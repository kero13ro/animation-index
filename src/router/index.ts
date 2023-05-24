import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    // {
    //   path: '/scroll',
    //   name: 'scroll',
    //   component: () => import('@/views/scroll.vue'),
    // },
    {
      path: '/perspective',
      name: 'perspective',
      component: () => import('@/views/perspective.vue'),
    },
    {
      path: '/blob',
      name: 'blob',
      component: () => import('@/views/blob.vue'),
    },
    {
      path: '/ToggleTimeline',
      name: 'ToggleTimeline',
      component: () => import('@/views/ToggleTimeline.vue'),
    },
    {
      path: '/ScrollView',
      name: 'ScrollView',
      component: () => import('@/views/ScrollView.vue'),
    },
    {
      path: '/ScrollView-clean',
      name: 'ScrollView-clean',
      component: () => import('@/views/ScrollView-clean.vue'),
    },
    {
      path: '/trans-slot',
      name: 'trans-slot',
      component: () => import('@/views/trans-slot.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
