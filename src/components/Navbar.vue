<template>
  <!-- navbar -->
    <nav
      class="navbar navbar-expand-lg navbar-light theme_nav shadow sticky-top p-3"
    >
      <div class="container-fluid">
        <a @click.prevent="toHomePage" class="navbar-brand text-white" href="#"> <i class="fas fa-running"></i> Go Exercise</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li v-if="isLoggedIn" class="nav-item">
              <a @click.prevent="logout"
                class="nav-link active text-white"
                aria-current="page"
                href="#"
                id="btn-logout"
                >Logout</a
              >
            </li>

            <li v-if="isLoggedIn" class="nav-item">
              <a @click.prevent=""
                class="nav-link active text-white"
                aria-current="page"
                href="#"
                id="btn-logout"
                >My Programs</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav> 
</template>

<script>
export default {
  name: 'Navbar',
  computed : {
    isLoggedIn () {
      return this.$store.state.isLoggedIn
    }
  },
  methods : {
    logout() {
      this.$store.dispatch('logout')
    },
    toHomePage() {
      this.$router.push('/').catch( () => {} )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
