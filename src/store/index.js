import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    background: null,
    latitude: 0,
    longitude: 0,
    result: null
  },
  mutations: {
    SET_background (state, payload) {
      state.background = payload
    }
  },
  actions: {
    getBackground (context) {
      return axios({
        url: 'http://localhost:3000/background',
        method: 'get'
      })
        .then(({ data }) => {
          context.commit('SET_background', { img: data.url, title: data.title, explanation: data.explanation })
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
