<template>
<div class="login-container row">
    <div class="left-login-page h-100 w-50 ">
        <img  class="w-75 h-100" src="../../assets/pexels-karolina-grabowska-4226876.jpg" alt="Photo">
    </div>
    <div class="right-login-page h-100 w-50 d-flex justify-content-center align-items-center ">
        <div class="login-snip w-75 m-5 d-flex flex-column align-items-center ">
            <h2 class="my-5" >
                User Login
            </h2>
            <form  class=" position-relative w-50 d-flex flex-column py-4" @submit.prevent="alert">
                <div class="mb-3">
                    <input v-model="email"  placeholder="Username or Email" type="text" class="form-control round " >
                </div>
                <div class="mb-3">
                    <input v-model="password" placeholder="Password" type="text" class="form-control round" >
                </div>
                <button type="submit" class="btn btn-primary round mb-3">Submit</button>
                <div  v-google-signin-button="clientId" class="btn btn-primary round-google mb-3">
                    <img class="google-icon mx-3" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                    Continue with Google
                </div>
                <div  v-if="isLoading" class="spinner-border deep-brick position-absolute bottom-0 start-50" role="status">
                    <span class="sr-only"></span>
                </div>
            </form>
        </div>
    </div>
</div>
</template>

<script>
import '../style.css';
import { mapState } from 'vuex'
import GoogleSignInButton from 'vue-google-signin-button-directive'
import Swal from 'sweetalert2'
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})
export default {
  directives: {
    GoogleSignInButton
  },
  data: () => ({
    clientId: '957857986434-ntv2h3kt1durs7fqrdakvrdd2tg0pv0d.apps.googleusercontent.com',
    password: "",
    email: "",
  }),
  computed: mapState([
    'isLoading'
  ]),
  methods: {
      alert() {
          Toast.fire({
          icon: 'error',
          title: 'Please use Google Sign-In'
        })
      },
    OnGoogleAuthSuccess (idToken) {
      this.$store.dispatch("gauth", idToken)
    },
    OnGoogleAuthFail (error) {
      console.log(error)
    }
  }
}
</script> 

<style>

@import url(https://fonts.googleapis.com/css?family=Roboto:500);

.google-btn {
	width: 184px;
	height: 42px;
	background-color: rgba(250, 33, 33, 0.8);
	border-radius: 2px;
	box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
}

.google-btn .google-icon-wrapper {
	position: absolute;
	margin-top: 1px;
	margin-left: 1px;
	width: 40px;
	height: 40px;
	border-radius: 2px;
	background-color: #fff;
}

.google-btn .google-icon {
	position: absolute;
	margin-top: 11px;
	margin-left: 11px;
	width: 18px;
	height: 18px;
}

.google-btn .btn-text {
	float: right;
	margin: 11px 11px 0 0;
	color: #fff;
	font-size: 14px;
	letter-spacing: 0.2px;
	font-family: "Roboto";
}

.google-btn:hover {
	box-shadow: 0 0 6px rgb(250, 33, 33);
}

.google-btn:active {
	background: rgb(250, 33, 33);
}

body {
    margin: 0;
}

.login-box {
    width: 100%;
    margin: auto;
    max-width: 525px;
    min-height: 550px;
    position: relative;
    box-shadow: 0 12px 15px 0 rgba(0, 0, 0, .24), 0 17px 50px 0 rgba(0, 0, 0, .19)
}



.login-space {
    min-height: 345px;
    position: relative;
    perspective: 1000px;
    transform-style: preserve-3d
}

.login-space .group {
    margin-bottom: 15px
}

.login-space .group .label,
.login-space .group .input,
.login-space .group .button {
    width: 100%;
    color: #fff;
    display: block
}

.login-space .group .input,
.login-space .group .button {
    border: none;
    padding: 15px 20px;
    border-radius: 25px;
    background: rgba(255, 255, 255, .1)
}

.login-space .group input[data-type="password"] {
    /* text-security: circle; */
    -webkit-text-security: circle
}

.login-space .group .label {
    color: white;
    font-size: 12px
}

.login-space .group .button {
    background: #0d1118
}

.login-space .group .check:checked+label {
    color: #fff
}

*,
:after,
:before {
    box-sizing: border-box
}

.clearfix:after,
.clearfix:before {
    content: '';
    display: table
}

.clearfix:after {
    clear: both;
    display: block
}

a {
    color: inherit;
    text-decoration: none
}

.hr {
    height: 2px;
    margin: 60px 0 50px 0;
    background: rgba(255, 255, 255, .2)
}

.foot {
    text-align: center
}

.card {
    width: 500px;
    left: 100px
}

::placeholder {
    color: #b3b3b3
}
</style>
