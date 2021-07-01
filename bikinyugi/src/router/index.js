import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/wiki/',
    name: 'WikiHome',
    component: () => import(/* webpackChunkName: "wiki" */ '../views/WikiHome.vue')
    // children: [
    //   {
    //     path: '/:cardId',
    //     name: 'WikiSearch',
    //     component: () => import(/* webpackChunkName: "wiki-search" */ '../components/WikiSearch.vue')
    //   }
    // ]
  },
  {
    path: '/wiki/:cardId',
    name: 'WikiSearch',
    component: () => import(/* webpackChunkName: "wiki" */ '../views/WikiSearch.vue')
    // children: [
    //   {
    //     path: '/:cardId',
    //     name: 'WikiSearch',
    //     component: () => import(/* webpackChunkName: "wiki-search" */ '../components/WikiSearch.vue')
    //   }
    // ]
  },
  {
    // path: '/decks/:deckId',
    path: '/decks',
    name: 'Decks',
    component: () => import(/* webpackChunkName: "decks" */ '../views/DeckBuilder.vue')
    // children: [
    //   { path: '/tes', component: () => import(/* webpackChunkName: "card-library" */ '../components/CardLibrary.vue') }
    // ]
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
