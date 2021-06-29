<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/" class="nav-link active" aria-current="page" href="#">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link active" href='#'>Login</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/register" class="nav-link active" href='#'>Register</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/watch" class="nav-link active" href='#'>Watch</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/summary" class="nav-link active" href='#'>Match History</router-link>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</template>

<script>
export default {

}
</script>

<style>

</style>
