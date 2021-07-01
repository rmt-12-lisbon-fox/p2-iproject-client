import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Toasted from 'vue-toasted';

// import Popper from 'popper.js'
// Popper.Defaults.modifiers.computeStyle.gpuAcceleration = false
// import 'bootstrap-icons'

Vue.config.productionTip = false
Vue.use(Toasted, {duration: 2000})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
