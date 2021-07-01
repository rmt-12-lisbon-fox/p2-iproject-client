<template>
<div class="row py-5">
    <div class="col-md-6 mx-auto">
        <div class="card">
            <div class="login-box">
                <div class="login-snip">

                    <input id="tab-1" type="radio" name="tab" class="sign-in" >
                    <label for="tab-1" class="tab" @click.prevent="showLoginPage" >Login</label>

                    <input id="tab-2" type="radio" name="tab" class="sign-up" checked>
                    <label for="tab-2" class="tab">Register</label>

                    <div class="login-space">

                        <form class="sign-up-form" @submit.prevent="register" >

                            <div class="group"> <label for="pass" class="label">Email Address</label> <input v-model="email" type="text" class="input" placeholder="Enter your email address"> </div>

                            <div class="group"> <label for="pass" class="label">Password</label> <input v-model="password" type="password" class="input" placeholder="Create your password"> </div>

                            <div class="group"> <input type="submit" class="button" value="Register"> </div>
                            <div class="hr"></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    showLoginPage () {
    },
    register () {
    }
  }
}
</script>

<style>

body {
    margin: 0;
    font: 600 16px/18px 'Open Sans', sans-serif
}

.login-box {
    width: 100%;
    margin: auto;
    max-width: 525px;
    min-height: 550px;
    position: relative;
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
