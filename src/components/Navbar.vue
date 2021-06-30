<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <p class="navbar-brand">Healing</p>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      </ul>
      <span class="navbar-item">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="">My Community</router-link>
            </li>
            <li class="nav-item">
                <button class="btn btn-danger" @click.prevent="logout">Logout</button>
            </li>
        </ul>
      </span>
    </div>
  </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout () {
      this.$store.commit('LOGOUT', false)
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>
