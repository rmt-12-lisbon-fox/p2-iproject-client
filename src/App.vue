<template>
  <div id="app">
    <router-view/>
    <div class="hfooter footer">
      <HFooter></HFooter>
    </div>
  </div>
</template>

<script>
import HFooter from 'vue-hacktiv8-footer'
export default {
  components: {
    HFooter
  }
}
</script>

<style>


  .clickable {
    cursor: pointer;
  }

  body {
    height: 100%;
  }

  html {
   width: 100%;
   height: 100%;
  }

  .home, html {
    background-color: #fff;
  }

  .hfooter{
    position: fixed;
    left: 0;
    bottom: 5vh;
    width: 100%;
    z-index: 2;
    height: 5vh;
    /* background-color: blue; */
  }

</style>
