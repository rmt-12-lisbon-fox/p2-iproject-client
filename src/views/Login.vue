<template>
    <div class="mx-auto container d-flex align-items-center justify-content-center">
        <div class="row login rounded bg-light p-5 shadow-lg">
          <div class="col-6 ">
              <img src="../assets/undraw_yoga_248n (1).svg" class="" style="height: 600px; width: 500px" alt="">
          </div>
          <div class="col-6">
              <div class="mb-5 text-center">
                  <h1 style="font-weight: 600;">Healing</h1>
              </div>
          <h3 class="login-text mb-3 text-center"> Sign In </h3>
          <!-- form login -->
          <form @submit.prevent="login" style="font-weight: 400;">
              <div class="form-group">
                  <label for="email">Email</label>
                  <input type="email" name="email" id="login-email" class="form-control p-3" v-model="email">
              </div>
              <div class="form-group mt-2">
                  <label for="password">Password</label>
                  <input type="password" name="password" id="login-password" class="form-control p-3" v-model="password">
              </div>
              <div class="text-center">
                <button class="btn btn-warning mt-3 rounded-pill" type="submit" id="btn-class"> Login </button>
              </div>
          </form>
          <hr class="rounded" style="color: indigo;">
          <!-- <button  v-google-signin-button="clientId" class="btn btn-success rounded-pill">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 19">
          <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"></path>
          </svg>
          Sign in with Google
          </button> -->
          <p class="mt-4 text-center"> No Account? <router-link to="/register">Create one.</router-link> </p>
          </div>
        </div>
     </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', payload)
        .then(data => {
          this.$router.push('/')
        })
        .catch(err => {
          console.log(err.data, 'LOGINN')
        })
    }
  }
}
</script>

<style>
  .container {
    height: 90vh;
  }
</style>
