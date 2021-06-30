<template>
  <!-- Navbar -->
  <section id="navbar">
    <!--  v-show="isLoggedIn" -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <img
          class="logo btn"
          src="../assets/logo-e-tools.png"
          style="width: 100px;"
          alt=""
        />
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ms-auto fw-bold">
            <a
              v-if="user.fullName"
              class="nav-link btn btn-block border btn-light login-btn ms form-control"
              aria-current="page"
              href="#"
              >Hello, {{ user.fullName }}
            </a>
            <a
              class="nav-link"
              aria-current="page"
              @click.prevent="toHomePage"
              href=""
              >Home</a
            >
            <!-- <a class="nav-link" @click="toCompanyPage" href="">Company</a> -->
            <a class="nav-link" @click.prevent="toGamesPage" href="">Games</a>
            <!-- <a class="nav-link" href="">Profile</a> -->
            <a
              class="nav-link"
              v-if="user.fullName"
              @click.prevent="logout"
              href=""
              >Logout</a
            >
            <a
              class="nav-link"
              v-if="!user.fullName"
              @click.prevent="toLogin"
              href=""
              >Login</a
            >
          </div>
        </div>
      </div>
    </nav>
  </section>
  <!-- Akhir Navbar -->
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Navbar",
  computed: mapState(["isLoggedIn", "user"]),
  methods: {
    toHomePage() {
      this.$store.dispatch("toHomePage");
    },
    toGamesPage() {
      this.$store.dispatch("toGamesPage");
    },
    logout() {
      this.$store.dispatch("logout");
    },
    toLogin() {
      this.$router.push({ path: "/login" }).catch(() => {});
    }
  }
};
</script>

<style></style>
