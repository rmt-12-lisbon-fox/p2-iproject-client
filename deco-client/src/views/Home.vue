<template>
  <div>
    <h1>INI HOME</h1>
  </div>
</template>

<script>

export default {
  name: 'Home',
  computed: {
    profilePic () {
      return this.$store.state.profilePic
    }
  }
}
</script>

<style scoped>

</style>
