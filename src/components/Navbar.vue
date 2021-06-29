<template>
  <section>
    <nav class="navbar fixed-top navbar-dark bg-dark pt-3 pb-3">
  <div class="container-fluid">
    <h2 class="text-white h2">Smart Investment</h2>
    <div class="d-flex justify-content-around col-sm-4">
    <a class="navbar-brand h2" >Market</a>
    <a class="navbar-brand h2" >Signal</a>
    <a class="navbar-brand h2" @click.prevent="toLogin">Sign In</a>
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <div class="d-flex justify-content-end">
        <a class="nav-link active pointer" >Portofolio</a>
        </div>
        <div class="d-flex justify-content-end">
        <a @click="logout" class="nav-link active pointer" >Sign Out</a>
        </div>
      </div>
    </div>
  </div>
</nav>
  </section>
</template>

<script>
// import router from '../router'
export default {
  name: 'Navbar',
  methods: {
    toLogin () {
      this.$router.push('/login').catch(() => {})
    },
    logout () {
      localStorage.clear()
      this.$router.push('/').catch(() => {})
    }
  }

}
</script>

<style>
.h2{
  backgorund-color : black;
  text-color: white;
cursor: pointer
}
.h2:hover{
  backgorund-color : blue;
  text-color: blue;
cursor: pointer
}
.pointer{
  cursor: pointer;
}
</style>
