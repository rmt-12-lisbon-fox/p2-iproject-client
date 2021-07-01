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
    isLoggedIn () {
      return this.$store.state.isLoggedIn
    },
    login () {
      return this.$store.state.login
    }
  },
  created () {
    if (localStorage.accessToken) {
      this.$store.commit('ISLOGGEDIN', true)
      this.$store.commit('POSTLOGINDETAILS')
      router.push({ path: '/' }).catch(() => {})
    } else {
      this.$store.commit('ISLOGGEDIN', false)
      router.push({ path: '/login' })
    }
    this.$store.dispatch('fetchInvestors')
  }

}
</script>

<style>

</style>
