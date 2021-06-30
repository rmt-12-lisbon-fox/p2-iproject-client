<template>
  <div class="row d-flex justify-content-evenly" style="padding-bottom: 100px">
    <home-video v-for="(el, i) in allVideos" :key='i' :el='el' />
  </div>
</template>

<script>
import HomeVideo from '../components/HomeVideo.vue'
export default {
  name: 'Home',
  components: { HomeVideo },
  computed: {
    allVideos () {
      return this.$store.state.popularVideo
    }
  },
  methods: {
    fetchAllVideos () {
      this.$store.dispatch('getPopularVideo')
    }
  },
  created () {
    this.fetchAllVideos()
  }
}
</script>
