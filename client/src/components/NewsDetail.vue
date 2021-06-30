<template>
  <div class="container">
    <span v-html="news.news" style="width:10%"></span>
  </div>
</template>

<script>
export default {
  name: 'NewsDetail',
  props: ['news']

}
</script>

<style>

</style>
