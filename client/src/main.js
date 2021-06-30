import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import VueSocketIOExt from 'vue-socket.io-extended'
import { io } from 'socket.io-client'

Vue.config.productionTip = false
const socket = io('http://localhost:3000')

Vue.use(VueSocketIOExt, socket, { store })
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
