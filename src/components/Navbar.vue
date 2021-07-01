<template>
  <section>
    <nav class="navbar fixed-top navbar-dark pt-3 pb-3" style="background-color: #000000">
  <div class="container-fluid">
    <img class="pointer" @click="toHome" src="@/assets/logo2.jpg" style="height: 4.1rem" alt="smartinvestment">
    <!-- <h2 class="text-white h2">Smart Investment</h2> -->
    <div class="d-flex justify-content-around col-sm-4">
    <a class="navbar-brand h2" @click.prevent="toMarket">Market</a>
    <a class="navbar-brand h2" @click.prevent="toSignal">Signal</a>
    <a class="navbar-brand h2" v-if="!isLogin" @click.prevent="toLogin">Sign In</a>
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <div class="d-flex justify-content-end">
        <!-- <a class="nav-link active pointer" >Watchlist</a> -->
        </div>
        <div class="d-flex justify-content-end">
        <a @click="logout" v-if="isLogin" class="nav-link active pointer" >Sign Out</a>
        </div>
      </div>
    </div>
  </div>
</nav>
<!-- <div v-if="activePage === '/'">
<img style="width: 100%; height: auto;"
  src="@/assets/logo3.jpg"
  alt="background banner">
<img style="width: 100%; height: auto;"
  src="@/assets/logo3.jpg"
  alt="background banner">
</div> -->
  </section>
</template>

<script>
// import router from '../router'
import { mapState } from 'vuex'
export default {
  name: 'Navbar',
  methods: {
    toLogin () {
      this.$store.commit('ACTIVE_PAGE', '/login')
      this.$router.push('/login').catch(() => {})
    },
    logout () {
      this.$store.commit('LOGOUT')
    },
    toHome () {
      this.$store.commit('ACTIVE_PAGE', '/')
      this.$router.push('/').catch(() => {})
    },
    toMarket () {
      this.$store.commit('ACTIVE_PAGE', '/market')
      this.$router.push('/market').catch(() => {})
    },
    toSignal () {
      this.$store.commit('ACTIVE_PAGE', '/signal')
      this.$router.push('/signal').catch(() => {})
    }
  },
  computed: {
    ...mapState(['isLogin', 'userInfo', 'activePage'])
  },
  created () {
    if (localStorage.access_token) {
      this.$store.commit('ISLOGIN')
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
