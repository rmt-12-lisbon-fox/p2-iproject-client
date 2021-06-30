<template>
  <div class="container-fluid">
    <div class="card col-4 mx-auto my-5">
      <img
        class="card-img-top"
        src="../assets/login-pic.jpg"
        alt="Card image cap"
      />
      <div class="card-body rounded bg-light">
        <h5 class="card-title">Sign up a new account</h5>

        <form class="col-12" @submit.prevent="register">
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
            <button type="submit" class="btn btn-info text-white">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    register() {
      let payload = {
        email: this.email,
        password: this.password,
      };
      
      this.$store
        .dispatch("register", payload)
        .then((result) => {
          this.$router.push("/login");
          Swal.fire({
            position: "top",
            icon: "success",
            title: "your registration is success, you can login now!",
            showConfirmButton: false,
            timer: 1500,
          });
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
