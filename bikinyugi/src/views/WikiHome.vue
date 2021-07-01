<template>
  <div id="wiki-home" class="container">
    <div class="row">
      <div class="col-3">
          <div class="row mx-1">
        <form @submit.prevent="twitterSearch">
            Listen to other's hype!
          <div class="row">
            <input type="text" class="form-control" placeholder="Twitter Search" v-model="query"/>
            <button type="submit" class="btn btn-primary">Twitter Search</button>
          </div>
          <div class="row"></div>
        </form>
          </div>
          <!-- <div class="row" :class="tweets ? 'd-none' : null"> -->
        <!-- {{tweets}} -->
            <!-- <div class="row"> -->
                <div class="row border border-2" v-for="tweet in tweets" :key="tweet.id">
                    {{tweet.text}}
                </div>
          <!-- </div> -->
              <!-- hasil twitter -->
      </div>
      <div class="col-6">
        <form @submit.prevent="wikiSearch">
          <div class="row mx-1">
            <label>Card Name</label>
            <input
              type="text"
              class="form-control"
              value=""
              placeholder="Name"
              v-model="name"
            />
                <label>Card Type</label>
                <input
                  type="text"
                  class="form-control"
                  value=""
                  placeholder="Type"
                  v-model="type"
                />
                <label>Card Attribute</label>
                <input
                  type="text"
                  class="form-control"
                  value=""
                  placeholder="Attribute"
                  v-model="attribute"
                />
                <label>Card Level / Rank</label>
                <input
                  type="number"
                  class="form-control"
                  value=""
                  placeholder="Level/Rank"
                  v-model="level"
                />
              <label>Card Link Rating</label>
              <input
                type="text"
                class="form-control"
                value=""
                placeholder="Link Rating"
                v-model="linkval"
              />
              <label>Card Link Marker</label>
              <input
                type="text"
                class="form-control"
                value=""
                placeholder="Link Marker"
                v-model="linkmarker"
              />
              <label>Card Pendulum Scale</label>
              <input
                type="text"
                class="form-control"
                value=""
                placeholder="Pendulum Scale"
                v-model="scale"
              />
              <label>Card Attack</label>
              <input
                type="number"
                class="form-control"
                value=""
                placeholder="Attack"
                v-model="atk"
              />
              <label>Card Defense</label>
              <input
                type="number"
                class="form-control"
                value=""
                placeholder="Defense"
                v-model="def"
              />
            <label>Card Archetype</label>
            <input
              type="text"
              class="form-control"
              value=""
              placeholder="Archetype"
              v-model="archetype"
            />
            <label>Card Banlist Information</label>
            <input
              type="text"
              class="form-control"
              value=""
              placeholder="Banlist Info"
              v-model="banlist_info"
            />
            <label>Card Sets</label>
            <input
              type="text"
              class="form-control"
              value=""
              placeholder="Sets"
              v-model="card_sets"
            />
            <label>Card Price More Than Equal</label>
            <input
              type="number"
              class="form-control"
              value=""
              placeholder="Card Price"
              v-model="card_pricesM"
            />
            <label>Card Price Less Than Equal</label>
            <input
              type="number"
              class="form-control"
              value=""
              placeholder="Card Price"
              v-model="card_pricesL"
            />
            <div class="col">
            <button class="btn btn-primary me-3" type="submit">Submit</button>
            </div>
          </div>
        </form>
          <div class="row" v-if="!hideWiki">
                <div class="col" v-for="card in wikiResult" :key="card.cardId">
                <router-link :to="`/wiki/${card.cardId}`">{{card.name}}</router-link>
            </div>
          </div>
            <button class="btn btn-secondary" @click="clearWiki">Clear</button>
      </div>
      <div class="col-3">Latest Cards
          <form @submit.prevent="latestSearch">
              <button type="submit" class="btn btn-primary">Fetch</button>
          </form>
          <div class="row border border-2" v-for="latest in latestCards" :key="latest.id">
          <div class="col-4 py-1">
            <img :src="latest.card_images[0].image_url_small" alt="New Card" class="w-100">
          </div>
          <div class="col-8">
          <router-link :to="`/wiki/${latest.id}`">{{latest.name}} <span class="badge bg-primary" style="font-size: .50em; font-weight:500">NEW</span></router-link>
          <div class="row">
          <center><b>Card Popularity:</b></center>
          </div>
          <div class="row">
          Views This Week: {{latest.misc_info[0].viewsweek}}
          </div>
          <div class="row">
          Release Date: {{latest.misc_info[0].tcg_date ? latest.misc_info[0].tcg_date : 'Not announced yet'}}
          </div>
          <div class="row">
          Card Sets: {{latest.card_sets ? latest.card_sets[0].set_code : 'Not announced yet'}}
          </div>
          </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WikiHome',
  methods: {
    clearWiki () {
      this.query = ''
      this.name = ''
      this.type = ''
      this.race = ''
      this.level = ''
      this.linkval = ''
      this.linkmarker = ''
      this.scale = ''
      this.attribute = ''
      this.atk = ''
      this.def = ''
      this.archetype = ''
      this.banlist_info = ''
      this.card_sets = ''
      this.card_pricesM = ''
      this.card_pricesL = ''
      this.hideWiki = true
    },
    wikiSearch () {
      this.hideWiki = false
      const { name, type, race, level, linkval, linkmarker, scale, attribute, atk, def, archetype, banlist_info, card_sets, card_pricesM, card_pricesL } = this
      this.$store.dispatch('fetchAllCards', { name, type, race, level, linkval, linkmarker, scale, attribute, atk, def, archetype, banlist_info, card_sets, card_pricesM, card_pricesL })
    },
    twitterSearch () {
      this.$toasted.info('Please Wait..')
      this.$store.dispatch('fetchTwitter', this.query)
    },
    latestSearch () {
      this.$toasted.info('Please Wait..')
      this.$store.dispatch('latestSearch')
    }
  },
  data () {
    return {
      query: '',
      name: '',
      type: '',
      race: '',
      level: '',
      linkval: '',
      linkmarker: '',
      scale: '',
      attribute: '',
      atk: '',
      def: '',
      archetype: '',
      banlist_info: '',
      card_sets: '',
      card_pricesM: '',
      card_pricesL: '',
      hideWiki: false
    }
  },
  computed: {
    wikiResult () {
      return this.$store.state.allCards
    },
    tweets () {
      return this.$store.state.tweets
    },
    latestCards () {
      return this.$store.state.latestCards
    }
  }
}
</script>

<style>
</style>
