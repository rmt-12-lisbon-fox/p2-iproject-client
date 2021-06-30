<template>
  <div id="app">
    <navbar v-if="isLogin"></navbar>
    <router-view/>
  </div>
</template>


<script>
import Navbar from './components/Navbar.vue'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    Navbar
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

</style>
