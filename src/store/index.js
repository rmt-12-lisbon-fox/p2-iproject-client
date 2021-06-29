import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api'
import router from '../router'
// import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {}
  },
  mutations: {
    LOGIN (state, payload) {
      state.userInfo = payload
      localStorage.access_token = payload.access_token
      state.isLogin = true
      router.push({ path: '/' })
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
    }
  },
  modules: {
  }
})
