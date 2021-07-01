<template>
<div id="reviewDetails" class='subBody'>
    <div class="card" style="border-radius: 20px; box-shadow: 2px 1px #888888; background-color: #ebebeb; margin-right:5px; margin-bottom:20px">
        <div class="card-body d-flex m-3 justify-content-between">
            <div class='card-reviewer' style='width: 25%'>
                <div class="d-flex justify-content-between">
                    <a href=# class="card-title"><h5>{{`${reviewItem.reviewer}`}}</h5></a>
                </div>
                <p class='mb-0 mt-0'>{{reviewItem.Founder.region}}</p>
                <p>{{reviewItem.Founder.company_industry}}</p>
            </div>
            <div class="card-rating" style='width: 85%; padding-right:10%'>
                <div class="d-flex justify-content-left align-middle">
                    <a href=# class="card-title d-flex align-middle" style='width:80%; align-items:center'><h5 style='margin-right:15px'>{{reviewItem.Investor.name}}</h5>
                        <a class="badge" :class='badgeClass' style='height:20px; margin-bottom: .3rem' href='#'>{{reviewItem.Investor.status}}</a>
                    </a>
                    <a href><i :class='likeIcon' href='#' @click.prevent='addLike'>{{`${reviewItem.likes} likes`}}</i></a>
                </div>
                <div class="d-flex justify-content-left">
                    <h6 style='width: 85%; '>{{`"${reviewItem.title}"`}}</h6><br>
                </div><br>
                <div class="d-flex justify-content-left">
                    <p style='width: 25%; font-weight:bold'>Investor Role</p><br>
                    <p style='margin-left:20px; margin-right:20px'>{{reviewItem.investor_role}}</p>
                </div>
                <div class="d-flex justify-content-left">
                    <p style='width: 25%; font-weight:bold'>Investment Stage</p><br>
                    <p style='margin-left:20px; margin-right:20px'>{{reviewItem.investment_stage}}</p>
                </div>

                <div>
                    <a href='#' class="sidebar text-dark collapsed" data-bs-toggle="collapse" data-bs-target="#genre-collapse1">
                        <div class="d-flex justify-content-left">
                            <p style='width: 25%; font-weight:bold' class='dropdown-toggle'>Overall rating</p><br>
                            <p style='margin-left:20px; margin-right:20px' :class="starColor(reviewItem.rating_overall)">{{toStarRemark(reviewItem.rating_overall)}}</p>
                        </div>
                    </a>
                    <div class="collapse mb-3" id="genre-collapse1">
                        <div class="d-flex justify-content-left">
                            <p style='width: 25%; padding-left: 10px'>Professionalism</p><br>
                            <p style='margin-left:20px; margin-right:20px'>{{toStar(reviewItem.rating_professionalism)}}</p>
                        </div>
                        <div class="d-flex justify-content-left">
                            <p style='width: 25%; padding-left: 10px'>Speed</p><br>
                            <p style='margin-left:20px; margin-right:20px'>{{toStar(reviewItem.rating_speed)}}</p>
                        </div>
                        <div class="d-flex justify-content-left">
                            <p style='width: 25%; padding-left: 10px'>DD Complexity</p><br>
                            <p style='margin-left:20px; margin-right:20px'>{{toStar(reviewItem.rating_dd_complexity)}}</p>
                        </div>
                        <div class="d-flex justify-content-left">
                            <p style='width: 25%; padding-left: 10px'>Post-Investment Support</p><br>
                            <p style='margin-left:20px; margin-right:20px'>{{toStar(reviewItem.rating_post_inv_support)}}</p>
                        </div>
                        <div class="d-flex justify-content-left">
                            <p style='width: 25%; padding-left: 10px'>Founder Friendly</p><br>
                            <p style='margin-left:20px; margin-right:20px'>{{toStar(reviewItem.rating_founder_friendly)}}</p>
                        </div>
                    </div>
                </div>
                <p class="card-text" :class="{'overflow-ellipsis-details': overflow}">{{reviewContent}}</p>
                <a v-if='expandButton' href="#" style='margin-right: 15px' class="dropdown-toggle" @click.prevent='expandToggle'>{{expand}}</a>
                <div style='margin-top:20px'>
                <label style='color:darkblue'><b>Translate Review</b></label>
                <form class='d-flex' @submit.prevent='translate'>
                    <select name='trans_lang' v-model="trans_lang">
                        <option value='' disable selected hidden>---Select Language---</option>                                                                               
                        <option value='en'>English</option>
                        <option value='id'>Indonesia</option>
                        <option value='it'>Italian</option>
                        <option value='zh-CN'>Chinese</option>
                        <option value='es'>Spanish</option>
                        <option value='fr'>French</option>
                        <option value='ja'>Japanese</option>
                        <option value='de'>German</option>
                    </select><br><br>
                    <button class="confirmbtn" style=width:52% type="submit">Translate</button>
                </form>
            </div>
            </div>
        </div>
    </div>
    <Disqus shortname="ryi" :lang="lang" :pageConfig="pageConfig"/>
