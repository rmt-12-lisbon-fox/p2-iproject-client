<template>
    <div class="pt-14 h-screen">
        <review-list
        :reviews="reviews"></review-list>
  </div>
</template>

<script>
import ReviewList from '../components/ReviewList.vue'
import { mapState } from 'vuex';

export default {
    name: 'MyComment',
    components: {
        ReviewList,
    },
    methods: {
        listOfReviewByUser() {
        this.$store.dispatch('listOfReviewByUser');
        }
    },
    created() {
        this.listOfReviewByUser();
    },
    computed: mapState([
        'reviews'
    ])
}
</script>

<style>

</style>