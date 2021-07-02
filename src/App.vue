<template>
  <div>
    <NavBar></NavBar>
    <HFooter></HFooter>
  </div>
</template>

<script>
import NavBar from "./views/NavBar.vue";
import HFooter from "vue-hacktiv8-footer";

export default {
  name: "App",
  components: { NavBar, HFooter },
  methods: {
    dataTamplate() {
      this.$store.dispatch("dataTamplate");
    },
    dataBlog() {
      this.$store.dispatch("dataBlog");
    },
    isLogin() {
      const username = localStorage.username;
      this.$store.commit("ISLOGIN", username);
    },
    dataInvite() {
      this.$store.dispatch("dataInvite");
    },
    music() {
      this.$store.dispatch("music");
    },
    dataUserLogin() {
      this.$store.dispatch("dataUserLogin", localStorage.idLogin);
    },
  },
  created() {
    if (localStorage.access_token) {
      this.dataTamplate();
      this.dataBlog();
      this.isLogin();
      this.dataInvite();
      this.music();
      this.dataUserLogin();
    }
  },
};
</script>

<style>
</style>
