<template>
    <div class="card" style="border-radius: 20px; box-shadow: 2px 1px #888888; background-color: #ebebeb; margin-right:5px; margin-bottom:20px">
        <div class="card-body d-flex m-3 justify-content-between">
            <div class='card-reviewer' style='width: 25%'>
                <div class="d-flex justify-content-between">
                    <a href=# class="card-title"><h5>{{`${review.reviewer}`}}</h5></a>
                </div>
                <p class='mb-0 mt-0'>{{review.Founder.region}}</p>
                <p>{{review.Founder.company_industry}}</p>
            </div>
            <div class="card-rating" style='width: 85%; padding-right:10%'>
                <div class="d-flex justify-content-left align-middle">
                    <a href=# class="card-title d-flex align-middle" style='width:80%; align-items:center'><h5 style='margin-right:15px'>{{review.Investor.name}}</h5>
                        <a class="badge" :class='badgeClass' style='height:20px; margin-bottom: .3rem' href='#'>{{review.Investor.status}}</a>
                    </a>
                    <i :class='likeIcon' href='#'>{{`${review.likes} likes`}}</i>
                </div>
                <div class="d-flex justify-content-left">
                    <h6>{{`"${review.title}"`}}</h6><br>
                    <p style='margin-left:20px; margin-right:20px' :class="starColor(review.rating_overall)">{{toStarRemark(review.rating_overall)}}</p>
                </div>
                <p class="card-text" :class="{'overflow-ellipsis': overflow}">{{review.review}}</p>
                <router-link :to="`/review/${review.id}`">
                <a href="#" class="btn btn-primary">Read More</a>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ReviewCard',
  props: ['review', 'index'],
  data () {
    return {
      badgeClass: 'bg-secondary',
      overflow: true,
      expand: 'Read More'
    }
  },
  methods: {
    expandToggle () {
      if (this.overflow == true) {
        this.overflow = false
      } else {
        this.overflow = true
      }

      if (this.expand == 'Read More') {
        this.expand = 'Read Less'
      } else {
        this.expand = 'Read More'
      }
    },
    changeBadge () {
      if (this.review.Investor.status == 'Verified') {
        this.badgeClass = 'bg-success'
      } else {
        this.badgeClass = 'bg-secondary'
      }
    },
    toStarRemark (rating) {
      let star = ''

      if (rating == 0) {
        return 'N/A'
      }

      for (let i = 0; i < rating; i++) {
        [
          star += '★'
        ]
      }

      if (rating == 5) {
        star += ' - Excellent'
      } else if (rating == 4) {
        star += ' - Very Good'
      } else if (rating == 3) {
        star += ' - Good'
      } else if (rating == 2) {
        star += ' - Poor'
      } else if (rating == 1) {
        star += ' - Very Poor'
      }

      return star
    },
    toStar (rating) {
      let star = ''

      if (rating == 0) {
        return 'N/A'
      }

      for (let i = 0; i < rating; i++) {
        [
          star += '★'
        ]
      }

      if (rating == 5) {
        star += ' (5)'
      } else if (rating == 4) {
        star += ' (4)'
      } else if (rating == 3) {
        star += ' (3)'
      } else if (rating == 2) {
        star += ' (2)'
      } else if (rating == 1) {
        star += ' (1)'
      }

      return star
    },
    starColor (star) {
      if (star > 3) {
        return 'green-star'
      } else if (star == 3) {
        return 'yellow-star'
      } else {
        return 'red-star'
      }
    }
  },
  computed: {
    likeIcon () {
      let icon = this.tempIcon

      for (let i = 0; i < this.review.likes_id.length; i++) {
        if (localStorage.id == this.review.likes_id[i]) {
          icon = 'fas fa-bookmark'
        }
      }

      if (!this.isLoggedIn) {
        icon = 'far fa-thumbs-up'
      }
      return icon
    }
  },
  created () {
    this.changeBadge()
    this.$store.commit('LOGINPAGEOFF')
  }
}
</script>

<style>

</style>
