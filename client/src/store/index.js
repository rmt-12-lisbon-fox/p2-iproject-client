import Vue from 'vue'
import Vuex from 'vuex'
import instanceAxios from '../config/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
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
      instanceAxios({
        url: '/videos',
        data: payload,
        headers: {access_token: localStorage.access_token}
      })
        .then(({data}) => {
          console.log(data);
        })
        .catch((err) => { 
          console.log(err.response);
        })
    }
  },
  modules: {
  }
})
