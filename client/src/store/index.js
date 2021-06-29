import Vue from 'vue'
import Vuex from 'vuex'
import instanceAxios from '../config/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    eachVideo: []
  },
  mutations: {
    FETCH_VIDEO (state, payload) {
      state.eachVideo = payload
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
          // console.log(data, '<<<<<<<<<<<<<<<<mask action')
          // console.log(data)
          localStorage.setItem('access_token', data.access_token)
        })
        .catch((err) => {
          console.log(err.response)
        })
    },
    registerHandler (context, payload) {
      instanceAxios({
        url: '/register',
        data: payload,
        method: 'POST'
      })
        .then(({ data }) => {
          console.log(data)
        })
        .catch((err) => {
          console.log(err.response)
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
          console.log(data)
          context.commit('FETCH_VIDEO', data)
        })
        .catch((err) => {
          console.log(err.response)
        })
    },
    seeMatch (context, payload) {
      const data = {
        matchId: payload.matchId
      }
      instanceAxios({
        url: '/historymatch',
        headers: { access_token: localStorage.access_token },
        data: data,
        method: 'POST'
      })
        .then(({ data }) => {
          console.log(data)
        })
        .catch((err) => {
          console.log(err.response)
        })
    }
  },
  modules: {
  }
})
