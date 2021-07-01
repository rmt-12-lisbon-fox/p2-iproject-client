<template>
  <div>
    <Navbar></Navbar>
    <div id="dad-jokes" class="desktop-12 mobile-3">
      <div style="margin: 40px 20% 30px 20%; width: 60%; text-align: center; padding: 25px; border: 1px solid #ffffff;">
        <h3 style="margin-bottom: 20px;">{{fetchDadJokes.setup}}</h3>
        <p style="text-align: center; padding-bottom: 10px;">{{fetchDadJokes.punchline}}</p>
      </div>
    </div>
    <div class="container d-flex justify-content-center comedians-cards" style="margin-top: 50px">
      <div
        v-for="el in comedians"
        :key="el.id"
        class="card mx-2"
        style="width: 18rem"
      >
        <img :src="el.imgUrl" style="height: 250px !important" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title text-dark">{{ el.name }}</h5>
        </div>
        <router-link :to="`/comedians/${el.id}`" class="btn btn-dark">See Profile</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  name: 'Main',
  components: { Navbar },
  computed: {
    comedians () {
      return this.$store.state.comedians
    },
    fetchDadJokes () {
      return this.$store.state.dadJokes
    }
  },
  methods: {
    fetchComedians () {
      this.$store.dispatch('fetchComedians')
    },
    dadJokes () {
      this.$store.dispatch('dadJokes')
    }
  },
  created () {
    this.fetchComedians()
    this.dadJokes()
  }
}
</script>

<style>
.comedians-cards {
  margin-bottom: 50px;
}

#dad-jokes {
  color: aliceblue;
}
</style>
