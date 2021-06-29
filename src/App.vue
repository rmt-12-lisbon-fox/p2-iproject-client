<template>
  <div>
    <NavBar></NavBar>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "./views/NavBar.vue";
import Footer from "./views/Footer.vue";
export default {
  name: "App",
  components: { NavBar, Footer },
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
  },
  created() {
    if (localStorage.access_token) {
      this.dataTamplate();
      this.dataBlog();
      this.isLogin();
    }
  },
};
</script>

<style>
</style>
