<template>
    <div class="h-auto p-10 grid grid-cols-1 gap-5 place-content-center place-items-center">
        <review-item
        v-for="review in reviews" :key="review.id"
        :review="review"></review-item>
    </div>
</template>

<script>
import ReviewItem from './ReviewItem.vue'

export default {
    name: 'ReviewList',
    components: {
        ReviewItem
    },
    props: ['reviews']
}
</script>

<style>

</style>