<template>
  <div class="container">
    <div class="col">
      <p>{{getWelcome}}</p>
      <p>{{el.username}}</p><br>
      <p>{{el.message}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextMessageArea',
  props: ['el'],
  compute: {
    getWelcome () {
      this.$store.state.welcoming
    }
  }
}
</script>

<style>

</style>
