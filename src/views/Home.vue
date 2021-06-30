<template>
  <div class="pt-14 h-screen">
    <review-list
    :reviews="reviews"></review-list>
  </div>
</template>

<script>
// @ is an alias to /src
import ReviewList from '../components/ReviewList.vue';
import { mapState } from 'vuex';

export default {
  name: 'Home',
  components: {
    ReviewList
  },
  methods: {
    listOfReview() {
      this.$store.dispatch('listOfReview');
    }
  },
  created() {
    this.listOfReview();
  },
  computed: mapState([
    'reviews'
  ])
}
</script>
