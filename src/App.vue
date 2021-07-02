<template>
  <div id="app">
      <Navbar/>
    <router-view/>

    <div class="footer">
          <!-- <HFooter/> -->
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import HFooter from 'vue-hacktiv8-footer'
export default {
  name : 'App',
  components : { Navbar, HFooter },
  created() {
    if (localStorage.access_token) {
      this.$store.commit('SET_IS_LOGGED_IN', true)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.footer {
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
}

#nav {
  padding: 30px;
  color: #1a1a1b;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
