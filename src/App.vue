<template>
<div>
    <Navbar v-if='!login'/>
    <!-- <HomepageBanner v-if='isLoggedIn'/> -->
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Nav.vue'
import router from './router'

export default {
  name: 'App',
  components: {
    Navbar
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn
    },
    login() {
      return this.$store.state.login
    }
  },
  created() {
  }
}
</script>

<style>

</style>
