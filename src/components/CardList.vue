<template>
    <div class="main">

      <Elem
      :item="item"
      v-for="item in list"
      :key="item.id"
      />
    </div>
</template>

<script>
import Elem from './Elem.vue'

export default {
  name: 'CardList',
  props: ['list'],
  components: { Elem }
}
</script>

<style scoped >

  .main {
    position: absolute;
    top: 200px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap ;
    height: 100vh;
    overflow: auto;
    left: 250px;
  }
</style>
