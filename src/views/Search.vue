<template>
  <div>
      <div class="mb-5">
        <h2 class="display-6">Search result for ...</h2>
      </div>
    <div class="container">
    <div class="row row-cols-5 gy-4">
          <AnimeCard />
          <AnimeCard />
          <AnimeCard />
          <AnimeCard />
          <AnimeCard />

        
    </div>
    </div>

      </div>
  </div>
</template>

<script>
import AnimeCard from '../components/AnimeCard.vue'
export default {
    name: 'Search',
    components: {AnimeCard}
}
</script>

<style>

</style>