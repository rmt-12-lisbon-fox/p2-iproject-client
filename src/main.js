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
    "502275237324-nianjvdr3ek1t1rtdvmof60tubv3o1uv.apps.googleusercontent.com"
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
