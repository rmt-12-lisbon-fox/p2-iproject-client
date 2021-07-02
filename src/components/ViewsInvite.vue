<template>
  <section
    class="bg-yellow-200 text-center items-center"
    v-if="dataViewsInvite"
  >
    <iframe
      title="deezer-widget"
      :src="`https://widget.deezer.com/widget/dark/${dataViewsInvite.Music[0].musicUrl}`"
      width="100%"
      height="300"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media; clipboard-write"
    ></iframe>
    <div>
      <img :src="dataViewsInvite.Tamplate.imgT" />
    </div>
    <div>{{ dataViewsInvite.nameMale }} & {{ dataViewsInvite.nameFemale }}</div>
    <br />
    <div>{{ dataViewsInvite.loveStory }}</div>
    <br />
    <div>{{ dataViewsInvite.dateAkad.slice(0, 10) }}</div>
    <br />
    <div>
      <div class="mapouter item-center">
        <div class="gmap_canvas">
          <!-- {{ dataViewsInvite.addressAkad }} -->
          <iframe
            width="500"
            height="300"
            id="gmap_canvas"
            :src="`https://maps.google.com/maps?q=${dataViewsInvite.addressAkad}&t=&z=13&ie=UTF8&iwloc=&output=embed`"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
      </div>
    </div>
    <br />
    <div>{{ dataViewsInvite.dateReception.slice(0, 10) }}</div>
    <br />
    <div>
      <iframe
        width="500"
        height="300"
        id="gmap_canvas"
        :src="`https://maps.google.com/maps?q=${dataViewsInvite.addressReception}&t=&z=13&ie=UTF8&iwloc=&output=embed`"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
      ></iframe>
    </div>
    <br />
    <div>
      <img :src="dataViewsInvite.Tamplate.imgB" />
    </div>
  </section>
</template>

<script>
export default {
  name: "ViewsInvite",
  computed: {
    dataViewsInvite() {
      return this.$store.state.dataViewsInvite;
    },
  },
  methods: {
    viewsInvite() {
      this.$store.dispatch("dataInvited", localStorage.idViewsInvite);
    },
  },
  created() {
    if (localStorage.idViewsInvite) {
      this.viewsInvite();
    }
  },
};
</script>


<style>
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  height: 500px;
  width: 600px;
}
.mapouter {
  position: relative;
  text-align: right;
  height: 500px;
  width: 600px;
}
</style>

