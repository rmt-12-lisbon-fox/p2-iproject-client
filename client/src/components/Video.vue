<template>
<div class="container">
  <div class="row">
    <div class="col"></div>
    <div class="col">{{el.title}}</div>
    <div class="col"></div>
  </div>
  <div class="row">
    <span v-html="el.url"></span>
  </div>
</div>
</template>

<script>
export default {
  name: 'WatchVideo',
  props: ['el']
}
</script>

<style>

</style>
