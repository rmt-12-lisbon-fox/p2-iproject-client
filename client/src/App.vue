<template>
  <div id="app">
    <nav-bar/>
    <router-view/>
    <HFooter class="fixed-bottom"/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import HFooter from 'vue-hacktiv8-footer'
export default {
  name: 'app',
  components: { NavBar, HFooter },
  created () {
    if (localStorage.access_token) {
      this.$store.commit('LOGIN_FLAG', true)
    }
  }
}
</script>
