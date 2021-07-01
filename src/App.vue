<template>
<div>
    <Loader v-if='loading'/>
    <Navbar v-if='!login'/>
    <!-- <HomepageBanner v-if='isLoggedIn'/> -->
    <router-view/>
    <HFooter></HFooter>
  </div>
</template>

<script>
import Navbar from '@/components/Nav.vue'
import Loader from '@/components/Loader.vue'
import router from './router'
import HFooter from 'vue-hacktiv8-footer'

export default {
  name: 'App',
  components: {
    Navbar,
    HFooter,
    Loader
  },
  computed: {
    loading() {
      return this.$store.state.loading
    },
    isLoggedIn () {
      return this.$store.state.isLoggedIn
    },
    login () {
      return this.$store.state.login
    },
    verify() {
      return this.$store.state.verify
    }
  },
  created () {
    // console.log('MASUKKKKKKKK VUE')
    if (localStorage.accessToken) {
      this.$store.commit('ISLOGGEDIN', true)
      this.$store.commit('POSTLOGINDETAILS')
    } else if (!localStorage.accessToken && this.verify == false) {
      this.$store.commit('ISLOGGEDIN', false)
      // router.push({ path: '/login' })
    } else {
      this.$store.commit('ISLOGGEDIN', false)      
    }
    this.$store.dispatch('fetchInvestors')
  }

}
</script>

<style>

</style>
