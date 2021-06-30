import Vue from 'vue'
import Vuex from 'vuex'
import instanceAxios from '../config/axios'
import route from '../router/index'
import swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    eachVideo: [],
    message: [],
    allNews: [],
    allCard: [],
    isLogin: false,
    popularVideo: [],
    welcoming: ''
  },
  mutations: {
    FETCH_VIDEO (state, payload) {
      state.eachVideo = payload
    },
    INCOMING_MESSAGE (state, payload) {
      state.message.push(payload)
    },
    GET_NEWS (state, payload) {
      state.allNews = payload
    },
    ALL_CARD (state, payload) {
      state.allCard = payload
    },
    LOGIN_FLAG (state, payload) {
      state.isLogin = payload
    },
    POPULAR_VIDEO (state, payload) {
      state.popularVideo = payload
    },
    WELCOMING (state, payload) {
      state.welcoming = payload
    }
  },
  actions: {
    loginHandler (context, payload) {
      instanceAxios({
        method: 'POST',
        url: '/login',
        data: payload
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          localStorage.setItem('username', data.username)
          context.commit('LOGIN_FLAG', true)
          swal.fire({
            title: 'Selamat',
            text: 'Kamu Berhasil Login',
            icon: 'success',
            confirmButtonText: 'ok'
          })
          route.push('/')
        })
        .catch((err) => {
          swal.fire({
            title: 'Error',
            text: err.response.data.message,
            icon: 'error',
            confirmButtonText: 'ok'
          })
        })
    },
    registerHandler (context, payload) {
      instanceAxios({
        url: '/register',
        data: payload,
        method: 'POST'
      })
        .then(({ data }) => {
          swal.fire({
            title: 'Selamat',
            text: 'Register Berhasil',
            icon: 'success',
            confirmButtonText: 'ok'
          })
        })
        .catch((err) => {
          swal.fire({
            title: 'Error',
            text: err.response.data.message,
            icon: 'error',
            confirmButtonText: 'ok'
          })
        })
    },
    fetchVideo (context, payload) {
      const data = { title: payload }
      instanceAxios({
        url: '/videos',
        data: data,
        headers: { access_token: localStorage.access_token },
        method: 'POST'
      })
        .then(({ data }) => {
          context.commit('FETCH_VIDEO', data)
        })
        .catch((err) => {
          swal.fire({
            title: 'Error',
            text: err.response.data.message,
            icon: 'error',
            confirmButtonText: 'ok'
          })
        })
    },
    seeMatch (context, payload) {
      const data = {
        cardName: payload.cardName
      }
      instanceAxios({
        url: '/historymatch',
        headers: { access_token: localStorage.access_token },
        data: data,
        method: 'POST'
      })
        .then(({ data }) => {
          context.commit('ALL_CARD', data)
        })
        .catch((err) => {
          swal.fire({
            title: 'Error',
            text: err.response.data.message,
            icon: 'error',
            confirmButtonText: 'ok'
          })
        })
    },
    incomingMessage (context, payload) {
      context.commit('INCOMING_MESSAGE', payload)
    },
    getNews (context, payload) {
      instanceAxios({
        url: '/news',
        headers: { access_token: localStorage.access_token },
        data: payload,
        method: 'POST'
      })
        .then(({ data }) => {
          context.commit('GET_NEWS', data)
        })
        .catch((err) => {
          swal.fire({
            title: 'Error',
            text: err.response.data.message,
            icon: 'error',
            confirmButtonText: 'ok'
          })
        })
    },
    getPopularVideo (context, payload) {
      instanceAxios({
        method: 'GET',
        url: '/popularVideos',
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('POPULAR_VIDEO', data)
        })
        .catch((err) => {
          swal.fire({
            title: 'Error',
            text: err.response.data.message,
            icon: 'error',
            confirmButtonText: 'ok'
          })
        })
    }
  },
  modules: {
  }
})
