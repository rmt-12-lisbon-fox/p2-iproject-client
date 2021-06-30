<template>
  <div class="container">
    <div class="row">
      <div class="col"></div>
      <h2 class="col">{{el.title}}</h2>
      <div class="col"></div>
    </div>
    <div class="row d-flex-inline">
      <div class="col"></div>
      <div class="col">
      <span class="d-inline-flex" v-html="el.url"></span>
      </div>
      <div class="col"></div>
    </div>
</div>
</template>

<script>
export default {
  name: 'HomeVideo',
  props: ['el']
}
</script>

<style>

</style>
