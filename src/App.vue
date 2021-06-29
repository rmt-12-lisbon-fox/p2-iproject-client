<template>
  <div id="app">
    <nav-bar/>
    <router-view/>

    <!-- <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener">router</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul> -->

    <HFooter id="footer"/>
  </div>
</template>

<script>
import HFooter from 'vue-hacktiv8-footer'
import NavBar from './components/NavBar.vue'

export default {
  components: {
    HFooter, NavBar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600&display=swap');

#app {
  font-family: 'Baloo 2', cursive, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f5f5f5 !important;
}

body {
  background-image: linear-gradient(#09244a, #124791);
  min-height: 1080px;
  /* height: 100%; */
}

.nav {
  font-size: 1.4em;
  padding: 30px;
  font-weight: 400;
  color: #ffffff;

}

.nav a {
  font-weight: 400;
  color: #ffffff;
  opacity: 0.75;

}

.nav a.router-link-exact-active {
  font-weight: 600;
  color: #ffffff;
  opacity: 1;
}

#footer {
  position: absolute;
  display: flex;
  bottom: 0;
  width: 100%;
  /* height: 2.5rem;   */
  /* margin-top: 5%; */
}
</style>
