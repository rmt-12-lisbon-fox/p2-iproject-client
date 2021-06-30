import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import GoogleSignInButton from 'vue-google-signin-button-directive'
import VueChatScroll from 'vue-chat-scroll'
import WebRTC from 'vue-webrtc'
import * as io from 'socket.io-client'

window.io = io


Vue.use(VueChatScroll)
Vue.use(WebRTC)

Vue.config.productionTip = false

new Vue({
  GoogleSignInButton,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
