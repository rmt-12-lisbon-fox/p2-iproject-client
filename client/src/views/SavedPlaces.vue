<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <b-card
          overlay
          img-src="https://ik.imagekit.io/hrn4agwelqi/home_u7tFg9vLw.jpg"
          img-alt="Card Image"
          text-variant="white"
          title=""
          class="p-0 border-0"
        >
          <b-card-title class="h1"> Your Saved Places </b-card-title>

          <b-card-text>
            “The world is a book and those who do not travel read only one
            page.”
          </b-card-text>
        </b-card>
      </div>
    </div>

    <div class="container">
      <h1 class="m-4">Saved Places</h1>
      <div class="row m-3">
        <div v-for="e in savedPlaces" :key="e.id" class="col-4 my-4">
          <b-card
            :title="e.name"
            :img-src="e.imgUrl"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mx-auto"
          >
            <b-button @click="toDetailPage(e.id)" href="#" variant="primary"
              >Go here</b-button
            >
            <b-button @click="deletePage(e.id)" class="mx-2" href="#" variant="primary"
              >Delete</b-button
            >
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data() {
    return {};
  },
  methods: {
    toDetailPage(index) {
      this.$router.push(`/detailbookmark/${index}`);
    },
    deletePage(PlaceId){
      this.$store.dispatch('delete', PlaceId)
    }
  },
  computed: {
    savedPlaces() {
      return this.$store.state.savedPlaces;
    },
  },
  created(){
    this.$store.dispatch('getSavedPlaces')
  }
};
</script>
