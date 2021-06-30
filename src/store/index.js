import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'
let rootUrl = 'http://localhost:3000'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    login: false,
    home: true,
    loading: false,
    user: {
      name: '',
      fullname: '',
      admin_status: '',
      id: '',
      email: '',
      profilePic: ''
    },
    admin: false,
    news: [],
    reviews: [],
    review: {},
    translation: ''
  },
  mutations: {
    POSTLOGINDETAILS (state) {
      state.user.name = localStorage.first_name
      state.user.fullname = `${localStorage.first_name} ${localStorage.last_name}`
      state.user.admin_status = localStorage.admin_status
      state.user.id = localStorage.id
      state.user.email = localStorage.email
      state.user.profilePic = localStorage.profilePic
    },
    ISLOGGEDIN(state, payload) {
      state.isLoggedIn = payload
    },
    LOGOUT(state) {
      localStorage.clear()
      state.isLoggedIn = false
      // swal('Success', 'You have signed out', 'success')
      Vue.$toast.success('You have signed out', {
        type: 'success',
        dismissible: true
      })
      router.push({path:'/login'})
    },
    HIDEHOME(state) {
      state.home = false
    },
    TOGGLELOADER (state, payload) {
      state.loading = payload
    },
    ADMINTOGGLE (state, payload) {
      state.admin = payload
    },
    GETNEWS(state, payload) {
      state.news = payload
    },
    GETREVIEWS(state, payload) {
      state.reviews = payload
    },
    FETCHREVIEW(state, payload) {
      state.review = payload
      console.log('DONE FETCH')
    },
    TOLOGINPAGE(state) {
      state.login = true
    },
    SAVETRANSLATION(state, payload) {
      state.translation = payload
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
          localStorage.setItem('name', data.data.name)
          localStorage.setItem('role', data.data.role)
          localStorage.setItem('id', data.data.id)
          commit('POSTLOGINDETAILS')
          commit('ISLOGGEDIN')

          if (localStorage.role == 'customer') {
            commit('BOOKMARKICONSHOW')
            commit('ISCUSTOMER')
          }

          router.push({ path: '/' })
        })
        .catch(err => {
          swal('Error', err.response.data.message, 'error')
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
          let founder = data.data
          localStorage.setItem('accessToken', founder.accessToken)
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

          if (localStorage.admin_status == true) {
            commit('ADMINTOGGLE', true)
          }

          router.push({ path: '/' })
        })
        .catch(err => {
          console.log('Error:', err)
          commit('TOGGLELOADER', false)
          // swal('Error', err.response.data.message, 'error')
          Vue.$toast.error(err.response.data.message)
        })
    },
    getnews ({commit}) {
      axios({
        url: `${rootUrl}/news`,
        method: 'get',
      })
        .then(articles => {
          commit('GETNEWS', articles.data)
        })
        .catch(err => {
          console.log('Error:', err)
          Vue.$toast.error(err.response.data.message)
        })
    },
    getReviews ({commit}) {
      axios({
        url: `${rootUrl}/reviews`,
        method: 'get',
      })
      .then(reviews => {
        commit('GETREVIEWS', reviews.data)
      })
      .catch(err => {
        console.log('Error:', err)
        Vue.$toast.error(err.response.data.message)
      })
    },
    getReviewDetail({commit}, payload) {
      let reviewId = +payload
      // console.log(reviewId)
      axios({
        url: `${rootUrl}/reviews/${reviewId}`,
        method: 'get',
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
    addLike(context, payload) {
      let reviewId = +payload
      axios({
        url: `${rootUrl}/like/${reviewId}`,
        method: 'patch',
      })
      .then(review => {
        console.log('DONE ADDING LIKE')
      })
      .catch(err => {
        console.log('Error:', err)
        // Vue.$toast.error('Please login to like a review')
        Vue.$toast.error(err.response.data.message)
      })
    },
    translate({commit}, payload) {
      let language = payload.lang
      // console.log(language, '<<<<<<<<<')
      let reviewId = payload.reviewId

      axios({
        url: `${rootUrl}/reviews/translate/${reviewId}`,
        method: 'post',
        data: {
          language
        }
      })
      .then(text => {
        commit('SAVETRANSLATION', text.data)
        console.log(text.data)
      })
      .catch(err => {
        console.log('Error:', err)
        // Vue.$toast.error('Please login to like a review')
        Vue.$toast.error(err.response.data.message)
      })
    }
  },
  modules: {
  }
})
