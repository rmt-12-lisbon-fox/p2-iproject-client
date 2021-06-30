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
  components: { CardLibrary, DeckList },
  data () {
    return {
      decklist: []
    }
  }
}
</script>

<style>
</style>
