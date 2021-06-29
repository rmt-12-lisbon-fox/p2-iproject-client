import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/LoginPage.vue'
import Register from '../views/RegisterPage.vue'
import WatchVideo from '../views/WatchVideo.vue'
import MatchSummary from '../views/SeeMatchHistory.vue'

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
    path: '/summary',
    name: 'MatchSummary',
    component: MatchSummary
  },
  {
    path: '/watch',
    name: 'Watch',
    component: WatchVideo
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