</div>
</template>

<script>
import { Disqus } from 'vue-disqus' 
import router from '../router'
export default {
    name: 'ReviewDetails',
    components: { Disqus },
    data() {
        return {
            tempIcon: 'far fa-thumbs-up',
            badgeClass: 'bg-secondary',
            overflow: true,
            expand: 'Expand',
            lang: 'en',
            baseURI: document.baseURI,
            discuss: false,
            expandButton: true,
            btn: 'btn-primary',
            trans_lang: '',
            reviewContent: '',
            reviewItem: {                
                reviewer: '',
                Founder: {
                    region: '',
                    company_industry: ''
                },
                Investor: {
                    status: '',
                    name: ''
                },
                investor_role: '',
                investment_stage: '',
                likes: '',
                likes_id: [],
                title: '',
                rating_overall: '',
                rating_professionalism: '',
                rating_speed: '',
                rating_post_inv_support: '',
                rating_dd_complexity: '',
                rating_founder_friendly: ''
            }
        }
    },
    methods: {
        translate() {
            console.log('MASUK TRANSLATE')
            let reviewId = this.$route.params.id
            let lang = this.trans_lang

            let data = {
                reviewId,
                lang
            }
            this.$store.dispatch('translate', data)
        },
        refreshTranslation() {
            console.log('REFRESH TRANSLATE')
            if (this.translation != '') {
                this.reviewContent = this.translation
            }
        },
        addLike() {
            let reviewId = this.$route.params.id
            console.log(reviewId)
            this.$store.dispatch('addLike', reviewId)
            router.push({ path: `/review/${this.$route.params.id}` }).catch(() => {})
        },
        getReviewById() {
            // console.log('CALL METHODDDD')
            let reviewId = this.$route.params.id
            console.log(reviewId)
            this.$store.dispatch('getReviewDetail', reviewId)
            this.reviewContent = this.$store.state.review.review
        },
        discussSetup() {
            this.discuss = true
            $disqus.reset()
        },
        newComment (e) {
          console.log(e)
        },
        expandToggle() {
            if (this.overflow == true) {
                this.overflow = false
            } else {
                this.overflow = true
            }

            if (this.expand == 'Expand') {
                this.expand = "Collapse"
                this.btn = 'btn-secondary'
            } else {
                this.expand = 'Expand'
                this.btn = 'btn-primary'
            }
        },
        changeBadge() {
            if(this.reviewItem.Investor.status == 'Verified') {
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
    watch: {
        review: function (val) {
            this.reviewContent = val.review
            this.reviewItem = val
            if (this.reviewContent.length <= 171) {
                this.expandButton = false
            }
        },
        translation: function (val) {
            this.reviewContent = val
        }
    },
    computed: {
        isLoggedIn() {
            return this.$store.state.isLoggedIn
        },
        translation() {
            return this.$store.state.translation
        },
        likeIcon () {
            let icon = this.tempIcon

            for (let i = 0; i < this.reviewItem.likes_id.length; i++) {

                if (localStorage.id == this.reviewItem.likes_id[i]) {
                icon = 'fas fa-thumbs-up'
                }
            }

            if (!this.isLoggedIn) {
                icon = 'far fa-thumbs-up'
            }

            return icon
        },
        pageConfig() {
            let config = {}
            let identifier = `${this.$route.params.id}`

            return {identifier}
        },
        review() {
            return this.$store.state.review
        }
    },
    created() {
        this.getReviewById()
        this.changeBadge()
        this.$store.commit('LOGINPAGEOFF')
        router.push({ path: `/review/${this.$route.params.id}` }).catch(() => {})
    },
    beforeUpdate() {
        this.changeBadge()
    },
}
</script>

<style>

</style>
