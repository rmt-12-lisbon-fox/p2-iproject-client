<template>
  <div>
    <b-form @submit.prevent="login('/comedians')" @reset="onReset" v-if="show" class="login-form">
      <br>
      <br>
      <br>
      <h2 class="login-label">I already have an account, log me in!</h2>
      <b-form-group
        id="input-email"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          class="email-login"
          id="input-1"
          v-model="form.email"
          type="email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-password" label="Your Password:" label-for="input-password">
        <b-form-input
          class="password-login"
          type="password"
          id="input-2"
          v-model="form.password"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="danger" class="submit-btn">Submit</b-button>
      <b-button type="reset" variant="outline-danger" class="reset-btn">Reset</b-button>
      <div class="to-register">
        <h6>Don't have an account? Here!</h6>
      </div>
    </b-form>
  </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
  name: 'Login',
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      show: true
    }
  },
  methods: {
    login (page) {
      const email = this.form.email
      const password = this.form.password
      axios({
        url: 'http://localhost:3000/login',
        method: 'post',
        data: {
          email,
          password
        }
      })
        .then(data => {
          const accessToken = data.data.access_token
          localStorage.setItem('access_token', accessToken)
          this.$router.push(page).catch(() => {})
        })
        .catch(err => {
          const message = err.response.data.message
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: message
          })
        })
    },
    onReset (event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>

<style>
.login-form {
  height: 500px;
}

.login-label {
  color: aliceblue;
}

#input-email, #input-password {
  color: aliceblue;
  margin: 20px;
}

.email-login, .password-login {
  margin: auto !important;
  display: block !important;
  width: 400px !important;
  background: transparent !important;
  color: aliceblue !important;
  border-color: rgba(240, 248, 255, 0.288) !important;
}

.submit-btn {
  margin-left: -230px;
}

.reset-btn {
  margin-left: 10px;
}

.reset-btn:hover {
  margin-left: 10px;
  color: red !important;
  background-color:rgb(68, 27, 20) !important;
}

.to-register {
  cursor: pointer;
  margin: auto;
  margin-right: 440px;
  margin-top: 30px;
  border: 1px solid aliceblue;
  width: 250px;
  padding: 5px;
  color: aliceblue;
}
</style>
