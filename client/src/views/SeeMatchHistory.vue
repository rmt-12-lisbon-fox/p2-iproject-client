<template>
  <div class="container">
    <div class="row">
      <div class="col"></div>
      <div class="col">
        <form action="" @submit.prevent="seeMatch">
          <label for=""> Search Video</label>
          <input type="text" name="" id="" v-model="matchId">
          <button type="submit">Search</button>
        </form>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MatchHistory',
  data () {
    return {
      matchId: ''
    }
  },
  methods: {
    seeMatch () {
      const data = {
        matchId: this.matchId
      }
      this.$store.dispatch('seeMatch', data)
    }
  }
}
</script>

<style>

</style>
