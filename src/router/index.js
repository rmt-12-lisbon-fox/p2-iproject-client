import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Market from '../views/Market.vue'
import Signal from '../views/Signal.vue'
import Portofolio from '../views/Portofolio.vue'

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
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/market',
    name: 'Market',
    component: Market
  },
  {
    path: '/signal',
    name: 'Signal',
    component: Signal
  },
  {
    path: '/portofolio',
    name: 'Portofolio',
    component: Portofolio
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login' && localStorage.access_token) {
    next('/')
  }
  if (to.path === '/signal' && !localStorage.access_token) {
    Vue.$toast.open({
      message: 'please login first.., to access this signal',
      position: 'top-right',
      type: 'success',
      duration: 0
    })
    next('/')
  }
  if (to.path === '/portofolio' && !localStorage.access_token) {
    Vue.$toast.open({
      message: 'please login first.., to access your PortoFolio',
      position: 'top-right',
      type: 'success',
      duration: 0
    })
    next('/')
  } else next()
})

export default router
