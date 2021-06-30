<template>
  <div id="app">
    <div id="nav">
      <Navbar/>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'App',
  components: { Navbar },
  created () {
    if (localStorage.access_token) {
      this.$store.commit('ISLOGIN')
    }
  }

}
</script>

<style>
