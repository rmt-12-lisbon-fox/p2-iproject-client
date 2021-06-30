import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    dataTamplate: '',
    dataBlog: '',
    dataTamplateById: '',
    detaiBlog: '',
    music: '',
    username: '',
    dataInvite: '',
    dataViewsInvite: '',
    generatedLink: ''
  },
  mutations: {
    ISLOGIN(state, payload) {
      state.username = payload
      state.isLogin = true
    },
    LOGOUT(state) {
      localStorage.clear()
      state.username = ''
      state.isLogin = false
    },
    DATATAMPLATE(state, payload) {
      state.dataTamplate = payload
    },
    DATABLOG(state, payload) {
      state.dataBlog = payload
    },
    DATATAMPLATEBYID(state, payload) {
      state.dataTamplateById = payload
    },
    DETAILBLOG(state, payload) {
      state.detaiBlog = payload
    },
    MUSIC(state, payload) {
      state.music = payload
    },
    DATAINVITE(state, payload) {
      state.dataInvite = payload
    },
    VIEWSINVITE(state, payload) {
      state.dataViewsInvite = payload
    },
    GENERATEDLINK(state, payload) {
      state.generatedLink = payload
    }
  },
  actions: {
    dataTamplate(context, payload) {
      axios({
        url: `/tamplates`,
        method: `get`,
      })
        .then(data => {
          context.commit("DATATAMPLATE", data.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    dataBlog(context, payload) {
      axios({
        url: `/blog`,
        method: `get`,
      })
        .then(data => {
          context.commit("DATABLOG", data.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    views(context, payload) {
      axios({
        url: `/tamplates/${payload}`,
        method: 'get'
      })
        .then(data => {
          context.commit("DATATAMPLATEBYID", data.data)
          localStorage.setItem('id', data.data.id)
          context.dispatch('music')
          router.push(`/detailinvite/${payload}`)
        })
        .catch(err => {
          console.log(err)
        })
    },
    detail(context, payload) {
      axios({
        url: `/blog/${payload}`,
        method: `get`,
      })
        .then(data => {
          context.commit("DETAILBLOG", data.data)
          localStorage.setItem('id_blog', payload)
          router.push(`/detail/${payload}`)
        })
        .catch(err => {
          console.log(err)
        })
    },
    music(context) {
      axios({
        url: '/music',
        method: 'get',
      })
        .then(data => {
          context.commit("MUSIC", data.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    register(context, payload) {
      console.log(payload);
      const bodyFormData = new FormData();
      bodyFormData.append("fullName", payload.fullName);
      bodyFormData.append("email", payload.email);
      bodyFormData.append("password", payload.password);
      bodyFormData.append("phoneNumber", payload.phoneNumber);
      bodyFormData.append("photo", payload.photo);
      axios({
        url: '/outh/register',
        method: 'post',
        data: bodyFormData,
      })
        .then(data => {
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    save(context, payload) {
      console.log(payload);
      axios({
        url: '/invites',
        method: 'post',
        data: { ...payload },
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(data => {
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    login(context, payload) {
      axios({
        url: '/outh/login',
        method: 'post',
        data: { ...payload }
      })
        .then(data => {
          localStorage.setItem('access_token', data.data.access_token)
          localStorage.setItem('username', data.data.username)
          context.commit('ISLOGIN', data.data.username)
          context.dispatch('dataTamplate')
          context.dispatch('dataBlog')
          context.dispatch('dataInvite')
          router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    },
    onSuccess(context, googleUser) {
      const idToken = googleUser.getAuthResponse().id_token
      axios({
        url: '/customers/googleLogin',
        method: 'post',
        data: {
          id_token: idToken
        }
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          localStorage.setItem('username', data.username)
          localStorage.setItem('id', data.id)
          context.dispatch('dataTamplate')
          context.dispatch('dataBlog')
          context.dispatch('dataInvite')
          router.push({ path: '/' })
          context.commit('ISLOGIN')
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Login scceess',
            showConfirmButton: false,
            timer: 2000
          })
        })
        .catch((err) => {
          console.log(err)
          Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: `${err.response.data.message}`,
            showConfirmButton: false,
            timer: 2000
          })
        })
    },
    dataInvite(context) {
      axios({
        url: '/invites',
        method: 'get',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then((data) => {
          context.commit('DATAINVITE', data.data.data)
        })
        .catch((err) => {
          console.log(err.response);
        })
    },
    viewsInvite(context, payload) {
      axios({
        url: `/invites/${payload}`,
        method: 'get',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then((data) => {
          console.log(data.data.data);
          router.push(`/viewsinvite/${payload}`)
          localStorage.setItem('idViewsInvite', payload)
          context.commit('VIEWSINVITE', data.data.data)
        })
        .catch((err) => {
          console.log(err.response);
        })
    },
    generateLink(context, payload) {
      console.log(payload, '>>>>>');
      axios({
        url: `/invites/generateLink`,
        method: 'post',
        data: { payload },
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(data => {
          context.commit("GENERATEDLINK", data.data)
        })
        .catch(err => {
          console.log(err);
        })
    }
  },
  modules: {
  }
})
