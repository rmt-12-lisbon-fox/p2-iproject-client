<template>
  <div class="container" style="padding-bottom: 100px">
    <div class="row">
      <div class="col"></div>
      <div class="col">
        <form @submit.prevent="seeMatch">
          <!-- <div class="row"> -->
            <div class="row mb-3 text-center ">
            <label for=""> Check Heartstone Card</label>
            </div>
            <div class="row mb-3 d-flex justify-content-evenly">
            <input type="text" class="form-control w-50" id="" v-model="cardName">
            </div>
            <div class="row mb-3 d-flex justify-content-evenly">
            <button type="submit" class="btn btn-dark w-25">Search</button>
            </div>
          <!-- </div> -->
        </form>
      </div>
      <div class="col"></div>
    </div>
    <div class="row">
      <CardData v-for="(el,i) in allCard" :key='i' :el='el'/>
    </div>
  </div>
</template>

<script>
import CardData from '../components/CardData.vue'
export default {
  name: 'MatchHistory',
  components: { CardData },
  data () {
    return {
      cardName: ''
    }
  },
  methods: {
    seeMatch () {
      const data = {
        cardName: this.cardName
      }
      this.$store.dispatch('seeMatch', data)
    }
  },
  computed: {
    allCard () {
      return this.$store.state.allCard
    }
  }
}
</script>

<style>

</style>
