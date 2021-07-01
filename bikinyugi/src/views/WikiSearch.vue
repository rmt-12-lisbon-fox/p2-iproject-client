<template>
  <div id="wiki-search">
    <!-- {{ Object.keys(card) }} -->
    <div class="container-fluid" v-if="card">
      <h2 class="m-3">{{ card.name }}</h2>
      <div class="row justify-content-center">
        <div class="col-4">
          <img :src="card.card_images" alt="card images" class="ms-3 pe-0" />
        </div>
        <div class="col-6 ms-auto me-3">
          <p align="justify">{{ card.desc }}</p>
          <table class="table" style="width: 100%;">
            <div>
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
            </div>
            <div v-if="card.atk">
              <tr>
                <th>Scale/Link Rating</th>
                <td>{{ card.scale || '-'}}</td>
              </tr>
              <tr>
                <th>Atk</th>
                <td>{{ card.atk }}</td>
              </tr>
              <tr>
                <th>Def</th>
                <td>{{ card.def }}</td>
              </tr>
              <tr>
                <th>Level/Rank</th>
                <td>{{ card.level || card.rank }}</td>
              </tr>
              <tr>
                <th>Attribute</th>
                <td>{{ card.attribute }}</td>
              </tr>
            </div>
          </table>
        </div>
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
  computed: {
    card () {
      // return this.$store.state.card
      return this.$store.getters.cardWiki
    },
    banlist () {
      return this.card.banlist_info ? this.card.banlist_info : 'Unlimited'
    }
  }
}
</script>

<style>
</style>
