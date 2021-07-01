<template>
  <div class="container">
    <div class="row width-50%">
      <img class="" :src="imgUrl" alt="" />
    </div>
    <div class="row m-3" id="detailBlog">
      <div class="row">
        <div class="col-md-8 blog-main">
          <div class="blog-post">
            <h2 class="blog-post-title">{{ name }}</h2>
            <p class="blog-post-meta">Wikipedia</p>

            <hr />
            <p>
              {{ description }}
            </p>
            <hr />
          </div>
          <h3 class="blog-post-title">Location</h3>
          <div class="mapouter mx-auto my-3 py-3">
            <div class="gmap_canvas">
              <iframe
                width="600"
                height="500"
                id="gmap_canvas"
                :src="mapSrc"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe
              ><a href="https://2piratebay.org"></a><br />
              ><a href="https://www.embedgooglemap.net">embed map</a>
            </div>
          </div>
        </div>
        <!-- /.blog-main -->

        <aside class="col-md-4 blog-sidebar">
          <div class="p-3 mb-3 bg-light rounded">
            <h4 class="font-italic"></h4>
          </div>
          <div class="py-3 mb-3 rounded col-12">
            <b-dropdown
              id="dropdown-form"
              text="Share"
              ref="dropdown"
              variant="primary"
              class="m-3 col-12"
            >
              <b-dropdown-form class="p-0" @submit.prevent="share">
                <b-form-group
                  label="email here"
                  label-for="dropdown-form-email"
                  class="my-3 col-12"
                >
                  <b-form-input
                    id="dropdown-form-email"
                    size="sm"
                    class="my-3 col-12"
                    placeholder="email@example.com"
                    v-model="email"
                  ></b-form-input>
                </b-form-group>

                <b-button variant="primary" type="submit" size="sm"
                  >Share</b-button
                >
              </b-dropdown-form>
            </b-dropdown>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailPage",
  computed: {
    savedPlaces() {
      for (let i = 0; i < this.$store.state.savedPlaces.length; i++) {
        if (+this.$store.state.savedPlaces[i].id === +this.$route.params.id) {
          return this.$store.state.savedPlaces[i];
        }
      }
    },
    name() {
      return this.savedPlaces.name;
    },
    description() {
      return this.savedPlaces.description;
    },
    imgUrl() {
      return this.savedPlaces.imgUrl;
    },
    mapSrc() {
      return this.$store.state.mapUrl
    },
  },
  data() {
    return {
      email: "",
    };
  },

  methods: {
    share() {
      let payload = {
        id: this.$route.params.id,
        email: this.email,
        name: this.name,
      };
      this.$store.dispatch("share", payload);
    },
  },
  created() {
    this.$store.commit('UPDATEMAPURL', this.name) 
  }
};
</script>

<style scoped>
#detailBlog {
  text-align: left;
}

.mapouter {
  position: relative;
  text-align: right;
  height: 500px;
  width: 600px;
}

.gmap_canvas {
  overflow: hidden;
  background: none !important;
  height: 500px;
  width: 600px;
}
</style>