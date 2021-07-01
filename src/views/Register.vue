<template>
     <!-- REGISTER -->
     <section id="register" style="height:100vh; padding-left:20%; padding-right:20%; padding-top: unset; padding-bottom: unset; overflow-y:auto">
        <div>
        <form @submit.prevent="register" action="action_page.php">
            <div id='step1' class="containerRegister">
            <div class="containerBox" v-if='step1'>

                <h1>Sign Up</h1>
                <p>Please fill in this form to create an account.</p>
                <p>Fields marked with * are mandatory</p>
                <hr>

                <label for="username"><b>Username*</b></label>
                <input type="text" id='registerUsername' placeholder="username" name="username" v-model="newUser.username">

                <label for="email"><b>Email*</b></label>
                <input type="text" id='registerEmail' placeholder="email@email.com" name="email" required v-model="newUser.email">

                <label for="psw"><b>Password*</b></label>
                <input type="password" id='registerPassword' placeholder="password" name="password" required v-model="newUser.password">

                <label><b>Phone Number* (include country code, without (+))</b></label><br>
                <input type="tel" pattern="[0-9]{10-13}" placeholder="6289283763822" name="phoneNumber" v-model="newUser.phoneNumber" required><br><br>

                <p>Already have an account? Log in <a href="/" style="color:dodgerblue" v-on:click.prevent="toLoginPage">here</a>.</p>

                <div class="clearfix">
                    <button type="button" @click.prevent="toStep2" style='width:100%' class="confirmbtn">Continue</button>
                </div>

            </div>
            </div>

            <div id='step2' class="containerRegisterBigger">
            <div class="containerBox" v-if='step2'>

                <h1>Sign Up</h1>
                <p>Please fill in this form to create an account.</p>
                <p>Fields marked with * are mandatory</p>
                <hr>

                <div class='d-flex justify-content-between' style='align-items:center'>
                <div style='width:45%'>
                <label><b>First Name*</b></label>
                <input type="text" id='registerName' placeholder="First Name" name="first_name" v-model="newUser.first_name">
                </div>

                <div style='width:45%'>
                <label><b>Last Name*</b></label>
                <input type="text" id='registerName' placeholder="Last Name" name="last_name" v-model="newUser.last_name">
                </div>
                </div>

                <div class='d-flex justify-content-between ; margin-bottom:10px'>

                <div style='width:45%'>
                <label><b>Company</b></label>
                <input type="text" id='registerName' placeholder="Company Name" name="company_name" v-model="newUser.company_name">
                </div>

                <div style='width:45%'>
                <label><b>Role</b></label>
                <input type="text" id='registerName' placeholder="Role in Company" name="role" v-model="newUser.role">
                </div>

                </div>

                <div class='d-flex justify-content-between' style='align-items:center; margin-bottom:10px'>

                <div style='width:45%'>
                <label><b>Company Industry</b></label>
                <select style='width:100%; margin:auto' name='company_industry' v-model="newUser.company_industry">
                    <option value=''>---SELECT---</option>
                    <option value='Food & Beverage'>Food & Beverage</option>
                    <option value='Health & Medicine'>Health & Medicine</option>
                    <option value='Media & Entertainment'>Media & Entertainment</option>
                    <option value='Travel & Leisure'>Travel & Leisure</option>
                    <option value='Financial Services'>Financial Services</option>
                    <option value='E-Commerce & Retail'>E-Commerce & Retail</option>
                    <option value='Arts & Crafts'>Arts & Crafts</option>
                    <option value='Multi-Industry'>Multi-Industry</option>
                </select>
                </div>

                <div style='width:45%'>
                <label><b>Region</b></label>
                <select style='width:100%; margin:auto' name='region' v-model="newUser.region">
                    <option value=''>---SELECT---</option>
                    <option value='Southeast Asia'>Southeast Asia</option>
                    <option value='China & Hong-Kong'>China & Hong-Kong</option>
                    <option value='Japan & Korea'>Japan & Korea</option>
                    <option value='India & Pakistan'>India & Pakistan</option>
                    <option value='Outside Asia'>Outside Asia</option>
                </select>
                </div>
                </div>

                <div class='d-flex justify-content-between' style='align-items:center ; margin-bottom:10px'>

                    <div style='width:45%'>
                    <label><b>Linkedin URL</b></label>
                    <input type="text" style='width:100%' id='registerName' placeholder="Your Linkedin Profile" name="linkedin_url" v-model="newUser.linkedin_url">
                    </div>

                   <div style='width:45%'>
                    <label><b>Company Website</b></label>
                    <input type="text" id='registerName' placeholder="Include https:// (e.g https://www.rate-your-investor.com)" name="company_website" v-model="newUser.company_website">
                    </div>
                </div>

                <label>Upload Profile Picture</label><br>
                <img style="object-fit:scale-down;object-position:left" :style="[imagePreviewStyle]" :src="imagePreviewSrc" class="imageLink"/><br><br>
                <input type="file" id="addMovie-image" name="profilePic" @change="generateImgUrl"><br><br>

                <div class='d-flex justify-content-between' style='align-items:center'>
                <div style='width:45%'>
                    <label><b>Team Size</b></label>
                    <select style='width:100%; margin:auto' name="team_size" v-model="newUser.team_size">
                        <option value=''>---SELECT---</option>
                        <option value='1-20'>1-20</option>
                        <option value='21-50'>21-50</option>
                        <option value='51-100'>51-100</option>
                        <option value='101-500'>101-500</option>
                        <option value='501-1000'>501-1000</option>
                        <option value='>1000'>1000</option>
                    </select>
                </div><br>
                </div>

                <div class="clearfix" style='margin-top:20px'>
                    <button type="submit" class="confirmbtn">Sign Up</button>
                    <button type="button" id="loginButton" class="redbtn" @click.prevent="toStep1">Back</button>
                </div>
            </div>
        </div>
        </form>
        </div>
    </section>
</template>

<script>
import router from '../router'
import Vue from 'vue'
import VueToast from 'vue-toast-notification'
Vue.use(VueToast, {
  position: 'top'
})
export default {
  name: 'Register',
  data () {
    return {
      step1: true,
      step2: false,
      newUser: {
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
        phoneNumber: '',
        company_name: '',
        company_website: '',
        role: '',
        region: '',
        linkedin_url: '',
        company_industry: '',
        team_size: '',
        profilePic: ''
      },
      imagePreviewStyle: {
        width: '',
        height: ''
      },
      imagePreviewSrc: ''
    }
  },
  methods: {
    generateImgUrl (event) {
      // console.log(event.target.files)

      this.newUser.profilePic = event.target.files[0]

      var reader = new FileReader()
      reader.onload = () => {
        this.imagePreviewStyle.width = '300px'
        this.imagePreviewStyle.height = '180px'
        this.imagePreviewSrc = reader.result
      }

      reader.readAsDataURL(event.target.files[0])
    },
    register () {
      const newUserData = this.newUser
      this.$store.dispatch('register', newUserData)
    },
    toStep2 () {
      if (this.newUser.username == '' || this.newUser.email == '' || this.newUser.password == '' || this.newUser.phoneNumber == '') {
        Vue.$toast.error('Please fill in the required fields')
      } else {
        this.step1 = false
        this.step2 = true
      }
    },
    toStep1 () {
      this.step1 = true
      this.step2 = false
    },
    toLoginPage () {
      router.push({ path: '/login' })
    }
  },
  created () {
    this.$store.commit('TOLOGINPAGE')
    this.step1 = true
    this.step2 = false
  }
}
</script>

<style>
#register {
    background-image: url('../assets/laptops.jpg')
}
</style>
