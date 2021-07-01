<template>
  <!-- Login Page -->
  <section id="login-page">
    <main class="d-flex align-items-center min-vh-100 py-3 py-md-0">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-4">
            <div
              class="card text-center shadow p-3 mb-5 bg-body rounde"
              style="width: 30rem"
            >
              <img
                src="https://englishlive.ef.com/blog/wp-content/uploads/sites/2/2015/05/fluency-in-5-easy-steps-768x530.jpg"
                class="card-img-top"
                alt=""
              />
              <div class="card-body">
                <h5 class="card-title mb-4">Sign into english tools</h5>
                <form @submit.prevent="loginButton">
                  <div class="form-group">
                    <label for="email-login" class="sr-only"></label>
                    <input
                      type="email"
                      v-model="email"
                      name="email"
                      id="email-login"
                      class="form-control mb-4"
                      placeholder="Email address"
                    />
                  </div>
                  <div class="form-group ">
                    <label for="password-login" class="sr-only"></label>
                    <input
                      type="password"
                      v-model="password"
                      name="password"
                      id="password-login"
                      class="form-control mb-4 "
                      placeholder="***********"
                    />
                  </div>
                  <button
                    class="btn btn-block btn-dark login-btn mb-2 ms form-control"
                    type="submit"
                  >
                    Sign in
                  </button>
                  <!--  -->
                  <!-- <GoogleLogin :params="params" :onSuccess="onSuccess" :onFailure="onFailure" class="btn btn-block btn-danger login-btn mb-4 ms form-control text-center">Login With Google</GoogleLogin> -->
                </form>
                <p class="d-flex justify-content-center mb-2">Or</p>
                <GoogleLogin
                  :params="params"
                  :renderParams="renderParams"
                  :onSuccess="onSuccess"
                  :onFailure="onFailure"
                  class="text-center d-flex justify-content-center mb-3"
                ></GoogleLogin>
                <p class="login-card-footer-text">
                  Don't have an account?
                  <a href="" @click.prevent="toRegister" class="text-reset"
                    >Register here</a
                  >
                </p>
                <!-- <div class="g-signin2 d-inline text-center" data-onsuccess="onSignIn"></div> -->
                <!-- <div class="text-center "> -->
                <!-- </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </section>
  <!-- Akhir Login Page -->
</template>

<script>
import GoogleLogin from "vue-google-login";
export default {
  name: "Login",
  components: { GoogleLogin },
  data() {
    return {
      email: "",
      password: "",
      params: {
        client_id:
          "502275237324-nianjvdr3ek1t1rtdvmof60tubv3o1uv.apps.googleusercontent.com"
      },
      renderParams: {
        width: 414,
        height: 38,
        longtitle: true
      }
    };
  },
  methods: {
    loginButton() {
      const payload = {
        email: this.email,
        password: this.password
      };
      this.$store.dispatch("loginButton", payload);
    },
    toRegister() {
      this.$router.push({ path: "/register" }).catch(() => {});
    },
    onSuccess(googleUser) {
      this.$store.dispatch("googleLogin", googleUser);
      // console.log('masuk?');
      // console.log(googleUser);
      // console.log(googleUser.getBasicProfile());
      // var id_token = googleUser.getAuthResponse().id_token;
    },
    onFailure(googleUser) {
      // console.log('error?');
      console.log(googleUser);
      // console.log(googleUser.getBasicProfile());
    }
  }
};
</script>

<style></style>
