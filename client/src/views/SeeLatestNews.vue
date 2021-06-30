<template>
  <div class="container">
    <div class="row">
      <div class="col"></div>
      <div class="col">
        <form action="" @submit.prevent="getNews">
        <label for="">See Latest News</label>
        <select name="" id="" v-model="gameId">
          <option value="570">Dota</option>
          <option value="359550">Rainbow 6</option>
        </select>
        <button type='submit'>Search</button>
        </form>
      </div>
      <div class="col"></div>
    </div>
    <div class="row">
      <news-detail v-for="(news,i) in allNews" :key="i" :news='news'/>
    </div>
  </div>
</template>

<script>
import NewsDetail from '../components/NewsDetail.vue'
export default {
  name: 'NewsPage',
  components: { NewsDetail },
  data () {
    return {
      gameId: ''
    }
  },
  methods: {
    getNews () {
      const data = {
        gameId: this.gameId
      }
      this.$store.dispatch('getNews', data)
    }
  },
  computed: {
    allNews () {
      return this.$store.state.allNews
    }
  }
}
</script>

<style>

</style>
