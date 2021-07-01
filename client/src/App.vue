<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view />
    <HFooter></HFooter>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import HFooter from "vue-hacktiv8-footer";

export default {
  name: "App",
  components: { NavBar, HFooter },
  methods: {
    onEnd({ lastSentence, transcription }) {
      // `lastSentence` is the last sentence before the pause
      // `transcription` is the full array of sentences
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
