import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import DetailPage from '../views/DetailPage.vue'
import SchedulePage from '../views/SchedulePage.vue'

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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (!localStorage.access_token && to.name == 'Home') {
    next('/login')
  } else if (localStorage.access_token && to.name == 'Login') {
    next('/')
  } else {
    next()
  }
})

export default router
