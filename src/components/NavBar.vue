<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-transparent p-4 nav mb-4">
  <div class="container-fluid d-flex justify-conternt-evenly">
    <div class="d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center mx-3">
            <img src="../assets/logo.png" alt="" width="40px" height="40px" class="me-3"> 
            <p class="h3 m-0"><b>Aniplay</b></p>
        </div>
        

        <form class="d-flex mx-5 align-items-center" @submit.prevent="searchAnime">
            <input class="form-control col-6 mx-4" type="search" placeholder="Search anime title.." aria-label="Search" v-model="q">
            <!-- <button class='btn btn-sm' type="submit"> -->
                <span class="material-icons md-light" type="submit">search</span>
            <!-- </button> -->
        </form>
        
    </div>  

    <div class="me-3" >
      <ul class="navbar-nav mx-auto">
        <li class="nav-item mx-2">
          <router-link class="nav-link" to='/'>Home</router-link>
        </li>
        <li class="nav-item mx-2">
          <router-link class="nav-link" to='/about'>Link</router-link>
        </li>
        <li class="nav-item mx-2">
          <router-link class="nav-link" to='/detail'> Dropdown </router-link>
        </li>
        <li class="nav-item mx-2">
          <router-link class="nav-link" to='/search'>TestSearch</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
      return {
        q: ""
      }
    },
    methods: {
      searchAnime() {
        let payload = {q: this.q}
        // console.log(payload);
        this.$store.dispatch('searchAnime', payload)
      }
    }
}
</script>

<style>

</style>