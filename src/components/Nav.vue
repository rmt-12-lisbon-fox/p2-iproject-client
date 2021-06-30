<template>
<div>
  <div id="navbar" class='subBody'>
    <nav id="navbar-bar" class="navbar navbar-expand-lg navbar-light bg-transparent">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Rate Your Investor</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" style='flex-grow:unset' id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <router-link to='/#reviewList'>
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" aria-expanded="false" href="#">
                    <span style="font-size: 1rem; color: grey;">
                        <i class='fas fa-star-half-alt fs-5 text-gray-600' data-bs-toggle="tooltip" data-bs-placement="bottom"
                        title="Back to Homepage"></i>
                    </span>
                    <p style='margin-left:3px'>All Reviews</p>
                </a>
            </li>
            </router-link>
              <li class="nav-item">
                <a class="nav-link active" @click.prevent='addReview' aria-current="page" aria-expanded="false" href="#">
                    <span style="font-size: 1rem; color: grey;">
                        <i class='fas fa-pen fs-5 text-gray-600' data-bs-toggle="tooltip" data-bs-placement="bottom"
                        title="Back to Homepage"></i>
                    </span>
                    <p style='margin-left:3px'>Write a Review</p>
                </a>
              </li>
              <li v-if='!isLoggedIn' @click.prevent='toLogin' class="nav-item">
                <a class="nav-link active" aria-current="page" aria-expanded="false" href="#">
                    <span style="font-size: 1rem; color: grey;">
                        <i class='fas fa-sign-in-alt fs-5 text-gray-600' data-bs-toggle="tooltip" data-bs-placement="bottom"
                        title="Edit My Profile"></i>
                    </span>
                    <p>Sign In</p>
                </a>
              </li>
              <router-link to='/dashboard'>
              <li v-if='isLoggedIn && isAdmin' class="nav-item dropdown">
                <a class="nav-link active" aria-current="page" aria-expanded="false" href="#">
                    <span style="font-size: 1rem; color: grey;">
                        <i class='fas fa-user-cog fs-5 text-gray-600' data-bs-toggle="tooltip" data-bs-placement="bottom"
                        title="Edit My Profile"></i>
                    </span>
                    <p style="color:black">Dashboard</p>
                </a>
              </li>
              </router-link>
              <li v-if='isLoggedIn' class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span style="font-size: 1rem; color: grey;">
                        <i class='fas fa-user-cog fs-5 text-gray-600' data-bs-toggle="tooltip" data-bs-placement="bottom"
                        title="Edit My Profile"></i>
                    </span>
                    <p style="color:black">My Account</p>
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">My Profile</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#" @click.prevent='logout'>Sign Out</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

        <hr style='margin-top:5px; margin-bottom:30px'>

    <!-- HOMEPAGE BANNER -->
    <div v-if='!isLoggedIn && login == false' id="detailHeader" class='subBody hero-image-header'>
        <div class='description text-center align-middle' style="padding: 20px; width: 45%; align-items:center">
            <h1 style='color:white; text-shadow: 2px 2px 4px #000000'>Read, Write, Assess</h1><br><br>
            <h5 style='color:white; text-shadow: 2px 2px 2px #000000'>Get Insights. Share Insights. The Richest Investor Review Platform in Asia</h5><br>
            <button style='width:70%; border-radius: 30px'>Register Now</button>
        </div>
    </div>

    <!-- NEWS SLIDER -->
    <Slider v-if='isLoggedIn && slider'
      animation="fade"
      v-model="sliderValue"
      :duration="5000"
      :speed="1000"
      :stopOnHover=true
      style='height:400px'
    >
      <SliderItem
          v-for="(i, index) in list"
          :key="index"
          @click="changeIndex(1);"
        >
          <div v-if='home' id="slider" class='subBody hero-image' :style='{backgroundImage: "url("+ i.urlToImage +")"}'>
              <div class='description text-center align-bottom' style="background-color: white; border-radius: 30px; opacity: 0.8; padding: 20px; width: 45%; align-items:center">
                  <h2 style='opacity:1; color:black; text-shadow: 1px 1px 2px #000000' class='news-overflow-ellipsis'>{{i.title}}</h2><br>
                  <h5 style='opacity:1; color:black' class ='news-overflow-ellipsis'>{{i.content}}</h5><br>
              <button style='width:150px; height: 50px; border-radius: 30px;'><a :href="i.url">Read More</a></button>
              </div>
          <div>
            </div>
          </div> 
      </SliderItem>
    </Slider>

        <hr style='margin-top:30px'>

  </div>
</template>

<script>
import { Slider, SliderItem } from "vue-easy-slider";
import Vue from 'vue'
import VueToast from 'vue-toast-notification';
Vue.use(VueToast, {
  position: 'top'
})
import router from '../router'
export default {
  name: 'Navbar',
  components: {
    Slider,
    SliderItem
  },
    data() {
    return {
      list: [],
      sliderValue: 2,
    }
  },
  computed: {
    slider() {
      return this.$store.state.slider
    },
    home() {
      return this.$store.state.home
    },
    news() {
      return this.$store.state.news
    },
    login() {
      return this.$store.state.login
    },
    isLoggedIn () {
      return this.$store.state.isLoggedIn
    },
    isAdmin() {
      return this.$store.state.isAdmin
    },
  },
  methods: {
    toLogin() {
      router.push({ path: `/login`})
    },
    logout() {
      this.$store.commit('LOGOUT')
    },
    changeIndex(index) {
      this.sliderValue = index;
    },
    addReview() {
      if (this.isLoggedIn) {
        router.push({ path: `/add-review#add-review`})
        this.$store.commit('SLIDERTOGGLE', true)
      } else {
        this.$store.commit('TOLOGINPAGE')
        Vue.$toast.error('Register / login to write a new review')
        router.push({ path: `/login`})
      }
    }
  },
  created() {
    this.$store.dispatch('getnews')
    this.list = this.news
    this.$store.commit('POSTLOGINDETAILS')
  },
  mounted() {
    setTimeout(
      () =>
        (this.list = this.news),
      1000
    );
  }
}
</script>

<style>
.hero-image {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  border-radius: 30px;
  height: 400px; 
  padding-left: 30px;
  padding-right:30px;
  display:flex; 
  justify-content:space-between; 
  align-items:center
}

.hero-image-header {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  border-radius: 30px;
  height: 400px; 
  background-image: url('../assets/investor3.png'); 
  padding-left: 30px;
  padding-right:30px;
  display:flex; 
  justify-content:space-between; 
  align-items:center
}

hr {
    border: 10px;
    margin-bottom: 20px;
}

.news-overflow-ellipsis {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}
</style>