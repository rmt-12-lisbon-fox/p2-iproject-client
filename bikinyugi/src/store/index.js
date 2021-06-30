import Vue from 'vue'
import Vuex from 'vuex'
import axi from '../api/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    username: '',
    cardData: {}
  },
  mutations: {
    LOGINCHECK (state) {
      if (localStorage.access_token) {
        state.isLogin = true
        state.username = localStorage.username
      } else {
        state.isLogin = false
        state.username = ''
      }
    },
    CARDDATA (state, payload) {
      state.cardData = payload
    }
  },
  actions: {
    async login ({ commit }, payload) {
      const { userEmail, password } = payload
      let email
      let username
      let loginUser
      try {
        if (userEmail.indexOf('@') >= 0) {
          email = userEmail
          loginUser = await (await axi.post('/login', { email, password })).data
        } else {
          username = userEmail
          loginUser = await (await axi.post('/login', { username, password })).data
        }
        localStorage.setItem('access_token', loginUser.access_token)
        localStorage.setItem('id', loginUser.id)
        localStorage.setItem('username', loginUser.username)
        commit('LOGINCHECK')

        await router.push('/')
      } catch (error) {
        // toast
        console.log(error.response)
      }
    },
    async register ({ commit }, payload) {
      const { username, email, password } = payload
      try {
        const newUser = await (await axi.post('/register', { username, email, password })).data
        localStorage.setItem('access_token', newUser.access_token)
        localStorage.setItem('id', newUser.id)
        localStorage.setItem('username', newUser.username)
        commit('LOGINCHECK')

        await router.push('/')
      } catch (error) {
        console.log(error.response)
      }
    },
    logout ({ commit }) {
      console.log('masuk logout')
      localStorage.clear()
      commit('LOGINCHECK')
      router.push('/')
    },
    async getCard ({commit}, cardId) {
      try {
        const cardData = await (await axi.get(`/wiki/${cardId}`)).data
        commit('CARDDATA', cardData)
      } catch (err) {
        console.log(err.response)
      }
    }
  },
  modules: {
  },
  getters: {
    cardWiki (state) {
      const cleanData = {}
      for (const key in state.cardData) {
        if (state.cardData[key]) {
          cleanData[key] = state.cardData[key]
        } else if (key === 'banlist_info') {
          cleanData.banlist_info = 'Unlimited'
        }
      }
      return cleanData
    }
  }
})
