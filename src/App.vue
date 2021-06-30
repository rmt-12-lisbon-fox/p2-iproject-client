<template>
  <div id="app">
    <div id="nav">
      <Navbar v-if="isLoggedIn" />
    </div>
    <router-view/>
    <div class="footer fixed-bottom">
      <HFooter />
    </div>
  </div>
</template>

<script>
import HFooter from 'vue-hacktiv8-footer'
import Navbar from './components/Navbar.vue'
export default {
  name: 'App',
  components: {
    HFooter, Navbar
  },
  computed: {
    isLoggedIn () {
      return this.$store.state.isLoggedIn
    }
  },
  created () {
    if (localStorage.access_token) {
      this.$store.commit('SET_LOGGED_IN', true)
    }
  }
}
</script>
<style>
#app {
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  height: 100vh;
}

</style>
