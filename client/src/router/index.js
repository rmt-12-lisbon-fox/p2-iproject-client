import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Detail from '../views/Detail.vue'
import RegisterCust from '../views/RegisterCust.vue'
import RegisterDesigner from '../views/RegisterDesigner.vue'
import MyDesign from '../views/MyDesign.vue'
import Bookmark from '../views/Bookmark.vue'
import AddDesign from '../views/AddDesign.vue'
import EditDesign from '../views/Edit.vue'
import EmailForm from '../views/EmailForm.vue'
import SmsForm from '../views/SmsForm.vue'

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
    path: '/detail-page/:id',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/register/customer',
    name: 'RegisterCust',
    component: RegisterCust
  },
  {
    path: '/register/designer',
    name: 'RegisterDesigner',
    component: RegisterDesigner
  },
  {
    path: '/designer/myDesign',
    name: 'MyDesign',
    component: MyDesign,
    beforeEnter: (to, from, next) => {
      if (to.name === 'MyDesign' && !localStorage.access_token) {
        next({ name: 'Login' })
      } else {
        next()
      }
    }
  },
  {
    path: '/bookmark',
    name: 'Bookmark',
    component: Bookmark,
    beforeEnter: (to, from, next) => {
      if (to.name === 'Bookmark' && !localStorage.access_token) {
        next({ name: 'Login' })
      } else {
        next()
      }
    }
  },
  {
    path: '/add-design',
    name: 'AddDesign',
    component: AddDesign,
    beforeEnter: (to, from, next) => {
      if (to.name === 'AddDesign' && !localStorage.access_token) {
        next({ name: 'Login' })
      } else {
        next()
      }
    }
  },
  {
    path: '/edit-design/:id',
    name: 'EditDesign',
    component: EditDesign,
    beforeEnter: (to, from, next) => {
      if (to.name === 'EditDesign' && !localStorage.access_token) {
        next({ name: 'Login' })
      } else {
        next()
      }
    }
  },
  {
    path: '/email/:id',
    name: 'EmailForm',
    component: EmailForm,
    beforeEnter: (to, from, next) => {
      if (to.name === 'EmailForm' && !localStorage.access_token) {
        next({ name: 'Login' })
      } else {
        next()
      }
    }
  },
  {
    path: '/message/:id',
    name: 'SmsForm',
    component: SmsForm,
    beforeEnter: (to, from, next) => {
      if (to.name === 'SmsForm' && !localStorage.access_token) {
        next({ name: 'Login' })
      } else {
        next()
      }
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
