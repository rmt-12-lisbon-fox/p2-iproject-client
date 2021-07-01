<template>
  <div id="deck-list">
    <div class="row border border-3 pe-1">
      <div class="col"><img src="https://ik.imagekit.io/farel14/kodok_sarjana_logo_8MUYOLNXx.png" alt="logo" style="width: 50%;"></div>
      <div class="col">
        Total Cards:
        <button
          class="btn btn-outline-secondary my-0 py-0 disabled"
          style="opacity: 1"
        >
          <p :class="cardCount < 40 ? 'redder' : null">{{ cardCount }}</p>
        </button>
      </div>
      <div class="col">
        <p class="pb-0 mb-1">Deck Name</p> <input type="text" placeholder="Pick your deck name" class="mb-2">
      </div>
      <div class="col">
        <div class="row">
        <p class="mb-0">Total Price: {{ totalPrice }}</p>
        <div class="col-8 px-0">
          <button class="btn btn-success m-1">Save Deck</button>
        </div>
        <div class="col-4 px-0">
          <button class="btn btn-primary m-1">Buy</button>
        </div>
        </div>
      </div>
    </div>
    <div
      class="
        d-flex
        flex-row
        bd-highlight
        mb-3
        mx-3
        flex-wrap
        justify-content-center
      "
    >
      <div
        v-for="(card, i) in deckList"
        :key="i"
        class="py-2 mx-0 bd-highlight"
      >
        <img
          :src="card.card_images_small"
          alt="cardImg"
          @click.prevent="deleteCard(i)"
          class="w-75 mx-0 px-0"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      deckName: ''
    }
  },
  methods: {
    deleteCard (index) {
      this.$store.commit('DELETECARD', index)
    }
  },
  computed: {
    deckList () {
      return this.$store.state.deckList
    },
    cardCount () {
      return this.$store.getters.cardCount
    },
    totalPrice () {
      return this.$store.getters.totalPrice
    }
  }
}
</script>

<style>
/* #deck-list {
  background-color: coral;
} */
.redder {
  color: red;
}
/* .card-element {
  max-width: 75%;
  max-height: 75%;
} */
</style>
