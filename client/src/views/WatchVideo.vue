<template>
  <div class="container">
    <div class="row">
      <div class="col"></div>
      <div class="col">
        <form action="" @submit.prevent="fetchVideo">
          <label for=""> Search Video</label>
          <input type="text" name="" id="" v-model="title">
          <button type="submit">Search</button>
        </form>
      </div>
      <div class="col"></div>
    </div>
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
