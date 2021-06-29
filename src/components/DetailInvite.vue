<template>
  <section class="bg-yellow-200 text-center items-center">
    <iframe
      title="deezer-widget"
      :src="`https://widget.deezer.com/widget/dark/${music[0].musicUrl}`"
      width="100%"
      height="300"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media; clipboard-write"
    ></iframe>
    <div>
      <img :src="dataTamplateById.imgT" />
    </div>
    <div>nama dan foto mempelai</div>
    <div>Love Story</div>
    <div>Date</div>
    <div>
      <img :src="dataTamplateById.imgB" />
    </div>
  </section>
</template>

<script>
export default {
  name: "DetailInvite",
  computed: {
    dataTamplateById() {
      return this.$store.state.dataTamplateById;
    },
    music() {
      return this.$store.state.music;
    },
  },
  methods: {
    views() {
      this.$store.dispatch("views", localStorage.id);
    },
  },
  created() {
    if (localStorage.id) {
      this.views();
    }
  },
};
</script>

<style>
</style>