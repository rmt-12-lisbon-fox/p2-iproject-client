import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  {
    path: '/movies/:id',
    name: 'Detail',
    component: () => import(/* webpackChunkName: "Detail" */ '../views/Detail.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "Search" */ '../views/Search.vue')
  },
  {
    path: '/diet',
    name: 'Diet',
    component: () => import(/* webpackChunkName: "Diet" */ '../views/Diet.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "Register" */ '../views/Register.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !localStorage.access_token) next({ name: 'Login' })
  else next()
})

export default router
