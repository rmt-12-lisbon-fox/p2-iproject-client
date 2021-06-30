<template>
  <!-- Register Page -->
  <section>
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
                <h5 class="card-title mb-4">Register into english tools</h5>
                <form @submit.prevent="registerButton">
                  <div class="form-group">
                    <label for="fullName-register" class="sr-only"></label>
                    <input
                      type="text"
                      v-model="fullName"
                      name="fullName"
                      id="fullName-register"
                      class="form-control mb-4"
                      placeholder="Full name"
                    />
                  </div>
                  <div class="form-group">
                    <label for="email-register" class="sr-only"></label>
                    <input
                      type="email"
                      v-model="email"
                      name="email"
                      id="email-register"
                      class="form-control mb-4"
                      placeholder="Email address"
                    />
                  </div>
                  <div class="form-group mb-4">
                    <label for="password-register" class="sr-only"></label>
                    <input
                      type="password"
                      v-model="password"
                      name="password"
                      id="password-register"
                      class="form-control"
                      placeholder="***********"
                    />
                  </div>
                  <button
                    class="btn btn-block btn-dark login-btn mb-4 ms form-control"
                    type="submit"
                  >
                    Register
                  </button>
                </form>
                <p class="login-card-footer-text">
                  Have an account?
                  <a href="" @click.prevent="toLogin" class="text-reset"
                    >Login here</a
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </section>
  <!-- Akhir Register Page -->
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      fullName: ""
    };
  },
  methods: {
    registerButton() {
      const payload = {
        email: this.email,
        password: this.password,
        fullName: this.fullName
      };
      this.$store.dispatch("registerButton", payload);
    },
    toLogin() {
      this.$router.push({ path: "/login" }).catch(() => {});
    }
  }
};
</script>

<style></style>
