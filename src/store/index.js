import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api'
import router from '../router'
import axios from 'axios'
import Swal from 'sweetalert2'
// import 'sweetalert2/dist/sweetalert2.min.css'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {},
    isLogin: false,
    activePage: '/',
    market: {},
    converted: {},
    convertbtc: '',
    converteth: '',
    convertltc: '',
    convertdoge: '',
    convertxrp: '',
    xrplow: '',
    xrphigh: '',
    xrplast: '',
    dogelow: '',
    dogehigh: '',
    dogelast: '',
    ltclow: '',
    ltchigh: '',
    ltclast: '',
    ethlow: '',
    ethhigh: '',
    ethlast: '',
    btclow: '',
    btchigh: '',
    btclast: ''
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
      router.push('/').catch(() => {})
      state.activePage = '/'
    },
    ACTIVE_PAGE (state, payload) {
      state.activePage = payload
    },
    GET_MARKET (state, payload) {
      state.market = payload
      state.xrplow = +payload.xrp.low
      state.xrphigh = +payload.xrp.high
      state.xrplast = +payload.xrp.last
      state.dogelow = +payload.doge.low
      state.dogehigh = +payload.doge.high
      state.dogelast = +payload.doge.last
      state.ltclow = +payload.ltc.low
      state.ltchigh = +payload.ltc.high
      state.ltclast = +payload.ltc.last
      state.ethlow = +payload.eth.low
      state.ethhigh = +payload.eth.high
      state.ethlast = +payload.eth.last
      state.btclow = +payload.btc.low
      state.btchigh = +payload.btc.high
      state.btclast = +payload.btc.last
    },
    GET_CONVERTED (state, payload) {
      state.converted = payload
      state.convertbtc = payload[1].converted_last.btc
      state.converteth = payload[3].converted_last.btc
      state.convertltc = payload[25].converted_last.btc
      state.convertdoge = payload[11].converted_last.btc
      state.convertxrp = payload[9].converted_last.btc
    },
    ISLOGIN (state) {
      state.isLogin = true
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
          Swal.fire({
            title: `${response.data.message}`,
            timer: 1000,
            showClass: { popup: 'animate__animated animate__fadeInDown' },
            hideClass: { popup: 'animate__animated animate__fadeOutUp' }
          })
          // Vue.$toast.open({
          //   message: `ERROR.., ${response.data.message}`,
          //   position: 'top-right',
          //   type: 'error',
          //   duration: 7777
          // })
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
    },
    getMarket ({ commit }) {
      Vue.$toast.open({
        message: 'please wait.. fetching data',
        position: 'top-right',
        type: 'success',
        duration: 0
      })
      api.get('/market')
        .then(({ data }) => {
          commit('GET_MARKET', data)
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
    getConverted ({ commit }) {
      Vue.$toast.open({
        message: 'please wait.. ',
        position: 'top-right',
        type: 'success',
        duration: 0
      })
      axios({
        method: 'GET',
        url: 'https://coingecko.p.rapidapi.com/exchanges/binance',
        headers: {
          'x-rapidapi-key': process.env.VUE_APP_KEY,
          // 'x-rapidapi-key': '5bb30cd650msh316e5d63598dcc2p153a72jsn925a7dc1dda7',
          'x-rapidapi-host': 'coingecko.p.rapidapi.com'
        }
      })
        .then(({ data }) => {
          commit('GET_CONVERTED', data.tickers)
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
    async signalBtc ({ commit }) {
      Vue.$toast.open({
        message: 'please wait.. fetching Signal',
        position: 'top-right',
        type: 'success',
        duration: 0
      })
      const btc = await api.get('/bestbtc')
      // .then(({ btc }) => {
      if (await btc.data.btc === 'buy') {
        Swal.fire({
          title: `BTC signal: ${btc.data.btc}`,
          text: 'Order you lambo',
          imageUrl: 'https://carwallpaperscar.files.wordpress.com/2020/02/lam_aventador_lp700-4_roadster_2014_16_2560x1600.jpg?w=1024',
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'image'
        })
      } else {
        Swal.fire({
          title: `BTC signal: ${btc.data.btc}`,
          text: 'Order you ferrari',
          imageUrl: 'https://cdn1-production-images-kly.akamaized.net/AZze9KLVuKV0JTdtC4Owh_f7yR0=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2820664/original/096463900_1559315929-Ferrari_hybrid.jpg',
          imageWidth: 800,
          imageHeight: 400,
          imageAlt: 'image'
        })
      }
      await Vue.$toast.clear()
      // })
    }
  },
  modules: {
  }
})
