<template>
  <div>
    <div
      v-bind:style="{ backgroundImage: 'url(' + background.img + ')' }"
      class="bg bg-opaque d-flex"
    >
      <div class="d-flex justify-content-center" id="outer-card">
        <div class="card-title">
          <div class="container p-4 mb-5">
            <h3
              class="main-caption"
            >Predict the time the International Space Station (ISS) passes over your area! ISS, the third brightest object in the sky, looks like a fast-moving plane only much higher and traveling thousand of kilometers an hour faster!</h3>
          </div>
          <div class="d-flex justify-content-center">
            <button class="btn-lg btn-primary mb-4">Let's find out!</button>
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
  }
}
</script>

<style scoped>

</style>
