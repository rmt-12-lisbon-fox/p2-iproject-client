<template>
  <div id="app">
    <router-view></router-view>
    <HFooter class="footer"></HFooter>
  </div>
</template>

<script>

import HFooter from 'vue-hacktiv8-footer'

export default {
  name: 'App',
  components: { HFooter }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #201111;
  background-repeat: no-repeat;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
