<template>
  <div class="container">
    <div class="row">
      <div class="col-8">
        <img :src="comedian.imgUrl" class="comedian-img" style="margin-top: 50px">
      </div>
      <div class="col-4">
        <h2 style="color: white" class="comedian-name">Name: {{comedian.name}}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  computed: {
    comedian () {
      return this.$store.state.comedian
    }
  },
  methods: {
    seeProfile (id) {
      this.$store.dispatch('seeProfile', id)
    }
  },
  created () {
    this.seeProfile(this.$route.params.id)
  }
}
</script>

<style>
.comedian-img {
  width: 350px;
  height: 300px;
}

.comedian-name {
  margin-top: 50px;
}
</style>
