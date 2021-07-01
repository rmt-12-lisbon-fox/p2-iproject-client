<template>
  <div id="app">
    <navbar v-if="isLogin"></navbar>
    <router-view/>
    <HFooter></HFooter>
  </div>
</template>


<script>
import Navbar from './components/Navbar.vue'
import { mapState } from 'vuex'
import HFooter from 'vue-hacktiv8-footer'

export default {
  name: 'App',
  components: {
    Navbar,
    HFooter
  },
  created() {
    if (localStorage.access_token) {
      this.$store.commit('LOGIN');
    }
  },
  computed: mapState([
    'isLogin'
  ])
}
</script>


<style>
body {
  max-height: 100vh;
}
</style>
