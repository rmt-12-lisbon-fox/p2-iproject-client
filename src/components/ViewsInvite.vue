<template>
  <section class="bg-yellow-200 text-center items-center">
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
    <div>{{ dataViewsInvite.addressAkad }}</div>
    <br />
    <div>{{ dataViewsInvite.dateReception.slice(0, 10) }}</div>
    <br />
    <div>{{ dataViewsInvite.addressReception }}</div>
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
      this.$store.dispatch("viewsInvite", localStorage.idViewsInvite);
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
</style>