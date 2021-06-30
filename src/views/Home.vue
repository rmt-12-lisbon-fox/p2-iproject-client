<template>
  <div class="home">
    <Nav></Nav>
    <Bar></Bar>
    <div class="d-flex flex-column home-container" >
      <div class="w-75">
        <form
        @submit.prevent="searchDiet"
        class="d-flex flex-column justify-content-center align-items-center w-100" >
          <div class="input-group flex-nowrap w-100">
            <input  @click.prevent="showResult =  false" v-model="query" id="diet-input" type="text" class="form-control w-100" placeholder="What did you eat today?" >
          </div>
          <button type="submit" class="btn btn-primary m-4 w-25 ">Submit</button>
        </form>



        <h3 v-if="showResult" >Which One?</h3>
      </div>

      <div class="card-container-diet w-100" >
        <SelectCard
        v-for="item in searchResult"
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
import SelectCard from '../components/SelectCard.vue'
import { mapState } from 'vuex'





export default {
  name: "home",
  components : { Nav, Bar, SelectCard },
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
    'searchResult'
  ]),
  watch: {
    
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
    top: 200px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap ;
    height: 45vh;
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
