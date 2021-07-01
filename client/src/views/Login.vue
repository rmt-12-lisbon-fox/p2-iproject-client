<template>
  <div class="container-fluid">
    <div class="card col-4 mx-auto my-5">
      <img
        class="card-img-top"
        src="../assets/login-pic.jpg"
        alt="Card image cap"
      />
      <div class="card-body rounded bg-light">
        <h5 class="card-title">Login or create an account to continue</h5>

        <form class="col-12" @submit.prevent="login">
          <div class="form-group m-4">
            <input
              id="email"
              type="email"
              class="form-control w-75 mx-auto"
              placeholder="input your email"
              v-model="email"
            />
          </div>
          <div class="form-group m-4">
            <input
              type="password"
              class="form-control w-75 mx-auto"
              placeholder="input your password"
              v-model="password"
            />
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-info text-white">Login</button>
          </div>
        </form>
      </div>
      <div class="card-footer">
        Don't have an account yet?
        <a @click="toRegisterPage" href="">Sign Up</a>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    toRegisterPage() {
      this.$router.push("/register");
    },
    login() {
      let payload = {
        email: this.email,
        password: this.password,
      };
      this.$store
        .dispatch("login", payload)
        .then((result) => {
          localStorage.setItem("access_token", result.data.access_token);
          this.$router.push("/");
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Welcome",
            showConfirmButton: false,
            timer: 1500,
          });
          this.$store.commit("LOGIN");
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response.data.message,
          });
        });
    },
  },
};
</script>

<style>
</style>
