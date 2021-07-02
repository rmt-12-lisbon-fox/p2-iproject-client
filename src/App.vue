<template>
  <div id="app">
    <div id="nav">
      <Navbar />
    </div>
    <router-view/>
    <div id="foot">
      <HFooter v-if="activePage !== '/login'"/>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import HFooter from 'vue-hacktiv8-footer'
import { mapState } from 'vuex'
export default {
  name: 'App',
  components: { Navbar, HFooter },
  created () {
    if (localStorage.access_token) {
      this.$store.commit('ISLOGIN')
    }
  },
  computed: {
    ...mapState(['activePage'])
  }

}
</script>

<style>
