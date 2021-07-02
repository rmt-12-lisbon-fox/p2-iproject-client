<template>
  <div id="wiki-search">
    <!-- {{ Object.keys(card) }} -->
    <div class="container-fluid" v-if="card">
      <h2 class="m-3">{{ card.name }}</h2>
      <div class="row justify-content-center">
        <div class="col ms-5">
          <div class="card">
          <img :src="card.card_images" alt="card images" class="m-3 pe-0" />
          </div>
        </div>
        <div class="col ms-auto me-3">
          <div class="card p-3">
          <p align="justify">{{ card.desc }}</p>
          </div>
          <table class="table d-flex">
            <div class="col-6">
              <tr>
                <th>{{ card.type }}</th>
                <td>{{ card.race }}</td>
              </tr>
              <tr>
                <th>Archetype</th>
                <td>{{ card.archetype }}</td>
              </tr>
              <tr>
                <th>Sets</th>
                <td>{{ card.card_sets }}</td>
              </tr>
              <tr>
                <th>Price</th>
                <td>$ {{ card.card_prices }}</td>
              </tr>
              <tr>
                <th>TCG Ban list</th>
                <td>{{ banlist }}</td>
              </tr>
              <tr v-if="card.atk">
                <th>Scale/Link Rating</th>
                <td>{{ card.scale || '-'}}</td>
              </tr>
              <tr v-if="card.atk">
                <th>Atk</th>
                <td>{{ card.atk }}</td>
              </tr>
              <tr v-if="card.atk">
                <th>Def</th>
                <td>{{ card.def }}</td>
              </tr>
              <tr v-if="card.atk">
                <th>Level/Rank</th>
                <td>{{ card.level || card.rank }}</td>
              </tr>
              <tr v-if="card.atk">
                <th>Attribute</th>
                <td>{{ card.attribute }}</td>
              </tr>
            </div>
            <div>
              <div class="col-6 w-100 h-100">
                <div class="d-flex">

                <form @submit.prevent="twitterSearch">
                    Listen to other's hype about this card!
                    <!-- <input type="text" class="form-control" placeholder="Twitter Search" v-model="query"/> -->
                    <button type="submit" class="btn btn-primary">Twitter Search</button>
                </form>
                <!-- <button @click.prevent="twitterSearch" class="btn btn-primary">Fetch</button> -->

                </div>
                <div class="col border border-2" v-for="tweet in tweets" :key="tweet.id">
                    {{tweet.text}}
                </div>
              </div>
            </div>
          </table>
        </div>
            <!-- <div class="row">
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
                <div class="row border border-2" v-for="tweet in tweets" :key="tweet.id">
                    {{tweet.text}}
                </div>
      </div> -->
      </div>
    </div>
    <div v-else>
      <h1>404 Sorry, Page Not Found..</h1>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  created () {
    this.$store.dispatch('getCard', this.$route.params.cardId)
  },
  methods: {
    twitterSearch () {
      this.$toasted.info('Please Wait..')
      this.$store.dispatch('fetchTwitter', this.card.name)
    }
  },
  computed: {
    card () {
      // return this.$store.state.card
      return this.$store.getters.cardWiki
    },
    tweets () {
      return this.$store.state.tweets
    },
    banlist () {
      return this.card.banlist_info ? this.card.banlist_info : 'Unlimited'
    }
  }
}
</script>

<style>
</style>
