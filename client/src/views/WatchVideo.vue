<template>
  <div class="container">
    <div class="row">
      <div class="col"></div>
      <div class="col">
        <form action="">
          <label for=""> Search Video</label>
          <input type="text" name="" id="" v-model="title">
        </form>
      </div>
      <div class="col"></div>
    </div>
    <div class="row"></div>
  </div>
</template>

<script>
export default {
  name: 'WatchVideoPage',
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
  }
}
</script>

<style>

</style>
