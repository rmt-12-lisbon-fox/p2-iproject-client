<template>
  <div class="login-section">
    <div class="border-all">
      <img src="https://ik.imagekit.io/vrvrzbdh5xfk/thumbnail_2__xJrgKtuWl0sv.png" alt="DECO Logo">
      <h1>Welcome<span>!</span></h1>
      <h2>Please log in with your google account</h2>
      <button v-google-signin-button="clientId" class="google-signin-button form-control">Continue with Google</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      clientId: '620080726220-3infk9bo4q0r0s9pht2gfvtdoctsdo2m.apps.googleusercontent.com'
    }
  },
  methods: {
    OnGoogleAuthSuccess (idToken) {
      // console.log(idToken)
      this.$store.dispatch('googleLogin', idToken)
      // Receive the idToken and make your magic with the backend
    },
    OnGoogleAuthFail (error) {
      console.log(error)
    }
  }
}
</script>

<style scoped>
  .login-section {
    font-family: 'Raleway', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: #382E2E;
  }

  .border-all {
    width: 90rem;
    height: 50rem;
    border-style: solid;
    border-color: #0055B8;
    border-width: 0.5rem;
    border-radius: 3rem;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  img {
    width: 22rem;
    height: 12rem;
    margin-top: 2rem;
  }

  h1 {
    font-size: 6rem;
    margin: 2.5rem 0 2rem 0;
    letter-spacing: 0.6rem;
    color: #0055B8;
  }

  h1 span {
    color: #B80000;
    font-weight: 700;
  }

  h2 {
    font-size: 2.5rem;
    font-weight: 600;
    letter-spacing: 0.2rem;
  }

  button {
    font-family: 'Raleway', sans-serif;
    width: 24rem;
    height: 4rem;
    margin-top: 2rem;
    background: none;
    border-color: #525252;
    border-width: 0.2rem;
    border-radius: 0.5rem;
    font-size: 1.4rem;
    letter-spacing: 0.1rem;
  }

  button:hover {
    cursor: pointer;
  }

</style>
