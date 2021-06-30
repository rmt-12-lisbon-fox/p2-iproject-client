<template>
        <div class="col-4 d-flex flex-column justify-content-center align-items-center my-4">
          <img :src="community.imageUrl" class="img-thumbnail rounded-circle mb-3" width="300">
          <h3>{{community.name}}</h3> <p class="text-center mt-2">{{community.description}}</p>
          <button class="btn btn-warning" @click.prevent="addMyCommunity(community.id)">Join Community</button>
        </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['community'],
  methods: {
    addMyCommunity (id) {
      this.$store.dispatch('addMyCommunity', id)
    }
  }
}
</script>

<style>

</style>
