import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { BootstrapVue, BootstrapVueIcons,BIcon, BIconBookmarkStar, BIconBookmarkStarFill } from 'bootstrap-vue'
import VueSpeech from 'vue-speech-recognition'

Vue.use(BootstrapVueIcons)
Vue.use(BootstrapVue)
Vue.component('BIcon', BIcon)
Vue.component('BIconBookmarkStar', BIconBookmarkStar)
Vue.component('BIconBookmarkStarFill', BIconBookmarkStarFill)
Vue.use(VueSpeech)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
