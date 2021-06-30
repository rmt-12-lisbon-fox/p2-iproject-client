<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Hangout Gamers</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/" class="nav-link active" v-if="isLogin" aria-current="page" href="#">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link active" v-if="!isLogin" href='#'>Login</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/register" class="nav-link active" v-if="!isLogin" href='#'>Register</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/watch" class="nav-link active" v-if="isLogin" href='#'>Watch</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/heartstone" class="nav-link active" v-if="isLogin" href='#'>Heartstone Card</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/chat" class="nav-link active" v-if="isLogin" href='#'>Chat Room</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/news" class="nav-link active" v-if="isLogin" href='#'>News</router-link>
        </li>
      </ul>
      <form class="d-flex">
        <button class="btn btn-outline-success" v-if="isLogin"  @click.prevent="logoutHandler">Logout</button>
      </form>
    </div>
  </div>
</nav>
</template>

<script>
import swal from 'sweetalert2'
export default {
  name: 'NavBar',
  methods: {
    logoutHandler () {
      this.$store.commit('LOGIN_FLAG', false)
      swal.fire({
        title: 'Yakin',
        text: 'Kamu Mau Keluar?',
        icon: 'warning',
        confirmButtonText: 'ok'
      })
      localStorage.clear()
      this.$router.push('/login')
    }
  },
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    }
  }
}
</script>

<style>

</style>
