import Vue from 'vue'
import Vuex from 'vuex'
import Swal from 'sweetalert2'
import axios from '../api/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    profilePic: ''
  },
  mutations: {
    CHANGE_LOGIN (state, status) {
      state.isLoggedIn = status
    },
    FETCH_PROFILE_PIC (state, picUrl) {
      state.profilePic = picUrl
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
    }
  },
  modules: {
  }
})
