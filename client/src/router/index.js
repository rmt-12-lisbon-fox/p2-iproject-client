import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/LoginPage.vue'
import Register from '../views/RegisterPage.vue'
import WatchVideo from '../views/WatchVideo.vue'
import MatchSummary from '../views/SeeMatchHistory.vue'
import ChatRoom from '../views/ChatRoom.vue'
import News from '../views/SeeLatestNews.vue'

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
    path: '/heartstone',
    name: 'HeartStone',
    component: MatchSummary
  },
  {
    path: '/chat',
    name: 'ChatRoom',
    component: ChatRoom
  },
  {
    path: '/news',
    name: 'News',
    component: News
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

router.beforeEach((to, from, next) => {
  if (to.name === 'Home' && !localStorage.access_token) {
    next({ name: 'Login' })
  } else if (to.name === 'HeartStone' && !localStorage.access_token) {
    next({ name: 'Login' })
  } else if (to.name === 'ChatRoom' && !localStorage.access_token) {
    next({ name: 'Login' })
  } else if (to.name === 'News' && !localStorage.access_token) {
    next({ name: 'Login' })
  } else if (to.name === 'Watch' && !localStorage.access_token) {
    next({ name: 'Login' })
  } else if (to.name === 'Login' && localStorage.access_token) {
    next({ name: 'Home' })
  } else if (to.name === 'Register' && localStorage.access_token) {
    next({ name: 'Home' })
  } else {
    next()
  }
})

export default router
