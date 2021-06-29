<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-info p-3">
    <a class="navbar-brand text-white" href="#">Safe Travel</a>

    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a
            class="nav-link text-white"
            href="#"
            aria-disabled="true"
            @click="toLoginPage"
            >Login</a
          >
        </li>
        <li class="nav-item">
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
  },
};
</script>

<style>
</style>