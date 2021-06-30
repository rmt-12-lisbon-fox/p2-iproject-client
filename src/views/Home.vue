<template>
<!-- HOME PAGE -->
    <section id="home" class='subBody'>

    <!-- REVIEWS -->
    <div tyle='padding-top:20px; padding-left:5%; padding-right: 5px;'>

        <h1 style='color:black; text-shadow: 2px 2px 4px #868686'>All Reviews</h1><br>
        <h5 style='color:darkslategray'>{{`${totalReview} reviews from ${totalFounder} founder`}}s</h5><br>

        <div class="row" style='padding-top:20px; padding-left:5px; padding-right: 5px; padding-bottom: 10px'>

        <ReviewCard v-for="(review, index) in reviews" :key='review.id' :review='review' :index='index'/>
    </div>
    </div>

    <!-- closing tag section home page -->
        <hr style='margin:unset; margin-bottom: 20px'>
    </section>
</template>

<script>
import ReviewCard from '@/components/ReviewCard.vue'

export default {
  name: 'Home',
  data() {
      return {
          totalReview: 0,
          totalFounder: 0
      }
  },
  components: {
      ReviewCard
  },
  methods: {
      totalReviewCount() {
          this.totalReview = this.reviews.length
      },
      totalFounderCount() {
          let ids = []
          for (let i = 0; i < this.reviews.length; i++) {
              if (ids.includes(this.reviews[i].Founder.id) == false) {
                    ids.push(this.reviews[i].Founder.id)
              }
          }
          this.totalFounder = ids.length
      }
  },
  computed: {
      reviews() {
          return this.$store.state.reviews
      }
  },
  created() {
      this.$store.dispatch('getReviews')
      this.totalReviewCount()
      this.totalFounderCount()
  }

}
</script>
