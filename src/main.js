import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import VueDisqus from 'vue-disqus'
import GoogleSignInButton from 'vue-google-signin-button-directive'
import VueToast from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'
import swal from 'sweetalert'
require('../assets/style.css')

Vue.config.productionTip = false

// Vue.use(VueDisqus, {
//   shortname: 'ryi'
// })

Vue.use(VueToast, {
  position: 'top'
})

new Vue({
  swal,
  GoogleSignInButton,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
