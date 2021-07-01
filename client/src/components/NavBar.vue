<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-info p-3">
    <a @click.prevent="toHome" class="navbar-brand text-white text-left" href="#"
      >
      <img src="./navbar.jpg" width="30" height="30" class="d-inline-block align-top" alt="">
      Safe Travel</a
    >

    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" v-if="isLoggedIn === false">
          <a
            class="nav-link text-white"
            href="#"
            aria-disabled="true"
            @click="toLoginPage"
            >Login</a
          >
        </li>
        <li class="nav-item" v-if="isLoggedIn === true">
          <a
            class="nav-link text-white"
            href="#"
            aria-disabled="true"
            @click="toSavedPlacesPage"            
            >Saved places</a
          >
        </li>
        <li class="nav-item" v-if="isLoggedIn === true">
          <a
            @click="logout"
            class="nav-link text-white"
            href="#"
            aria-disabled="true"
            >Logout</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    toLoginPage() {
      this.$router.push("/login").catch(() => {});
    },
    logout() {
      localStorage.clear();
      this.$store.commit("LOGOUT");
      this.$router.push("/login");
    },
    toHome() {
      this.$router.push("/");
    },
    toSavedPlacesPage(){
      this.$router.push("/savedplaces");
    }
  },
  computed: {
    isLoggedIn(){
      return this.$store.state.isLoggedIn
    }
  }
    
  
};
</script>

<style>
</style>