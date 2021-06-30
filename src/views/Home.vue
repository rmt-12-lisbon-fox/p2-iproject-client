<template>
  <div class="home page">
    <div
      v-bind:style="{ backgroundImage: 'url(' + background.img + ')' }"
      class="bg-img bg-opaque d-flex"
    >
      <div class="d-flex justify-content-center" id="home-card">
        <div class="card-title">
          <div class="container p-4">
            <h2 class="text-center">Welcome to findISS</h2>
            <hr>
          </div>
          <div class="card-body mb-5">
            <h4
              class="main-caption"
            >
              Predict the time the International Space Station (ISS) passes over your area! ISS, the third brightest object in the sky after sun and moon, looks like a fast-moving plane only much higher and traveling thousand of kilometers an hour faster!
            </h4>
          </div>
          <div class="d-flex justify-content-center">
            <button
              v-on:click.prevent="getResult"
              class="btn-lg btn-primary mb-4"
            >Let's find out!</button>
          </div>
        </div>
      </div>
        <router-link to="/about">
          <i
            class="position-absolute translate-middle fas fa-chevron-right 3x"
          ></i>
        </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  computed: {
    background () {
      return this.$store.state.background
    }
  },
  methods: {
    getResult () {
      this.$store.dispatch('getResult')
    }
  }
}
</script>

<style scoped>

</style>
