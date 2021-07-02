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
    btclast: '',
    signalBtc: '',
    signalEth: '',
    signalLtc: '',
    signalDoge: '',
    signalXrp: '',
    portofolio: '',
    siporto: ''
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
    },
    SIGNAL_BTC (state, payload) {
      state.signalBtc = payload
    },
    SIGNAL_ETH (state, payload) {
      state.signalEth = payload
    },
    SIGNAL_LTC (state, payload) {
      state.signalLtc = payload
    },
    SIGNAL_DOGE (state, payload) {
      state.signalDoge = payload
    },
    SIGNAL_XRP (state, payload) {
      state.signalXrp = payload
    },
    ADD_PORTO (state, payload) {
      state.portofolio = payload
    },
    SIPORTO (state, payload) {
      state.siporto = payload
      // console.log(state.siporto)
    }
  },
  actions: {
    addPorto (context, payload) {
      api.post('/portofolio', payload, {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('ADD_PORTO', data)
          context.dispatch('siporto')
        })
        .catch(({ response }) => {
          Swal.fire({
            title: 'sorry, input not valid',
            timer: 1000,
            showClass: { popup: 'animate__animated animate__fadeInDown' },
            hideClass: { popup: 'animate__animated animate__fadeOutUp' }
          })
        })
        .finally(_ => { setTimeout(_ => { Vue.$toast.clear() }, 2177) })
    },
    siporto (context) {
      api.get('/portofolio', { headers: { access_token: localStorage.access_token } })
        .then(({ data }) => {
          context.commit('SIPORTO', data)
        })
    },
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
    getBtc (context) {
      api.get('/bestbtc', { headers: { access_token: localStorage.access_token } })
        .then(btc => {
          context.commit('SIGNAL_BTC', btc.data.btc)
        })
    },
    getEth (context) {
      api.get('/besteth', { headers: { access_token: localStorage.access_token } })
        .then(eth => {
          context.commit('SIGNAL_ETH', eth.data.eth)
        })
    },
    getLtc (context) {
      api.get('/bestltc', { headers: { access_token: localStorage.access_token } })
        .then(ltc => {
          context.commit('SIGNAL_LTC', ltc.data.ltc)
        })
    },
    getDoge (context) {
      api.get('/bestdoge', { headers: { access_token: localStorage.access_token } })
        .then(doge => {
          context.commit('SIGNAL_DOGE', doge.data.doge)
        })
    },
    getXrp (context) {
      api.get('/bestxrp', { headers: { access_token: localStorage.access_token } })
        .then(xrp => {
          context.commit('SIGNAL_XRP', xrp.data.xrp)
        })
    },
    async signalBtc (context) {
      if (localStorage.access_token) {
        Vue.$toast.open({
          message: 'please wait.. fetching Signal',
          position: 'top-right',
          type: 'success',
          duration: 0
        })
        const btc = await api.get('/bestbtc', {
          headers: {
            access_token: localStorage.access_token
          }
        })
        // await context.commit('SIGNAL_BTC', btc.data.btc)
        // .then(({ btc }) => {
        if (await btc.data.btc === 'buy') {
          Swal.fire({
            title: `BTC signal: ${btc.data.btc}`,
            text: 'Order your lambo',
            imageUrl: 'https://carwallpaperscar.files.wordpress.com/2020/02/lam_aventador_lp700-4_roadster_2014_16_2560x1600.jpg?w=1024',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'image',
            showClass: { popup: 'animate__animated animate__fadeInDown' }
          })
        } else {
          Swal.fire({
            title: `BTC signal: ${btc.data.btc}`,
            text: 'Order your ferrari',
            imageUrl: 'https://cdn1-production-images-kly.akamaized.net/AZze9KLVuKV0JTdtC4Owh_f7yR0=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2820664/original/096463900_1559315929-Ferrari_hybrid.jpg',
            imageWidth: 800,
            imageHeight: 400,
            imageAlt: 'image',
            showClass: { popup: 'animate__animated animate__fadeInDown' }
          })
        }
        await Vue.$toast.clear()
        // })
      } else {
        Vue.$toast.open({
          message: 'please login first.., to access this signal',
          position: 'top-right',
          type: 'success',
          duration: 0
        })
      }
    },
    async signalEth () {
      if (localStorage.access_token) {
        Vue.$toast.open({
          message: 'please wait.. fetching Signal',
          position: 'top-right',
          type: 'success',
          duration: 0
        })
        const eth = await api.get('/besteth', {
          headers: {
            access_token: localStorage.access_token
          }
        })
        // .then(({ eth }) => {
        if (await eth.data.eth === 'buy') {
          Swal.fire({
            title: `ETH signal: ${eth.data.eth}`,
            text: 'Order your yacht',
            imageUrl: 'https://static2.yachtico.com/sites/default/files/imagecache/500-375/boat_pic/1/luxury_yachts-technema_95-5-2006-164356-picture-001.jpg',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'image',
            showClass: { popup: 'animate__animated animate__backInLeft' }
          })
        } else {
          Swal.fire({
            title: `ETH signal: ${eth.data.eth}`,
            text: 'order your private jet',
            imageUrl: 'https://www.bankrate.com/2017/07/20155935/sky-high-the-cost-of-a-private-jet.jpg?auto=webp&optimize=high&crop=16:9',
            imageWidth: 800,
            imageHeight: 400,
            imageAlt: 'image',
            showClass: { popup: 'animate__animated animate__backInLeft' }
          })
        }
        await Vue.$toast.clear()
        // })
      } else {
        Vue.$toast.open({
          message: 'please login first.., to access this signal',
          position: 'top-right',
          type: 'success',
          duration: 0
        })
      }
    },
    async signalLtc () {
      if (localStorage.access_token) {
        Vue.$toast.open({
          message: 'please wait.. fetching Signal',
          position: 'top-right',
          type: 'success',
          duration: 0
        })
        const ltc = await api.get('/bestltc', {
          headers: {
            access_token: localStorage.access_token
          }
        })
        // .then(({ ltc }) => {
        if (await ltc.data.ltc === 'buy') {
          Swal.fire({
            title: `LTC signal: ${ltc.data.ltc}`,
            text: 'Order your villa',
            imageUrl: 'https://ik.imagekit.io/tvlk/image/imageResource/2019/06/30/1561913398748-1dcbb06ae2f0224cbb4f0235f74934d3.jpeg?tr=q-75,w-439,h-294',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'image',
            showClass: { popup: 'animate__animated animate__fadeInDown' }
          })
        } else {
          Swal.fire({
            title: `LTC signal: ${ltc.data.ltc}`,
            text: 'order your private helicopter',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4RBNXpNtBBidG5iHHbobCfZhySQ5a1z331w&usqp=CAU',
            imageWidth: 800,
            imageHeight: 400,
            imageAlt: 'image',
            showClass: { popup: 'animate__animated animate__fadeInDown' }
          })
        }
        await Vue.$toast.clear()
        // })
      } else {
        Vue.$toast.open({
          message: 'please login first.., to access this signal',
          position: 'top-right',
          type: 'success',
          duration: 0
        })
      }
    },
    async signalDoge () {
      if (localStorage.access_token) {
        Vue.$toast.open({
          message: 'please wait.. fetching Signal',
          position: 'top-right',
          type: 'success',
          duration: 0
        })
        const doge = await api.get('/bestdoge', {
          headers: {
            access_token: localStorage.access_token
          }
        })
        // .then(({ doge }) => {
        if (await doge.data.doge === 'buy') {
          Swal.fire({
            title: `DOGE signal: ${doge.data.doge}`,
            text: 'Order your yacht',
            imageUrl: 'https://static2.yachtico.com/sites/default/files/imagecache/500-375/boat_pic/1/luxury_yachts-technema_95-5-2006-164356-picture-001.jpg',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'image',
            showClass: { popup: 'animate__animated animate__backInRight' }
          })
        } else {
          Swal.fire({
            title: `DOGE signal: ${doge.data.doge}`,
            text: 'order your private jet',
            imageUrl: 'https://www.bankrate.com/2017/07/20155935/sky-high-the-cost-of-a-private-jet.jpg?auto=webp&optimize=high&crop=16:9',
            imageWidth: 800,
            imageHeight: 400,
            imageAlt: 'image',
            showClass: { popup: 'animate__animated animate__backInRight' }
          })
        }
        await Vue.$toast.clear()
        // })
      } else {
        Vue.$toast.open({
          message: 'please login first.., to access this signal',
          position: 'top-right',
          type: 'success',
          duration: 0
        })
      }
    },
    async signalXrp () {
      if (localStorage.access_token) {
        Vue.$toast.open({
          message: 'please wait.. fetching Signal',
          position: 'top-right',
          type: 'success',
          duration: 0
        })
        const xrp = await api.get('/bestxrp', {
          headers: {
            access_token: localStorage.access_token
          }
        })
        // .then(({ xrp }) => {
        if (await xrp.data.xrp === 'buy') {
          Swal.fire({
            title: `XRP signal: ${xrp.data.xrp}`,
            text: 'Order your lambo',
            imageUrl: 'https://carwallpaperscar.files.wordpress.com/2020/02/lam_aventador_lp700-4_roadster_2014_16_2560x1600.jpg?w=1024',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'image',
            showClass: { popup: 'animate__animated animate__fadeInDown' }
          })
        } else {
          Swal.fire({
            title: `XRP signal: ${xrp.data.xrp}`,
            text: 'Order your ferrari',
            imageUrl: 'https://cdn1-production-images-kly.akamaized.net/AZze9KLVuKV0JTdtC4Owh_f7yR0=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2820664/original/096463900_1559315929-Ferrari_hybrid.jpg',
            imageWidth: 800,
            imageHeight: 400,
            imageAlt: 'image',
            showClass: { popup: 'animate__animated animate__fadeInDown' }
          })
        }
        await Vue.$toast.clear()
        // })
      } else {
        Vue.$toast.open({
          message: 'please login first.., to access this signal',
          position: 'top-right',
          type: 'success',
          duration: 0
        })
      }
    }
  },
  modules: {
  }
})
