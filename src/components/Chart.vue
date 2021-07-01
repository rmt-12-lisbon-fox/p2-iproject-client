<template>
  <div>
    <img class="w-100" :src="chartURL" alt="">
  </div>
</template>

<script>
export default {
  computed: {
    chartURL() {
      return this.$store.state.chartURL
    }
  }
}
</script>

<style>

</style>