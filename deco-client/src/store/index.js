import Vue from 'vue'
import Vuex from 'vuex'
import Swal from 'sweetalert2'
import axios from '../api/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    profilePic: '',
    messages: []
  },
  mutations: {
    CHANGE_LOGIN (state, status) {
      state.isLoggedIn = status
    },
    FETCH_PROFILE_PIC (state, picUrl) {
      state.profilePic = picUrl
    },
    ADD_MESSAGES (state, message) {
      state.messages.push(message)
    },
    CLEAR_MESSAGES (state) {
      state.messages = []
    }
  },
  actions: {
    googleLogin (context, idToken) {
      axios
        .post('/loginGoogle',
          {
            id_token: idToken
          }
        )
        .then(response => {
          localStorage.setItem('access_token', response.data.access_token)
          context.commit('FETCH_PROFILE_PIC', response.data.profilePic)
          Swal.fire('You have successfully sign in', '', 'success')
          router.push('/')
          context.commit('CHANGE_LOGIN', true)
        })
        .catch(err => {
          console.log(err)
          Swal.fire('Something went wrong!', 'Error login with google', 'error')
        })
    },
    googleAuthFail (error) {
      Swal.fire('Something went wrong!', error.response, 'error')
    },
    fetchChatbotReply (context, message) {
      const data = {
        sender: 'client',
        message
      }
      axios
        .post('/talkToChatbot', data, {
          headers: {
            access_token: localStorage.access_token
          }
        })
        .then(response => {
          response.data.reply.forEach(el => {
            context.commit('ADD_MESSAGES', { message: el, source: 'chatbot' })
          })
        })
        .catch(err => {
          Swal.fire(err.response.data.message, '', 'error')
        })
    },
    sendUserMessage (context, message) {
      context.commit('ADD_MESSAGES', { message })
      context.dispatch('fetchChatbotReply', message)
    },
    logoutEvent (context) {
      localStorage.clear()
      context.commit('CLEAR_MESSAGES')
      router.push('/login')
      Swal.fire('You have successfully logout', '', 'success')
    }
  },
  modules: {
  }
})
