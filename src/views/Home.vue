<template>
  <div class="home">
     <Navbar />
     <div class="">
       <Carousel :news="news"/>
     </div>
    <div class="container w-50 mt-4">
      <h1 class="text-center mt-5">HEALING COMMUNITY</h1>
     <div class="row mt-3">
       <Card v-for="el in communities" :key="el.id" :community="el"/>
     </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar.vue'
import Carousel from '../components/Carousel.vue'
import Card from '../components/Card.vue'
export default {
  name: 'Home',
  components: {
    Navbar, Carousel, Card
  },
  computed: {
    communities () {
      return this.$store.state.communities
    },
    news () {
      return this.$store.state.news
    }
  },
  created () {
    this.$store.dispatch('allCommunities')
    this.$store.dispatch('allNews')
  }
}
</script>
