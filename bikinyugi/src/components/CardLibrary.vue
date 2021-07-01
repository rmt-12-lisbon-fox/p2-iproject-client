<template>
  <div id="card-library">
    <!-- {{ Object.keys(allCards[0]) }} -->
    <div class="border border-3 px-3">
    <form @submit.prevent="fetchAllCards" @input.prevent="fetchAllCards">
      <div class="row justify-content-center">
        <div class="col-10">
          <input
            type="text"
            class="form-control m-1"
            placeholder="Search Name"
            v-model="name"
          />
        </div>
      </div>
      <!-- <input type="select" class="form-control p-2" placeholder="Search Name"> -->
      <div class="row">
        <!-- <div class="col"></div> -->
        <div class="col-2">Type</div>
        <div class="col">
          <select
            name=""
            class="form-control form-control-sm mw-100 w-100 m-1"
            v-model="type"
          >
            <option value="" class="text-muted">Types</option>
            <option :value="type" v-for="type in types" :key="type">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="col"><label for="">Level / Rank</label></div>
        <div class="col-3">
          <select
            name=""
            class="form-control form-control-sm mw-100 w-100 m-1"
            v-model="level"
          >
            <option value="" class="text-muted">Level</option>
            <option :value="i" v-for="i in 13" :key="i">{{ i }}</option>
          </select>
        </div>
        <!-- <div class="col"></div> -->
      </div>
      <div class="row">
        <div class="col-2">Attribute</div>
        <div class="col">
          <select
            name=""
            class="form-control form-control-sm mw-100 w-100 m-1"
            v-model="attribute"
          >
            <option value="" class="text-muted">Attribute</option>
            <option :value="attr" v-for="attr in attributes" :key="attr">
              {{ attr }}
            </option>
          </select>
        </div>
        <div class="col-2">Race</div>
        <div class="col">
          <select
            name=""
            class="form-control form-control-sm mw-100 w-100 m-1"
            v-model="race"
          >
            <option value="" class="text-muted">Race</option>
            <option :value="race" v-for="race in races" :key="race">
              {{ race }}
            </option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col-2">Atk</div>
        <div class="col">
          <input
            type="text"
            placeholder="ex: 1000"
            class="form-control m-1"
            v-model="atk"
          />
        </div>
        <div class="col-2">Def</div>
        <div class="col">
          <input
            type="text"
            placeholder="ex: 1000"
            class="form-control m-1"
            v-model="def"
          />
        </div>
      </div>
    </form>
    <button class="btn btn-outline-info rounded-pill" data-bs-toggle="tooltip" data-bs-placement="top" title="Hover the card to see card effect" @click.prevent="helpToggle"><b>?</b><span v-if="help"> Hover the card to see card effect</span> </button>
    <button class="btn btn-secondary m-3" @click.prevent="clearFilter">
      Clear filter
    </button>
    </div>
    <div class="container border border-3 px-1" v-for="card in allCards" :key="card.id">
      <div
        class="row mw-100"
        data-bs-toggle="tooltip" data-bs-placement="left" :title="card.desc"
        @click.prevent="
          addCard({
            cardId: card.cardId,
            card_images_small: card.card_images_small,
            card_prices: card.card_prices
          })
        "
      >
        <div class="col-sm-3">
          <img
            :src="card.card_images_small"
            alt="card image"
            class="img-thumbnail"
          />
        </div>
        <div class="col-sm-9">
          <div class="row">
            <p class="text-lg-start fw-bolder mb-0">{{ card.name }}</p>
          </div>
          <div class="row">
            <div class="col">{{ card.type }}</div>
            <div class="col">{{ card.race }}</div>
            <!-- <div class="col"></div> -->
          </div>
          <div class="row">
            <div class="col">{{ card.attribute }}</div>
            <div class="col btn-outline-info disabled">$ {{ card.card_prices }}</div>
          </div>
          <div class="row" v-if="card.atk">
            <div class="col-6">Atk: {{card.atk}}</div>
            <div class="col" v-if="card.def">Def: {{card.def}}</div>
            <div class="col" v-else>Linkval: {{card.linkval}}</div>
          </div>
        </div>
      </div>
    </div>
    <span :class="disablePrev ? 'text-muted' : null">Previous Page</span>
    <button
      class="btn-light rounded mx-2"
      @click.prevent="prevPage"
      :disabled="disablePrev"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-arrow-left"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
        />
      </svg>
    </button>
    <i class="bi bi-arrow-right"></i>
    <button
      class="btn-light rounded"
      @click.prevent="nextPage"
      :disabled="disableNext"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-arrow-right"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
        />
      </svg>
    </button>
    <span :class="disableNext ? 'text-muted' : null">Next Page</span>
    <i class="bi bi-arrow-right"></i>
  </div>
</template>

<script>
export default {
  data () {
    return {
      page: 0,
      name: '',
      level: '',
      atk: '',
      def: '',
      type: '',
      attribute: '',
      race: '',
      disablePrev: true,
      disableNext: false,
      help: false
    }
  },
  computed: {
    allCards () {
      return this.$store.state.allCards
    },
    attributes () {
      return this.$store.state.attributes
    },
    types () {
      return this.$store.state.types
    },
    races () {
      return this.$store.state.races
    }
  },
  methods: {
    helpToggle () {
      if (this.help) {
        this.help = false
      } else {
        this.help = true
      }
    },
    addCard (payload) {
      // console.log(payload)
      this.$store.commit('ADDCARD', payload)
    },
    clearFilter () {
      this.page = 0
      this.name = ''
      this.level = ''
      this.atk = ''
      this.def = ''
      this.type = ''
      this.attribute = ''
      this.race = ''
      this.fetchAllCards()
    },
    async fetchAllCards () {
      const { page, name, level, atk, def, type, attribute, race } = this
      const payload = { page, name, level, atk, def, type, attribute, race }
      await this.$store.dispatch('fetchAllCards', payload)
    },
    async nextPage () {
      this.page++
      this.disablePrev = false
      await this.fetchAllCards()
      // try {
      // } catch {
      //   this.page--
      //   this.fetchAllCards()
      //   this.disableNext = true
      // }
      if (!this.allCards.length) {
        this.page--
        this.fetchAllCards()
        this.disableNext = true
      }
    },
    async prevPage () {
      this.page--
      if (this.page === 0) this.disablePrev = true
      this.disableNext = false
      await this.fetchAllCards()
      // try {
      // } catch {
      //   this.page++
      //   this.fetchAllCards()
      //   this.disablePrev = true
      // }
      if (!this.allCards.length) {
        this.page++
        this.fetchAllCards()
        this.disablePrev = true
      }
    }
  }
}
</script>

<style scoped>
.img-thumbnail {
  max-height: 100%;
}
</style>
