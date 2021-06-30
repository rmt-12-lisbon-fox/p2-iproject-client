<template>
    <div class="mt-1 container p-2" style="width: 60%; " >
        <div class="text-start">
            <router-link :to="{path: '/'}" class="text-decoration-none text-white"> 
                <span class="material-icons">
                arrow_back
                </span>
            </router-link>
        </div>
        <div class="mb-4 p-2">
            <h3 class="h3"> {{ animeOne.title }} </h3>
        </div>

        <div class="d-flex justify-content-center px-5">
            <div class="mx-2">
                <img :src="animeOne.image_url"
                alt="Image"
                class="rounded"
                />
                <!-- style="width: 15em; height:12em;" -->

            </div>

            <div class=" ms-4 text-start">
                <div class="row gy-1 text-start h6">
                <dt class="h4">Synopsis</dt>
                <dd class="mb-4">{{animeOne.synopsis}}</dd>

                    <dt class="col-sm-3">Genres</dt>
                    <dd class="col-sm-8">{{genres}}</dd>

                    <dt class="col-sm-3">Rating</dt>
                    <dd class="col-sm-8">{{animeOne.rating}}</dd>

                    <dt class="col-sm-3">Episodes</dt>
                    <dd class="col-sm-8">{{animeOne.episodes || 'N/A'}}</dd>

                    <dt class="col-sm-3">Score</dt>
                    <dd class="col-sm-8">{{animeOne.score || 'N/A'}}</dd>

                    <dt class="col-sm-3">Status</dt>
                    <dd class="col-sm-8">{{animeOne.status}}</dd>
                    
                    <dt class="col-sm-3">Source</dt>
                    <dd class="col-sm-8">{{animeOne.source}}</dd>

                </div>
            </div>

        </div>

        <div v-if="animeEpisodes[0]" class="mt-5" style="padding-bottom: 8%;">
          <hr size="8">
          <h4>
            List Episode
          </h4>
          <table class="table text-white mt-3">
            <thead>
              <tr>
                <th scope="col-1">#</th>
                <th scope="col">Episode</th>
                <th scope="col">Updated</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <EpisodeRow 
                v-for="(el,i) in animeEpisodes" :key="el.id" :el="el" :i="i"
              />
            </tbody>
          </table>
        </div>

    </div>

</template>

<script>
// import swal from 'sweetalert2'
import {mapState} from 'vuex'
import EpisodeRow from '../components/EpisodeRow.vue'
export default {
  name: 'Detail',
  components: {EpisodeRow},
  computed: {
    ...mapState(['animeOne', 'animeEpisodes']),
    genres() {
      let genres = []
      if (this.animeOne.genres) {
        this.animeOne.genres.forEach(el => {
            genres.push(el.name)
        });
      }
      genres = genres.join(', ')
      return genres
    }

  },
  created() {
    let payload = {
      mal_id: this.$route.params.id
    }
    this.$store.dispatch('infoAnime', payload)
  }
}
</script>

<style>
.detail-page {
  padding-bottom: 8% !important;
}


</style>