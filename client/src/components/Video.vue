<template>
<div class="container">
  <div class="row mb-3">
    <div class="col"></div>
    <h2 class="col">{{el.title}}</h2>
    <div class="col"></div>
  </div>
  <div class="row mb-3">
    <div class="col"></div>
    <div class="col">
    <span v-html="el.url"></span>
    </div>
    <div class="col"></div>
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
