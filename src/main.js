import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { LoaderPlugin } from "vue-google-login";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

Vue.config.productionTip = false;

Vue.use(VueSweetalert2);
Vue.use(LoaderPlugin, {
  client_id:
    "952203522976-6251l23ek5jbbkir8crb5jjsfbu69mta.apps.googleusercontent.com"
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
