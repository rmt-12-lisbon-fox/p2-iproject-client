<template>
  <div class="home">
    <Nav></Nav>
    <Bar></Bar>
    <div class="d-flex flex-column home-container" >
      <div class="card-container-diet w-100" >
        <RecipeCard
        v-for="item in recipes"
        :key="item.fdcId"
        :item="item"
        />

      </div>
    </div>
  </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import Bar from '../components/Bar.vue'
import RecipeCard from '../components/RecipeCard.vue'
import { mapState } from 'vuex'

export default {
  name: "Recipe",
  components : { Nav, Bar, RecipeCard },
  data() {
    return  {
      query :'',
      showResult : false
    }
  },
  methods : {
    searchDiet() {
      let payload = {}
      payload.name = this.query
      this.$store.dispatch("search", payload)
      this.showResult = true
    }
  },
  computed: mapState([
    'recipes'
  ]),
  created() {
    this.$store.dispatch("getRecipe")
  }
}
</script>

<style scoped>

  #diet-input {
    border-radius: 20px;
  }

  .home-container {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 200px;
    left: 25vw;
    height: 70vh;
    width: 70vw;
    align-items: center;
  }
    /* justify-content: center; */

  .card-container-diet {
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap ;
    height: 73vh;
    overflow: auto;
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
