<template>
  <div class="mx-auto container d-flex align-items-center justify-content-center" style="overflow-y: hidden;">
    <div class="row register rounded bg-light p-5 shadow-lg" id="register">
            <div class="mb-4">
                <h1 style="text-align: center;">Registration</h1>
            </div>
            <h3 class="login-text mb-1  text-center"> Sign Up </h3>
            <form @submit.prevent="register">
                <div class="form-group mt-4">
                    <label for="firstName">First Name</label>
                    <input type="text" name="firstName" id="firstName" class="form-control" v-model="firstName">
                </div>
                <div class="form-group mt-4">
                    <label for="lastName">Last Name</label>
                    <input type="text" name="lastName" id="lastName" class="form-control" v-model="lastName">
                </div>
                <div class="form-group mt-4">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" class="form-control" v-model="email">
                </div>
                <div class="form-group mt-4">
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" class="form-control" v-model="password">
                </div>
                <div class="text-center">
                <button class="btn btn-warning mt-4 rounded-pill" type="submit" id="btn-class"> Register </button>
                </div>
                <p class="mt-4 text-center"> Already have an account? <router-link to="/login">Sign in.</router-link> </p>
            </form>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'Register',
  data () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  },
  methods: {
    register () {
      const payload = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password
      }

      this.$store.dispatch('register', payload)
        .then(data => {
          Swal.fire({
            icon: 'success',
            title: 'Yeayy!!!',
            text: 'Success Create Account'
          })
          this.$router.push('/login')
        })
        .catch(err => {
          console.log(err)
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${err.data}`
          })
        })
    }
  }
}
</script>

<style>
  .register{
    background-image: url('../assets/undraw_happy_feeling_slmw.svg');
    background-blend-mode:soft-light
  }
</style>
