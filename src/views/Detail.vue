<template>
    <div class="mt-1 container p-2" style="width: 60%; " >
        <div class="d-flex justify-content-between px-5">
            <router-link :to="{path: '/'}" class="text-decoration-none text-white"> 
                <span class="material-icons display-6">
                arrow_back
                </span>
            </router-link>
            <div class="text-end d-flex align-items-center">
              <!-- <p>
                Remove from Bookmark
              </p>  -->
              <span class="material-icons display-4" v-if="!bookmark && !bookmarked"
                @click.prevent="addBookmark(animeOne.mal_id, animeOne.image_url, animeOne.title)"
              >
                bookmark_border
              </span>
              <span class="material-icons display-4" v-if="bookmark || bookmarked"
                 @click.prevent="deleteBookmark(animeOne.mal_id)"
              >
                bookmark
              </span>
            </div>
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
  data() {
    return {
      bookmark: false
    }
  },
  components: {EpisodeRow},
  computed: {
    ...mapState(['animeOne', 'animeEpisodes', 'bookmarkOne']),
    genres() {
      let genres = []
      if (this.animeOne.genres) {
        this.animeOne.genres.forEach(el => {
            genres.push(el.name)
        });
      }
      genres = genres.join(', ')
      return genres
    },
    bookmarked() {
      if (this.bookmarkOne) {
        if (this.bookmarkOne.mal_id == this.animeOne.mal_id) {
          return true
        } 
      }
      return false
    }

  },
  methods: {
      addBookmark(mal_id, image_url, title ) {
        this.bookmark = true
        let payload = {
          mal_id, image_url, title
        }
        this.$store.dispatch('addBookmark' , payload)
      },
      deleteBookmark(value) {
        this.bookmark = false
        this.$store.dispatch('deleteBookmark' , value)
      }
  },
  created() {
    let payload = {
      mal_id: this.$route.params.id
    }
    this.$store.dispatch('infoAnime', payload)
    this.$store.dispatch('findOneBookmark', this.$route.params.id)
  }
}
</script>

<style>
.detail-page {
  padding-bottom: 8% !important;
}


</style>