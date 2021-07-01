import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import ReviewForm from '../views/ReviewForm.vue'
import Founder from '../views/FounderProfile.vue'
import Investor from '../views/InvestorProfile.vue'
import ReviewDetails from '../components/ReviewDetails.vue'
import VerifyAccount from '../views/VerifyAccount.vue'
import AddInvestor from '../views/AddInvestor.vue'
import Dashboard from '../views/Dashboard.vue'

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
    path: '/founder/:id',
    name: 'Founder',
    component: Founder
  },
  {
    path: '/investor/:id',
    name: 'Investor',
    component: Investor
  },
  {
    path: '/add-review',
    name: 'ReviewForm',
    component: ReviewForm
  },
  {
    path: '/review/:id',
    name: 'ReviewDetails',
    component: ReviewDetails
  },
  {
    path: '/verify/:id',
    name: 'VerifyAccount',
    component: VerifyAccount
  },
  {
    path: '/add-investor',
    name: 'AddInvestor',
    component: AddInvestor
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: function (to) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  }
})

export default router
