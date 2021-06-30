import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api'
import router from '../router'
// import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {},
    isLogin: false,
    activePage: '/'
  },
  mutations: {
    LOGIN (state, payload) {
      state.userInfo = payload
      localStorage.access_token = payload.access_token
      state.isLogin = true
      router.push({ path: '/' })
      state.activePage = '/'
    },
    GOOGLE_LOGIN (state, idToken) {
      Vue.$toast.open({
        message: 'please wait.., GOOGLE O AUTH login processing',
        position: 'top-right',
        type: 'success',
        duration: 0
      })
      const data = { id_token: idToken }
      api.post('/googlelogin', data)
        .then(({ data }) => {
          localStorage.access_token = data.access_token
          state.isLogin = true
          router.push('/')
          state.activePage = '/'
          Vue.$toast.open({
            message: 'WELCOME.. ',
            position: 'top-right',
            type: 'success',
            duration: 0
          })
        })
        .catch(({ response }) => {
          Vue.$toast.open({
            message: `ERROR.., ${response.data.message}`,
            position: 'top-right',
            type: 'error',
            duration: 7777
          })
        })
        .finally(_ => { setTimeout(_ => { Vue.$toast.clear() }, 2177) })
    },
    LOGOUT (state) {
      state.isLogin = false
      localStorage.clear()
      this.$router.push('/').catch(() => {})
      state.activePage = '/'
    },
    ACTIVE_PAGE (state, payload) {
      state.activePage = payload
    }
  },
  actions: {
    login ({ commit }, payload) {
      const data = { ...payload }
      api.post('/login', data)
        .then(({ data }) => {
          Vue.$toast.open({
            message: `Congrats.. WELCOME  ${payload.email.split('@')[0]} ..`,
            position: 'top-right',
            type: 'success',
            duration: 0
          })
          commit('LOGIN', data)
        })
        .catch(({ response }) => {
          Vue.$toast.open({
            message: `ERROR.., ${response.data.message}`,
            position: 'top-right',
            type: 'error',
            duration: 7777
          })
        })
        .finally(_ => { setTimeout(_ => { Vue.$toast.clear() }, 2177) })
    },
    register ({ commit }, payload) {
      const data = { ...payload }
      api.post('/register', data)
        .then(({ data }) => {
          Vue.$toast.open({
            message: `Congrats.., ${payload.email.split('@')[0]} registered, please login..`,
            position: 'top-right',
            type: 'success',
            duration: 0
          })
          router.push({ path: '/login' })
          commit('ACTIVE_PAGE', '/login')
        })
        .catch(({ response }) => {
          Vue.$toast.open({
            message: `ERROR.., ${response.data.message}`,
            position: 'top-right',
            type: 'error',
            duration: 7777
          })
        })
        .finally(_ => { setTimeout(_ => { Vue.$toast.clear() }, 2177) })
    }
  },
  modules: {
  }
})
