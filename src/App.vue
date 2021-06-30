<template>
  <div id="app">
    <Navbar></Navbar>
    <router-link to="/"></router-link>
    <router-link to="/about"></router-link>
    <router-link to="/register"></router-link>
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  components: { Navbar }
};
</script>
