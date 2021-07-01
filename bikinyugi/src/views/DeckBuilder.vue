<template>
  <div id="deck-builder">
    <div class="row">
      <div class="col-8">
        <DeckList />
      </div>
      <div class="col-4">
        <CardLibrary />
      </div>
    </div>
  </div>
</template>

<script>
import CardLibrary from '../components/CardLibrary.vue'
import DeckList from '../components/DeckList.vue'
export default {
  name: 'DeckBuilder',
  components: { CardLibrary, DeckList },
  // data () {
  //   return {
  //     decklist: []
  //   }
  // },
  // computed: {
  //   allCards () {
  //     return this.$store.state.allCards
  //   }
  // },
  created () {
    this.$store.dispatch('fetchAllCards')
    this.$store.dispatch('fetchStarter')
  }
}
</script>

<style>
</style>
