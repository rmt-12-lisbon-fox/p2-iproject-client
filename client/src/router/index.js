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
    component: MyDesign
  },
  {
    path: '/bookmark',
    name: 'Bookmark',
    component: Bookmark
  },
  {
    path: '/add-design',
    name: 'AddDesign',
    component: AddDesign
  },
  {
    path: '/edit-design/:id',
    name: 'EditDesign',
    component: EditDesign
  },
  {
    path: '/email/:id',
    name: 'EmailForm',
    component: EmailForm
  },
  {
    path: '/message/:id',
    name: 'SmsForm',
    component: SmsForm
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
