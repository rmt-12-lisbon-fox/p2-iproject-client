import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import DetailPage from '../views/DetailPage.vue'
import SchedulePage from '../views/SchedulePage.vue'
import Register from '../views/Register.vue'

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
    component: Login
  },
  {
    path: '/detail',
    name: 'DetailPage',
    component: DetailPage
  },
  {
    path: '/schedule',
    name: 'SchedulePage',
    component: SchedulePage
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (from.name == 'Login' && to.name == 'Register') {
    next()
  } else if (!localStorage.access_token && to.name == 'Home') {
    next('/login')
  } else if (localStorage.access_token && to.name == 'Login' || to.name == 'Register') {
    next('/')
  } else {
    next()
  }
  
})

export default router
