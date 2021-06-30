<template>
  <div id="app">
    <router-view/>
    <div class="footer fixed-bottom">
      <HFooter />
    </div>
  </div>
</template>

<script>
import HFooter from 'vue-hacktiv8-footer'
export default {
  name: 'App',
  components: {
    HFooter
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
