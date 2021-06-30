<template>
  <div class="container" style="padding-bottom: 100px">
        <form action="" @submit.prevent="fetchVideo">
          <div class="row mb-3 text-center">
          <label for=""> Search Video</label>
          </div>
          <div class="row mb-3 d-flex justify-content-evenly">
          <input class="form-control w-25" type="text" name="" id="" v-model="title">
          </div>
          <div class="row mb-3 d-flex justify-content-evenly">
          <button class="btn btn-dark w-25" type="submit">Search</button>
          </div>
        </form>
    <div class="row">
      <watch-video v-for="el in dataVideo" :key='el.id' :el='el'/>
    </div>
  </div>
</template>

<script>
import WatchVideo from '../components/Video.vue'
export default {
  name: 'WatchVideoPage',
  components: { WatchVideo },
  data () {
    return {
      title: ''
    }
  },
  methods: {
    fetchVideo () {
      const title = this.title
      this.$store.dispatch('fetchVideo', title)
    }
  },
  computed: {
    dataVideo () {
      return this.$store.state.eachVideo
    }
  }
}
</script>

<style>

</style>
