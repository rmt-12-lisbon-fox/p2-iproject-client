<template>
     <!-- LOGIN -->
    <section id="login" style='height:100vh; overflow-y:hidden'>
        <div class='d-flex'>
            <div style='width: 50%'>
                <img src='../assets/buildings.jpg' style='height:100vh; width: 100%; object-fit: cover;'>
            </div>
            <div class="container" style='width: 40%; padding-left: 20px; padding-right:20px; padding-top: 1%; margin:auto'>
                <div style='text-align:center; margin-bottom: 20px'>
                    <img src='../assets/Rate your investor.png' style='height:30%; width: 40%; object-fit: cover;margin-left:auto; margin-right:auto'>
                </div>
                <div class="containerBoxLogin">
                    <form @submit.prevent="login" id="loginForm">
                        <h1>Sign In</h1>
                        <p>Log in to your account</p>
                        <hr>

                        <label for="email"><b>Email</b></label>
                        <input type="text" id='loginEmail' placeholder="Enter Email" name="email" v-model="email" required>

                        <label for="psw"><b>Password</b></label>
                        <input type="password" id='loginPassword' placeholder="Enter Password" name="psw" v-model="password" required>

                        <p>Don't have an account yet? Sign up <a href="#" id="registerButton" style="color:dodgerblue" @click.prevent="toRegisterPage">here</a>.</p>
                        <p><a href="/" style="color:dodgerblue" @click.prevent="toHome">Continue </a>without logging-in</p>
        
                        <button type="submit">Log In</button>
                    </form>
                    <button v-google-signin-button="clientId" class="google-signin-button"> Sign-In with Google</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import router from '../router'
export default {
    name: 'Login',
    data () {
    return {
      email: '',
      password: '',
      clientId: '948524706466-smp5j5nm8g639qsgug9m7i6elubmcdgc.apps.googleusercontent.com'
    }
  },
  methods: {
    toHome() {
      router.push({ path: `/`})
    },
    toRegisterPage() {
      router.push({ path: `/register`})
    },
    login () {
      const loginData = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', loginData)
    },
    OnGoogleAuthSuccess (id_token) {
        this.$store.dispatch('googlelogin', id_token)
      },
    OnGoogleAuthFail (error) {
      if (error.error == 'popup_closed_by_user') {
          swal('Warning', 'Please clear your browser cache', 'error')
      }
      console.log(error, 'error')
    },
  },
  computed: {
    loading () {
      return this.$store.state.loading
    }
  },
  created() {
    this.$store.commit('TOLOGINPAGE')
  }

}
</script>

<style>
.google-signin-button {
  background-color:#795548;
}
</style>
