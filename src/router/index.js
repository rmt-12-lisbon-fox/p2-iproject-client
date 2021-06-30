import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Register" */ '../views/Register.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Profile" */ '../views/Profile.vue')
  },
  {
    path: '/myComment',
    name: 'MyComment',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "MyComment" */ '../views/MyComment.vue')
  },
  {
    path: '/editReview/:id',
    name: 'EditReview',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "EditReview" */ '../views/EditReview.vue')
  },
  {
    path: '/films',
    name: 'Films',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Films" */ '../views/Film.vue')
  },
  {
    path: '/editProfile',
    name: 'EditProfile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Films" */ '../views/EditProfile.vue')
  },
  {
    path: '/review',
    name: 'Review',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Review" */ '../views/ReviewForm.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/' && !localStorage.access_token) {
    next({ path: '/login' });
  }else if (to.path === '/login' && localStorage.access_token) {
    next({ path: '/' });
  }else if (to.path === '/profile' && !localStorage.access_token) {
    next({ path: '/login' });
  }else if (to.path === '/myComment' && !localStorage.access_token) {
    next({ path: '/login' });
  }else if (to.path === '/films' && !localStorage.access_token) {
    next({ path: '/login' });
  }else if (to.path === '/editProfile' && !store.state.isEdit) {
    next({ path: '/profile' });
  }else if (to.path === '/review' && !store.state.isReview) {
    next({ path: '/films' });
  }else {
    next();
  }
})

export default router
