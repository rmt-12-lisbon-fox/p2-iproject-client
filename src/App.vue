<template>
  <div id="app">
    <Navbar></Navbar>
    <router-link to="/"></router-link>
    <router-link to="/about"></router-link>
    <router-link to="/register"></router-link>
    <router-view />
    <HFooter class="d-flex fixed-bottom Width 100%"></HFooter>
  </div>
</template>

<script>
import HFooter from "vue-hacktiv8-footer";
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  components: { Navbar, HFooter }
};
</script>
