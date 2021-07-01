import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'
import swal from 'sweetalert'
const rootUrl = 'https://rate-your-investor.herokuapp.com'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    slider: true,
    isAdmin: false,
    login: false,
    home: true,
    loading: false,
    user: {
      name: '',
      fullname: '',
      admin_status: '',
      id: '',
      email: '',
      profilePic: '',
      active_status: ''
    },
    admin: false,
    news: [],
    reviews: [],
    review: {},
    translation: '',
    investors: [],
    allinvestors: [],
    activationMessage: ''
  },
  mutations: {
    POSTLOGINDETAILS (state) {
      state.user.name = localStorage.first_name
      state.user.fullname = `${localStorage.first_name} ${localStorage.last_name}`
      state.user.admin_status = localStorage.admin_status
      state.user.id = localStorage.id
      state.user.email = localStorage.email
      state.user.profilePic = localStorage.profilePic
      state.user.active_status = localStorage.active_status
      if (localStorage.admin_status == 'true') {
        state.isAdmin = true
      } else {
        state.isAdmin = false
      }
    },
    SLIDERTOGGLE (state, payload) {
      state.slider = payload
    },
    ISLOGGEDIN (state, payload) {
      state.isLoggedIn = payload
    },
    LOGOUT (state) {
      localStorage.clear()
      state.isLoggedIn = false
      state.isAdmin = false
      Vue.$toast.success('You have signed out', {
        type: 'success',
        dismissible: true
      })
      router.push({ path: '/login' })
    },
    HIDEHOME (state) {
      state.home = false
    },
    TOGGLELOADER (state, payload) {
      state.loading = payload
    },
    ADMINTOGGLE (state, payload) {
      state.admin = payload
    },
    GETNEWS (state, payload) {
      state.news = payload
    },
    GETREVIEWS (state, payload) {
      state.reviews = payload
    },
    FETCHREVIEW (state, payload) {
      state.review = payload
      // console.log('DONE FETCH')
    },
    TOLOGINPAGE (state) {
      state.login = true
    },
    LOGINPAGEOFF (state) {
      state.login = false
    },
    SAVETRANSLATION (state, payload) {
      state.translation = payload
    },
    SAVEINVESTORS (state, payload) {
      state.investors = payload
    },
    SAVEALLINVESTORS (state, payload) {
      state.allinvestors = payload
    },
    ACTIVATEACCOUNT (state, payload) {
      // console.log('MASUKKKKKKKKKKKKKKKKK', payload)
      state.activationMessage = payload
    },
    UPDATELIKES (state, payload) {
      state.review.likes = payload.likes
      state.review.likes_id = payload.likes_id
    }
  },
  actions: {
    googlelogin ({ commit }, payload) {
      const id_token = payload

      axios({
        url: `${rootUrl}/googlelogin`,
        method: 'post',
        data: {
          id_token
        }
      })
        .then(data => {
          localStorage.setItem('accessToken', data.data.accessToken)
          localStorage.setItem('id', founder.id)
          localStorage.setItem('first_name', founder.first_name)
          localStorage.setItem('last_name', founder.last_name)
          localStorage.setItem('username', founder.username)
          localStorage.setItem('email', founder.email)
          localStorage.setItem('admin_status', founder.admin_status)
          localStorage.setItem('active_status', founder.active_status)
          localStorage.setItem('profilePic', founder.profilePic)
          commit('POSTLOGINDETAILS')
          commit('ISLOGGEDIN')
          commit('TOGGLELOADER', false)

          router.push({ path: '/' })
        })
        .catch(err => {
          // console.log('Error:', err)
          commit('TOGGLELOADER', false)
          // swal('Error', err.response.data.message, 'error')
          if (Array.isArray(err.response.data.message)) {
            for (let i = 0; i < err.response.data.message.length; i++) {
              Vue.$toast.error(err.response.data.message[i])
            }
          } else {
            Vue.$toast.error(err.response.data.message)
          }
        })
    },
    login ({ commit }, payload) {
      const email = payload.email
      const password = payload.password

      commit('TOGGLELOADER', true)

      axios({
        url: `${rootUrl}/login`,
        method: 'post',
        data: {
          email,
          password
        }
      })
        .then(data => {
          // console.log(data.data, 'LOGIN DATA')
          const founder = data.data.user
          localStorage.setItem('accessToken', data.data.accessToken)
          localStorage.setItem('id', founder.id)
          localStorage.setItem('first_name', founder.first_name)
          localStorage.setItem('last_name', founder.last_name)
          localStorage.setItem('username', founder.username)
          localStorage.setItem('email', founder.email)
          localStorage.setItem('admin_status', founder.admin_status)
          localStorage.setItem('active_status', founder.active_status)
          localStorage.setItem('profilePic', founder.profilePic)
          commit('POSTLOGINDETAILS')
          commit('ISLOGGEDIN', true)
          commit('TOGGLELOADER', false)

          if (localStorage.admin_status == true) {
            commit('ADMINTOGGLE', true)
          }

          router.push({ path: '/' })
        })
        .catch(err => {
          console.log('Error:', err)
          commit('TOGGLELOADER', false)
          // swal('Error', err.response.data.message, 'error')
          if (Array.isArray(err.response.data.message)) {
            for (let i = 0; i < err.response.data.message.length; i++) {
              Vue.$toast.error(err.response.data.message[i])
            }
          } else {
            Vue.$toast.error(err.response.data.message)
          }
        })
    },
    getnews ({ commit }) {
      axios({
        url: `${rootUrl}/news`,
        method: 'get'
      })
        .then(articles => {
          commit('GETNEWS', articles.data)
        })
        .catch(err => {
          console.log('Error:', err)
          Vue.$toast.error(err.response.data.message)
        })
    },
    getReviews ({ commit }) {
      axios({
        url: `${rootUrl}/reviews`,
        method: 'get'
      })
        .then(reviews => {
          commit('GETREVIEWS', reviews.data)
        })
        .catch(err => {
          console.log('Error:', err)
          Vue.$toast.error(err.response.data.message)
        })
    },
    getReviewDetail ({ commit }, payload) {
      const reviewId = +payload
      // console.log(reviewId)
      axios({
        url: `${rootUrl}/reviews/${reviewId}`,
        method: 'get'
      })
        .then(review => {
        // console.log('DONE PULL')
          commit('FETCHREVIEW', review.data)
        })
        .catch(err => {
          console.log('Error:', err)
          Vue.$toast.error(err.response.data.message)
        })
    },
    addLike ({ commit }, payload) {
      const reviewId = +payload
      // console.log(reviewId)

      axios({
        url: `${rootUrl}/reviews/like/${reviewId}`,
        method: 'patch',
        headers: {
          accessToken: localStorage.accessToken
        }
      })
        .then(review => {
        // console.log('DONE ADDING LIKE', review.data)
          commit('UPDATELIKES', review.data)
          router.push({ path: `/review/${reviewId}` }).catch(() => {})
        })
        .catch(err => {
          console.log('Error:', err)
          // Vue.$toast.error('Please login to like a review')
          Vue.$toast.error(err.response.data.message)
        })
    },
    translate ({ commit }, payload) {
      const language = payload.lang
      const data = {
        language: language
      }
      // console.log(language)
      // console.log(language, '<<<<<<<<<')
      const reviewId = payload.reviewId

      axios({
        url: `${rootUrl}/reviews/translate/${reviewId}`,
        method: 'post',
        data: data
      })
        .then(text => {
          commit('SAVETRANSLATION', text.data)
        // console.log(text.data)
        })
        .catch(err => {
          console.log('Error:', err)
          // Vue.$toast.error('Please login to like a review')
          Vue.$toast.error(err.response.data.message)
        })
    },
    register (context, payload) {
      const first_name = payload.first_name
      const last_name = payload.last_name
      const username = payload.username
      const email = payload.email
      const password = payload.password
      const phoneNumber = payload.phoneNumber
      const company_name = payload.company_name
      const company_website = payload.company_website
      const role = payload.role
      const region = payload.region
      const linkedin_url = payload.linkedin_url
      const company_industry = payload.company_industry
      const team_size = payload.team_size
      const profilePic = payload.profilePic

      const user = new FormData()
      user.append('first_name', first_name)
      user.append('last_name', last_name)
      user.append('username', username)
      user.append('email', email)
      user.append('password', password)
      user.append('phoneNumber', phoneNumber)
      user.append('company_name', company_name)
      user.append('company_website', company_website)
      user.append('role', role)
      user.append('region', region)
      user.append('linkedin_url', linkedin_url)
      user.append('company_industry', company_industry)
      user.append('team_size', team_size)
      user.append('profilePic', profilePic)

      axios({
        url: `${rootUrl}/register`,
        method: 'post',
        data: user,
        contentType: false,
        processData: false
      })
        .then(data => {
          localStorage.setItem('name', data.data.first_name)
          localStorage.setItem('admin_status', data.data.admin_status)
          localStorage.setItem('active_status', data.data.active_status)
          router.push({ path: '/login' })
          swal('Success', 'Verify your email: We have sent you an email verification. Please click on the link provided', 'success')
        })
        .catch(err => {
          console.log('Error:', err)
          if (Array.isArray(err.response.data.message)) {
            for (let i = 0; i < err.response.data.message.length; i++) {
              Vue.$toast.error(err.response.data.message[i])
            }
          } else {
            Vue.$toast.error(err.response.data.message)
          }
        })
    },
    fetchInvestors ({ commit }) {
      axios({
        url: `${rootUrl}/investors`,
        method: 'get'
      })
        .then(data => {
          commit('SAVEINVESTORS', data.data)
        })
        .catch(err => {
          console.log('Error:', err)
          Vue.$toast.error(err.response.data.message)
        })
    },
    fetchAllInvestors ({ commit }) {
      axios({
        url: `${rootUrl}/investors/all`,
        method: 'get',
        headers: {
          accessToken: localStorage.accessToken
        }
      })
        .then(data => {
          commit('SAVEALLINVESTORS', data.data)
        })
        .catch(err => {
          console.log('Error:', err)
          Vue.$toast.error(err.response.data.message)
        })
    },
    addReview ({ commit }, payload) {
      const review = payload
      axios({
        url: `${rootUrl}/reviews`,
        method: 'post',
        data: review,
        headers: {
          accessToken: localStorage.accessToken
        }
      })
        .then(data => {
        // console.log(data.data)
          swal('Success', 'You have added a new review', 'success')
          router.push({ path: '/' })
        })
        .catch(err => {
          console.log('Error:', err.response.data.message)
          if (Array.isArray(err.response.data.message)) {
            for (let i = 0; i < err.response.data.message.length; i++) {
              Vue.$toast.error(err.response.data.message[i])
            }
          } else {
            Vue.$toast.error(err.response.data.message)
          }
        })
    },
    verifyFounder ({ commit }, payload) {
      const founderId = +payload
      axios({
        url: `${rootUrl}/founders/verify/${founderId}`,
        method: 'patch'
      })
        .then(data => {
        // console.log(data.data)
          commit('ACTIVATEACCOUNT', data.data.message)
          Vue.$toast.success('You have verified your account')
        })
        .catch(err => {
          console.log('Error:', err)
          if (Array.isArray(err.response.data.message)) {
            for (let i = 0; i < err.response.data.message.length; i++) {
              Vue.$toast.error(err.response.data.message[i])
            }
          } else {
            Vue.$toast.error(err.response.data.message)
          }
        })
    },
    registerInvestor ({ commit }, payload) {
      const newInvestor = payload
      axios({
        url: `${rootUrl}/investors`,
        method: 'post',
        data: newInvestor,
        headers: {
          accessToken: localStorage.accessToken
        }
      })
        .then(data => {
        // console.log(data.data)
          Vue.$toast.success('Thank you! You will be notified via Whatsapp when the investor has been verified.')
          router.push({ path: '/' })
        })
        .catch(err => {
          console.log('Error:', err)
          if (Array.isArray(err.response.data.message)) {
            for (let i = 0; i < err.response.data.message.length; i++) {
              Vue.$toast.error(err.response.data.message[i])
            }
          } else {
            Vue.$toast.error(err.response.data.message)
          }
        })
    },
    verifyInvestor ({ dispatch }, payload) {
      const investorId = +payload
      axios({
        url: `${rootUrl}/investors/verify/${investorId}`,
        method: 'patch',
        headers: {
          accessToken: localStorage.accessToken
        }
      })
        .then(data => {
        // console.log(data.data)
          Vue.$toast.success(data.data.message)
          dispatch('fetchAllInvestors')
          router.push({ path: '/dashboard' }).catch(() => {})
        })
        .catch(err => {
          console.log('Error:', err)
          if (Array.isArray(err.response.data.message)) {
            for (let i = 0; i < err.response.data.message.length; i++) {
              Vue.$toast.error(err.response.data.message[i])
            }
          } else {
            Vue.$toast.error(err.response.data.message)
          }
        })
    }
  },
  modules: {
  }
})
