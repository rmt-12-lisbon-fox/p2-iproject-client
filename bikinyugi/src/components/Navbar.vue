<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/decks">Build a Deck</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/wiki">Wiki</router-link>
          </li>
        </ul>
        <ul class="navbar-nav me-0 mb-2 mb-lg-0 ms-0">
          <li class="nav-item" v-if="!isLogin">
            <router-link class="nav-link" to="/login">Log In</router-link>
          </li>
          <li class="nav-item" v-if="!isLogin">
            <router-link class="nav-link" to="/register">Register</router-link>
          </li>
          <li class="nav-item dropdown" v-if="isLogin">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Hello, {{username}}
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><router-link class="dropdown-item" to="/profile">Profile</router-link></li>
            <li><hr class="dropdown-divider"></li>
            <li><a href="" class="dropdown-item" @click.prevent="logout">Log Out</a></li>
          </ul>
        </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search Wiki" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  },
  computed: {
    username () {
      return this.$store.state.username
    },
    isLogin () {
      return this.$store.state.isLogin
    }
  },
  created () {
  }
}
</script>

<style>
</style>
