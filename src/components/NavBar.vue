<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-transparent p-4 nav">
  <div class="container-fluid d-flex justify-conternt-evenly">
    <div class="d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center mx-3">
            <img src="../assets/logo.png" alt="" width="40px" height="40px" class="me-3"> 
            <p class="h3 m-0"><b>Aniplay</b></p>
        </div>
        

        <form class="d-flex mx-5">
            <input class="form-control form-control-sm mx-2" type="search" placeholder="Search anime title.." aria-label="Search">
            <button class="btn btn-light" type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
            </button>
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
        <!-- <li class="nav-item mx-2">
          <router-link class="nav-link" to='/'>Disabled</router-link>
        </li> -->
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style>

</style>