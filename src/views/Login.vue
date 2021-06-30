<template>
<div class="row py-5">
    <div class="col-md-6 mx-auto">
        <div class="card">
            <div class="login-box">
                <div class="login-snip">

                    <input id="tab-1" type="radio"  name="tab" class="sign-in" checked>
                    <label for="tab-1" class="tab"  >Login</label>

                    <input id="tab-2" type="radio" @click.prevent="showRegisterPage" name="tab" class="sign-up">
                    <label for="tab-2" class="tab">Register</label>

                    <div class="login-space">
                        <form class="login" @submit.prevent="toLogin" >

                            <div class="group"> <label for="user" class="label">Email</label> <input  type="email" class="input" placeholder="Enter your email" v-model="email"> </div>

                            <div class="group"> <label for="pass" class="label">Password</label> <input  type="password" v-model="password"  class="input" placeholder="Enter your password"> </div>

                            <div class="group"> <input type="submit" class="button" value="Sign In"> </div>

                            <div class="hr"></div>
                            <div class="foot"> <a href="#">Forgot Password?</a> </div>

                        <div class="google-btn google-signin-button" v-google-signin-button="clientId" >
                            <div class="google-icon-wrapper">
                                <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                            </div>
                            <p class="btn-text"><b>Sign in with google</b></p>
                        </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import GoogleSignInButton from 'vue-google-signin-button-directive'
export default {
  directives: {
    GoogleSignInButton
  },
  data: () => ({
    clientId: '957857986434-ntv2h3kt1durs7fqrdakvrdd2tg0pv0d.apps.googleusercontent.com',
    password: "",
    email: ""
  }),
  methods: {
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
	background-color: #4285f4;
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
	box-shadow: 0 0 6px #4285f4;
}

.google-btn:active {
	background: #1669F2;
}

body {
    margin: 0;
    color: #6a6f8c;
    background: #c8c8c8;
    font: 600 16px/18px 'Open Sans', sans-serif
}

.login-box {
    width: 100%;
    margin: auto;
    max-width: 525px;
    min-height: 550px;
    position: relative;
    background: url(https://images.unsplash.com/photo-1507208773393-40d9fc670acf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80) no-repeat center;
    box-shadow: 0 12px 15px 0 rgba(0, 0, 0, .24), 0 17px 50px 0 rgba(0, 0, 0, .19)
}

.login-snip {
    width: 100%;
    height: 100%;
    position: absolute;
    padding: 30px 70px 50px 70px;
    background: rgba(0, 77, 77, .9)
}

.login-snip .login,
.login-snip .sign-up-form {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    transform: rotateY(180deg);
    backface-visibility: hidden;
    transition: all .4s linear
}

.login-snip .sign-in,
.login-snip .sign-up,
.login-space .group .check {
    display: none
}

.login-snip .tab,
.login-space .group .label,
.login-space .group .button {
    text-transform: uppercase
}

.login-snip .tab {
    font-size: 22px;
    margin-right: 15px;
    padding-bottom: 5px;
    margin: 0 15px 10px 0;
    display: inline-block;
    border-bottom: 2px solid transparent
}

.login-snip .sign-in:checked+.tab,
.login-snip .sign-up:checked+.tab {
    color: #fff;
    border-color: #1161ee
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
    color: #aaa;
    font-size: 12px
}

.login-space .group .button {
    background: #0d1118
}

.login-space .group .check:checked+label {
    color: #fff
}

.login-snip .sign-in:checked+.tab+.sign-up+.tab+.login-space .login {
    transform: rotate(0)
}

.login-snip .sign-up:checked+.tab+.login-space .sign-up-form {
    transform: rotate(0)
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
