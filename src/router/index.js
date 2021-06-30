import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import Product from '../views/Product.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import DetailInvite from '../components/DetailInvite.vue'
import DetailBlog from '../components/DetailBlog.vue'
import Form from '../views/Form.vue'
import Preview from '../views/Preview.vue'
import ViewsInvite from '../components/ViewsInvite.vue'
import GenerateLink from '../views/GenerateLink.vue'
import EditInvite from '../components/EditInvite.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
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
    path: '/detailinvite/:id',
    name: 'DetailInvite',
    component: DetailInvite
  },
  {
    path: '/detail/:id',
    name: 'DetailBlog',
    component: DetailBlog
  },
  {
    path: '/form',
    name: 'Form',
    component: Form
  },
  {
    path: '/preview',
    name: 'Preview',
    component: Preview
  },
  {
    path: '/viewsinvite/:id',
    name: 'ViewsInvite',
    component: ViewsInvite
  },
  {
    path: '/generatelink',
    name: 'GenerateLink',
    component: GenerateLink
  },
  {
    path: '/edit/:id',
    name: 'EditInvite',
    component: EditInvite
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name === 'Home' && !localStorage.access_token) {
    next('/login')
  } else if (to.name === 'Blog' && !localStorage.access_token) {
    next('/login')
  } else if (to.name === 'Product' && !localStorage.access_token) {
    next('/login')
  } else if (to.name === 'DetailInvite' && !localStorage.access_token) {
    next('/login')
  } else if (to.name === 'Form' && !localStorage.access_token) {
    next('/login')
  } else if (to.name === 'Preview' && !localStorage.access_token) {
    next('/login')
  } else if (to.name === 'ViewsInvite' && !localStorage.access_token) {
    next('/login')
  } else if (to.name === 'GenerateLink' && !localStorage.access_token) {
    next('/login')
  } else if (to.name === 'EditInvite' && !localStorage.access_token) {
    next('/login')
  } else if (to.name === 'Login' && localStorage.access_token) {
    next('/home')
  } else if (to.name === 'Register' && localStorage.access_token) {
    next('/home')
  } else {
    next()
  }
})

export default router
