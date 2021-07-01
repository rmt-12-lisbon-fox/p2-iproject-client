<template>
  <div id="deck-list" class="p-3">
    <div class="row border border-3 pe-1">
      <div class="col"><img src="https://ik.imagekit.io/farel14/kodok_sarjana_logo_8MUYOLNXx.png" alt="logo" style="width: 50%;"></div>
      <div class="col">
        Total Cards:
        <div class="">
        Main Deck:
        <button
          class="btn btn-sm btn-light my-0 py-0 disabled"
          style="opacity: 1"
        >
          <!-- <p :class="cardCount.main < 40 ? 'redder' : null">{{ cardCount.main }}</p> -->
          <b :class="cardCount.main < 40 ? 'redder' : null">{{ cardCount.main }}</b>
        </button>
        </div>
        <div class="">
        Extra Deck:
        <button
          class="btn btn-sm btn-light my-0 py-0 disabled"
          style="opacity: 1"
        >
          <b :class="cardCount.extra < 15 ? 'redder' : null">{{ cardCount.extra }}</b>
        </button>
        </div>
      </div>
      <div class="col">
        <p class="pb-0 mb-1">Deck Name</p> <input type="text" placeholder="Pick your deck name" class="mb-2" v-model="deckName" required>
      </div>
      <div class="col">
        <div class="row">
        <p class="mb-0">Total Price: {{ totalPrice }}</p>
        <div class="col-8 px-0">
          <button class="btn btn-success m-1" @click="saveDeck">Save Deck</button>
        </div>
        <div class="col-4 px-0">
          <!-- <button class="btn btn-primary m-1">Buy</button> -->
          <a :href="`https://www.tcgplayer.com/massentry?productline=Yugioh&utm_campaign=affiliate&utm_medium=deck-builder&utm_source=YGOPRODeck&c=${buyLink}`" class="btn btn-primary m-1" target="_blank" rel="noopener noreferrer">Buy</a>
        </div>
        </div>
      </div>
    </div>
        <div class="d-block row">
    Main Deck
          <!-- {{buyLink}} -->
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
        border
        border-3
      "
    >
      <div
        v-for="(card, i) in deckList.main"
        :key="i"
        class="py-2 mx-0 bd-highlight"
      >
        <img
          :src="card.card_images_small"
          alt="cardImg"
          @click.prevent="deleteCardMain(i)"
          class="w-75 mx-0 px-0"
        />
      </div>
    </div>
            <div class="d-block row">
    Extra Deck
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
        border
        border-3
      "
    >
      <div
        v-for="(card, i) in deckList.extra"
        :key="i"
        class="py-2 mx-0 bd-highlight"
      >
        <img
          :src="card.card_images_small"
          alt="cardImg"
          @click.prevent="deleteCardExtra(i)"
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
    deleteCardMain (index) {
      this.$store.commit('DELETECARDMAIN', index)
    },
    deleteCardExtra (index) {
      this.$store.commit('DELETECARDEXTRA', index)
    },
    saveDeck () {
      if (this.$store.state.isLogin) {
        this.$store.dispatch('saveDeck', this.deckName)
      } else {
        this.$toasted.error('Please login to save your deck')
      }
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
    },
    buyLink () {
      return this.$store.getters.buyLink
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
