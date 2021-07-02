<template>
  <section class="bg-yellow-200 text-center items-center">
    <div>{{ detaiBlog.title }}</div>
    <div>
      <img :src="detaiBlog.img" />
    </div>
    <div>Author : {{ detaiBlog.author }}</div>
    <div>{{ detaiBlog.description }}</div>
  </section>
</template>

<script>
export default {
  name: "DetailInvite",
  computed: {
    detaiBlog() {
      return this.$store.state.detaiBlog;
    },
  },
  methods: {
    detail() {
      this.$store.dispatch("detail", localStorage.id_blog);
    },
  },
  created() {
    if (localStorage.id) {
      this.detail();
    }
  },
};
</script>

<style>
</style>