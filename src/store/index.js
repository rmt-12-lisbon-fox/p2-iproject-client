import Vue from 'vue'
import Vuex from 'vuex'
import backEndAPI from '../api/backEnd';
import router from '../router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false
  },
  mutations: {
    LOGIN (state) {
      state.isLogin = true;
    },
    LOGOUT (state) {
      state.isLogin = false;
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
        localStorage.setItem('access_token', result.data.acess_token);
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
    }
  },
  modules: {
  }
})
