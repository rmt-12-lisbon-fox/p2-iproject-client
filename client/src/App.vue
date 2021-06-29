<template>
  <div id="app">
    <nav-bar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'app',
  components: { NavBar, Footer }
}
</script>
