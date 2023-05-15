import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Page2 from '../views/Page2.vue'
import Page3 from '../views/Page3.vue'
import Page4 from '../views/Page4.vue'
import Page5 from '../views/Page5'
import Exhibition from '../views/Exhibition.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
  {
    path: '/aboutus',
    name: 'aboutus',
    // component: () => import(/* webpackChunkName: "aboutus" */ '../views/Page2.vue')
    component: Page2,
  },
  {
    path: '/exhibitionhall',
    name: 'Exhibition',
    // component: () => import(/* webpackChunkName: "exhibition" */ '../views/Exhibition.vue')
    component: Exhibition,
  },
  {
    path: '/page3',
    name: 'Page3',
    // component: () => import(/* webpackChunkName: "page3" */ '../views/Page3.vue')
    component: Page3,
  },
  {
    path: '/page4',
    name: 'Page4',
    // component: () => import(/* webpackChunkName: "page4" */ '../views/Page4.vue')
    component: Page4
  },
  {
    path: '/page5',
    name: 'Page5',
    // component: () => import(/* webpackChunkName: "page4" */ '../views/Page4.vue')
    component: Page5
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
