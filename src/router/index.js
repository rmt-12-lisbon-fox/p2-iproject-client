import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Result from '../views/Result.vue'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: (to, from, next) => {
      if (!store.state.background) {
        store.dispatch('getBackground')
          .then(() => {
            next()
          })
      } else {
        next()
      }
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    beforeEnter: (to, from, next) => {
      if (store.state.background) {
        next()
      } else {
        console.log('masuk')
        next({ name: 'Home' })
      }
    }
  },
  {
    path: '/result',
    name: 'Result',
    component: Result,
    beforeEnter: (to, from, next) => {
      if (store.state.result) {
        next()
      } else {
        next({ name: 'Home' })
      }
    }
  },
  {
    path: '/guide',
    beforeEnter () { location.href = 'http://spiff.rit.edu/classes/phys373/lectures/radec/radec.html#altaz' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
