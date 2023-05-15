import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Page2 from '../views/Page2.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/aboutus',
    name: 'aboutus',
    component: () => import(/* webpackChunkName: "aboutus" */ '../views/Page2.vue')
  },
  {
    path: '/exhibitionhall',
    name: 'Exhibition',
    component: () => import(/* webpackChunkName: "exhibition" */ '../views/Exhibition.vue')
  },
  {
    path: '/page3',
    name: 'Page3',
    component: () => import(/* webpackChunkName: "page3" */ '../views/Page3.vue')
  },
  {
    path: '/page4',
    name: 'Page4',
    component: () => import(/* webpackChunkName: "page4" */ '../views/Page4.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
