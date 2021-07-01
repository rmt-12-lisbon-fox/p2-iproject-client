import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import DetailPage from '../views/DetailPage.vue'
import DetailPageBookmark from '../views/DetailPageBookmark.vue'
import SavedPlacesPage from '../views/SavedPlaces.vue'

import Swal from 'sweetalert2'
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
    path: '/detail/:id',
    name: 'DetailPage',
    component: DetailPage
  },
  {
    path: '/detailbookmark/:id',
    name: 'DetailPageBookmark',
    component: DetailPageBookmark
  },
  {
    path: '/savedplaces',
    name: 'SavedPlacesPage',
    component: SavedPlacesPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if ((to.name === 'DetailPageBookmark' || to.name === 'SavedPlacesPage') && localStorage.access_token === undefined) {

    next({ name: 'Login' })
    Swal.fire({
      icon: "error",
      title: "Please login first!",
      text: "You must log in to saved a destination",
    });
  }else if ((to.name === 'Login' || to.name === 'Register') && localStorage.access_token !== undefined) {

    next({ name: '/' })
    Swal.fire({
      icon: "error",
      title: "You are already log in",
    });
  } else {
    next()
  }
})

export default router
