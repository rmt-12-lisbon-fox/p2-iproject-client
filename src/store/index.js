import Vue from 'vue'
import Vuex from 'vuex'
import backEndAPI from '../api/backEnd';
import router from '../router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    isEdit: false,
    user: {}
  },
  mutations: {
    LOGIN (state) {
      state.isLogin = true;
    },
    LOGOUT (state) {
      state.isLogin = false;
    },
    EDIT_PROFILE (state) {
      state.isEdit = true;
    },
    NOT_EDIT_PROFILE (state) {
      state.isEdit = false
    },
    USER_INFO (state, data) {
      state.user = data;
    }
  },
  actions: {
    async register(context, data) {
      const formData = new FormData();

      let imageUrl = data.imageUrl;
      formData.append("imageUrl", imageUrl);

      let email = data.email;
      formData.append("email", email);

      let password = data.password;
      formData.append("password", password);

      let name = data.name
      formData.append("name", name);

      let phoneNumber = data.phoneNumber;
      formData.append("phoneNumber", phoneNumber);

      let address = data.address;
      formData.append("address", address);

      try {
        let result = await backEndAPI({
          url: '/register',
          method: "POST",
          headers: {
            'Content-Type' : 'multipart/form-data'
          },
          data: formData
        })
        Vue.swal({
          icon: 'success',
          title: 'Register is successfull'
        });
        router.push({ path: '/login' });
      } catch (err) {
        let stringError = err.response.data.message;
        Vue.swal({
            icon: 'error',
            title: 'Register was failed',
            text: stringError 
         });
      }
    },
    async login({ commit }, data) {
      try {
        let result = await backEndAPI({
          url: '/login',
          method: 'POST',
          data: {
            ...data
          }
        });
        localStorage.setItem('access_token', result.data.access_token);
        Vue.swal({
          icon: 'success',
          title: 'Login is successfull'
        });
        commit('LOGIN');
        router.push({ path: '/' });
      } catch (err){
        let stringError = err.response.data.message;
        Vue.swal({
            icon: 'error',
            title: 'Login was failed',
            text: stringError 
         });
      }
    },
    async getProfile({ commit }) {
      try {
        let result = await backEndAPI({
          url:'/users',
          method: 'GET',
          headers: {
            access_token: localStorage.access_token
          }
        });
        commit('USER_INFO', result.data);
      } catch (err) {
        let stringError = err.response.data.message;
        Vue.swal({
            icon: 'error',
            title: 'getUser was failed',
            text: stringError 
         });
      }
    },
    async updateProfile(context, data) {
      const formData = new FormData();

      let imageUrl = data.imageUrl;
      formData.append("imageUrl", imageUrl);

      let email = data.email;
      formData.append("email", email);

      let name = data.name
      formData.append("name", name);

      let phoneNumber = data.phoneNumber;
      formData.append("phoneNumber", phoneNumber);

      let address = data.address;
      formData.append("address", address);

      try {
        let result = await backEndAPI({
          url: '/users',
          method: 'PUT',
          headers: {
            access_token: localStorage.access_token,
            'Content-Type' : 'multipart/form-data'
          },
          data: formData
        })
        Vue.swal({
          icon: 'success',
          title: 'Update profile is successfull'
        });
        router.push({ path: '/profile' });
      } catch (err) {
        let stringError = err.response.data.message;
        Vue.swal({
            icon: 'error',
            title: 'Register was failed',
            text: stringError 
         });
      }
    }
  },
  modules: {
  }
})
