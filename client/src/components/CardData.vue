<template>
  <div class="col-sm-6" v-if="el.image">
    <div class="card mb-4 bg-white" style="width: 18rem;">
  <img :src="el.image" class="card-img-top d-inline-flex" :alt="el.name">
  <div class="card-body">
    <h5 class="card-title">{{el.name}}</h5>
    <p class="card-text">Type: {{el.type}}</p>
    <p class="card-text" v-if="el.cost >= 0">Cost: {{el.cost}}</p>
  </div>
</div>
  </div>
</template>

<script>
export default {
  name: 'CardBody',
  props: ['el']
}
</script>

<style>

</style>
