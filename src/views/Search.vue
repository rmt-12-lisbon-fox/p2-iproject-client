<template>
  <div class="home">
    <Nav></Nav>
      <div class="main" >
      <SearchCard
      v-for="item in searchResult"
      :key="item.fdcId"
      :item="item"
      />

      </div>

    <Bar></Bar>

  </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import Bar from '../components/Bar.vue'
import SearchCard from '../components/SearchCard.vue'
import { mapState } from 'vuex'

export default {
  name: "home",
  components : { Nav, Bar, SearchCard },
  computed: mapState([
  'searchResult'
])
}
</script>

<style scoped>

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

  .page-nav{
    position: absolute;
    top: 170px;
    right: 50px;
  }

  .home {
    display: flex;
    flex-direction: column;
  }

</style>
