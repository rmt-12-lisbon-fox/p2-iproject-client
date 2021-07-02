<template>
   <!-- Login -->
    <div class="container w-75 my-5 bg-light rounded shadow" id="login-page">
      <div class="row p-40 d-flex align-items-center">
        <div class="col">
          <img src="https://previews.123rf.com/images/oligliya/oligliya1503/oligliya150300025/37178559-fitness-concept-flat-isolated-vector-illustration-and-modern-design-element.jpg" style="width: 100%" alt="" />
        </div>
        <div class="col">
          <img src="https://www.kindpng.com/picc/m/208-2085671_running-man-icon-png-transparent-png.png" height="70" alt="">
          <h1>Go Exercise</h1>
          <form @submit.prevent="login">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label"
                >Email address</label
              >
              <input
              v-model="email"
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label"
                >Password</label
              >
              <input
              v-model="password"
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                required
              />
            </div>

            <button type="submit" class="btn theme_nav">Login</button>
          </form>
          <div class="text-center"> 
        ____________________________________ <br>
            Don't have account?<button type="submit" class="btn btn-primary mx-3">Register</button><br><br>
            

               Or     
            <button v-google-signin-button="clientId" class="google-signin-button"> Login with Google</button><br>
        </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name : 'Login',
  data() {
    return {
      email : '',
      password : '',
      clientId: '832054159268-ii58a2oalrdov85rqm5c2jg4eoi53uci.apps.googleusercontent.com'
    }
  },
  methods :  {
    login() {
      let payload = { email:this.email, password:this.password }
      this.$store.dispatch('login', payload)
    },
    toRegisterPage() {
      this.$router.push('/register')
    },
     OnGoogleAuthSuccess (idToken) {
      this.$store.dispatch('onSignIn', idToken)
    },
    OnGoogleAuthFail (error) {
    console.log(error, `ini erorrrrrrrrrrr`)
    }
  }
}
</script>
<style>
.google-signin-button {
  color: white;
  background-color: red;
  height: 50px;
  font-size: 16px;
  border-radius: 10px;
  padding: 10px 20px 25px 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
