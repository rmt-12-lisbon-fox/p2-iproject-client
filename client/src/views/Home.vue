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
          <b-card-title class="h1">
            Get Ready to Explore New Places
          </b-card-title>

          <b-card-text>
            “The world is a book and those who do not travel read only one
            page.”
          </b-card-text>
          <div class="row">
            <b-form @submit.prevent="search">
              <div class="col-12 d-flex justify-content-center">
                <b-form-input
                  size="sm"
                  class="w-50 mx-3"
                  placeholder="Search country"
                  v-model="runtimeTranscription_"
                ></b-form-input>

                <b-button
                  size="sm"
                  class=""
                  variant="outline-primary"
                  type="submit"
                  >Search</b-button
                >

                <b-button
                  size="sm"
                  class="mx-3"
                  variant="outline-primary"
                  @click="startSpeechToTxt"
                  >Record</b-button
                >
                <!-- <div class="voice">
                  <p>{{ transcription_ }}</p>
                </div> -->
              </div>
            </b-form>
          </div>
          <div class="row">
            <div class="col-12 d-flex justify-content-center">
              <b-form-select
                class="m-3"
                aria-labelledby="dropdownMenuLink"
                :options="[
                  { text: 'type...', value: null, disabled: true },
                  'country',
                  'city',
                ]"
                v-model="type"
              ></b-form-select>
            </div>
          </div>
        </b-card>
      </div>
    </div>

    <div class="container">
      <h1 class="m-4">Recomendation</h1>
      <!-- <span v-show="countries.length !== 0">in {{country}}</span> -->
      <div class="row m-3">
        <div v-for="e in countries" :key="e.name" class="col-4 my-4">
          <b-card
            :title="e.name"
            :img-src="e.imgUrl"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mx-auto"
          >
            <!-- <b-card-text>
              {{e.description}}
            </b-card-text> -->
            <!-- img-src="https://picsum.photos/600/300/?image=25" -->

            <b-button @click="toDetailPage(e.id)" href="#" variant="primary"
              >Go here</b-button
            >
            <a
              href="#"
              class="btn bookmark m-2"
              id="bookmarkIcon"
              @click="addBookmark(e.id)"
            >
              <b-icon icon="bookmark-star" /> Save
            </a>
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
    return {
      country: "",
      runtimeTranscription_: "",
      transcription_: [],
      // lang_: "es-ES",
      lang_: "id-ID",
      type: "",
    };
  },
  methods: {
    search() {
      let payload = this.runtimeTranscription_;

      if (this.type === "city") {
        this.$store.dispatch("searchCity", payload);
        Swal.fire({
          title: "Loading",
          timer: 5000,
          showConfirmButton: false,
          timerProgressBar: true,
        });
      } else {
        this.$store.dispatch("searchCountry", payload);
        Swal.fire({
          title: "Loading",
          timer: 5000,
          showConfirmButton: false,
          timerProgressBar: true,
        });
      }
    },
    addBookmark(id) {
      this.$store.dispatch("addBookmark", id);
    },
    toDetailPage(index) {
      this.$router.push(`/detail/${index}`);
    },
    startSpeechToTxt() {
      // initialisation of voicereco
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Start recording",
        showConfirmButton: false,
        timer: 1500,
      });
      window.SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new window.SpeechRecognition();
      recognition.lang = this.lang_;
      recognition.interimResults = true;

      // event current voice reco word
      recognition.addEventListener("result", (event) => {
        var text = Array.from(event.results)
          .map((result) => result[0])
          .map((result) => result.transcript)
          .join("");
        this.runtimeTranscription_ = text;
      });
      // end of transcription
      recognition.addEventListener("end", () => {
        this.transcription_.push(this.runtimeTranscription_);
        // this.runtimeTranscription_ = "";
        recognition.stop();
        this.search();
      });
      recognition.start();
    },
  },
  computed: {
    countries() {
      return this.$store.state.countries;
    },
  },
  created() {
    if (localStorage.access_token) {
      this.$store.commit("LOGIN");
    }
  },
};
</script>

<style scoped>
#bookmarkIcon {
  color: #66adeb;
  background-color: white;
  border-color: #66adeb;
}

#bookmarkIcon:hover {
  color: white;
  background-color: #66adeb;
  border-color: #66adeb;
}
</style>
