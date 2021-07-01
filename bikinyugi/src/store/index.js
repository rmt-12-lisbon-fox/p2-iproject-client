import Vue from 'vue'
import Vuex from 'vuex'
import axi from '../api/axios'
import router from '../router'
// import Toasted from 'vue-toasted'

Vue.use(Vuex)
// Vue.use(Toasted, {duration: 2000})

export default new Vuex.Store({
  state: {
    isLogin: false,
    username: '',
    cardData: {},
    allCards: [],
    deckList: [],
    attributes: [],
    types: [],
    races: [],
    latestCards: [],
    tweets: []
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
    },
    ALLCARDS (state, payload) {
      state.allCards = payload
    },
    ADDCARD (state, card) {
      if (state.deckList.filter(ele => +ele.cardId === +card.cardId).length >= 3) {
        console.log('udah 3 bang')
      } else {
        state.deckList.push(card)
        state.deckList.sort((a, b) => a.cardId - b.cardId)
      }
    },
    DELETECARD (state, index) {
      // console.log(index)
      state.deckList.splice(index, 1)
    },
    ATTRIBUTES (state, payload) {
      state.attributes = payload
    },
    TYPES (state, payload) {
      state.types = payload
    },
    RACES (state, payload) {
      state.races = payload
    },
    LATESTSEARCH (state, payload) {
      state.latestCards = payload
    },
    FETCHTWITTER (state, payload) {
      state.tweets = payload
    },
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
    async getCard ({ commit }, cardId) {
      try {
        const cardData = await (await axi.get(`/wiki/${cardId}`)).data
        commit('CARDDATA', cardData)
      } catch (err) {
        console.log(err.response)
      }
    },
    async fetchAllCards ({ commit }, payload) {
      try {
        // console.log('masuk sini', payload)
        // this.toasted.show('Fetching Data..')
        const data = await (await axi.get('/wiki/', {
          params: payload
        })).data
        commit('ALLCARDS', data)
      } catch (err) {
        console.log(err.response)
      }
    },
    async fetchStarter ({ commit }) {
      try {
        const attributes = await (await axi.get('/wiki/attributes')).data
        const races = await (await axi.get('/wiki/races')).data
        const types = await (await axi.get('/wiki/types')).data
        commit('ATTRIBUTES', attributes)
        commit('RACES', races)
        commit('TYPES', types)
      } catch (err) {
        console.log(err.response)
      }
    },
    async latestSearch ({ commit }) {
      try {
        // this.$toasted.show('Fetching Data..')
        const latest = await (await axi.get('/wiki/latest')).data
        commit('LATESTSEARCH', latest)
      } catch (err) {
        console.log(err.response)
      }
    },
    async fetchTwitter ({ commit }, name) {
      try {
        const twitter = await (await axi.get('/wiki/twitterSearch', {
          params: {
            q: name
          }
        })).data
        commit('FETCHTWITTER', twitter)
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
    },
    cardCount (state) {
      return state.deckList.length
    },
    totalPrice (state) {
      return '$ ' + state.deckList.reduce((total, ele) => {
        return total + ele.card_prices
      }, 0).toFixed(2)
    }
  }
})
