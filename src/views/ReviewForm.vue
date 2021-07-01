<template>
      <!-- WRITE A REVIEW -->
    <section id="add-review" class='subBody' style="margin-bottom:2rem">
        <div tyle='padding-top:20px; padding-left:5%; padding-right: 5px;'>

        <h1 style='color:black; text-shadow: 2px 2px 4px #868686'>Write a New Review</h1><br>
        <h5 style='color:darkslategray'>Help other founders get the best insights of their future investors</h5><br><br>

        <h3 style='text-align:center'>Who Are You Reviewing?</h3><br>
        <div style="text-align:center">
        <select style='width:50%; margin:auto' name='InvestorId' v-model="newReview.InvestorId">
            <option value='' disable hidden selected>---SELECT---</option>
            <option v-for="(investor, index) in investors"
          :key="investor.id" :index='index' :investor='investor' :value='investor.id'>{{investor.name}}</option>
        </select>
        <p>Not finding your investor? Register a new investor <router-link to='/add-investor'>here</router-link></p><br><br>
        </div>

        <div class = 'card'>
            <div class= "card-header" style='background-color: white;'>
                <h3 style='font-weight: bold;'>Write a New Review</h3>
                <!-- <h6>Travel & Entertainment - Jakarta, Indonesia</h6> -->
            </div>
            <div class= "card-body" style="overflow-x: scroll; padding-top: 0px">
                <form @submit.prevent='addReview'>

                    <h6 style='margin-top:25px'>Details</h6>

                    <div style='width:40.5%'>
                        <label style='margin-top:20px'>Review As</label><br>
                        <select name='reviewer' v-model="newReview.reviewer">
                            <option value="">---SELECT---</option>
                            <option :value="reviewer">Myself</option>
                            <option value='Anonymous Founder'>Anonymous</option>
                        </select><br><br>
                    </div>

                    <div class='d-flex justify-content-between' style='margin-top: 10px; margin-bottom: 20px;width:90%; height: 100px'>
                        <div style='width:45%'>
                            <label>Investor's Role</label><br>
                             <select name='investor_role' v-model="newReview.investor_role">
                                <option value="Lead Investor" selected>Lead Investor</option>
                                <option value='Follow Investor'>Follow Investor</option>
                            </select><br><br>
                        </div>
                        <div style='width:45%'>
                            <label>Investment Stage</label><br>
                            <select name='investment_stage' v-model="newReview.investment_stage">
                                <option value="Seed" selected>Seed</option>
                                <option value='Pre Series-A'>Pre Series-A</option>
                                <option value='Series-A'>Series-A</option>
                                <option value='Pre Series-B'>Pre Series-B</option>
                                <option value='Series-B'>Series-B</option>
                                <option value='Series-C'>Series-C</option>
                                <option value='Series-D and Above'>Series-D and Above</option>
                            </select><br><br>
                        </div>
                    </div>

                    <h6>Ratings</h6>
                    <div class='d-flex' style='margin-bottom: 20px'>
                        <div class="rating">
                            <label>
                            <input type="radio" name="rating_overall" v-model='newReview.rating_overall' value="1"/>
                            <span class="icon">●</span>
                            </label>
                            <label>
                            <input type="radio" name="rating_overall" v-model='newReview.rating_overall' value="2" />
                            <span class="icon" >●</span>
                            <span class="icon" >●</span>
                            </label>
                            <label>
                            <input type="radio" name="rating_overall" v-model='newReview.rating_overall' value="3" />
                            <span class="icon" >●</span>
                            <span class="icon">●</span>
                            <span class="icon" >●</span>
                            </label>
                            <label>
                            <input type="radio" name="rating_overall" v-model='newReview.rating_overall' value="4" />
                            <span class="icon" >●</span>
                            <span class="icon" >●</span>
                            <span class="icon" >●</span>
                            <span class="icon" >●</span>
                            </label>
                            <label>
                            <input type="radio" name="rating_overall" v-model='newReview.rating_overall' value="5" />
                            <span class="icon">●</span>
                            <span class="icon">●</span>
                            <span class="icon">●</span>
                            <span class="icon">●</span>
                            <span class="icon">●</span>
                            </label>
                        </div>
                        <div style='align-items: center' class='d-flex'>
                            <p class='text-center align-middle' style='margin-bottom:unset; margin-top:10px; margin-left:10px'>Overall Rating</p>
                        </div>
                    </div>

                    <div class='d-flex justify-content-between' style='width:90%'>

                    <div style='width:28%'>
                    <label style='margin-top:20px'>Professionalism</label><br>
                    <select name='rating_professionalism' v-model='newReview.rating_professionalism'>
                        <option value='0'>---SELECT---</option>
                        <option value='1'>1 (Bad)</option>
                        <option value='2'>2 (OK) </option>
                        <option value='3'>3 (Good)</option>
                        <option value='4'>4 (Very Good)</option>
                        <option value='5'>5 (Excellent)</option>
                    </select><br><br>
                    </div>

                    <div style='width:28%'>
                    <label style='margin-top:20px'>Speed</label><br>
                    <select name='rating_speed' v-model='newReview.rating_speed'>
                        <option value='0'>---SELECT---</option>
                        <option value='1'>1 (Bad)</option>
                        <option value='2'>2 (OK) </option>
                        <option value='3'>3 (Good)</option>
                        <option value='4'>4 (Very Good)</option>
                        <option value='5'>5 (Excellent)</option>
                    </select><br><br>
                    </div>

                    <div style='width:28%'>
                    <label style='margin-top:20px'>DD Complexity</label><br>
                    <select name='rating_dd_complexity' v-model='newReview.rating_dd_complexity'>
                        <option value='0'>---SELECT---</option>
                        <option value='1'>1 (Bad)</option>
                        <option value='2'>2 (OK) </option>
                        <option value='3'>3 (Good)</option>
                        <option value='4'>4 (Very Good)</option>
                        <option value='5'>5 (Excellent)</option>
                    </select><br><br>
                    </div>

                   </div>

                   <div class='d-flex justify-content-between' style='width:90%'>

                    <div style='width:28%'>
                    <label style='margin-top:20px'>Post-Investment Support</label><br>
                    <select name='rating_post_inv_support' v-model='newReview.rating_post_inv_support'>
                        <option value='0'>---SELECT---</option>
                        <option value='1'>1 (Bad)</option>
                        <option value='2'>2 (OK) </option>
                        <option value='3'>3 (Good)</option>
                        <option value='4'>4 (Very Good)</option>
                        <option value='5'>5 (Excellent)</option>
                    </select><br><br>
                    </div>

                    <div style='width:28%'>
                    <label style='margin-top:20px'>Founder Friendly</label><br>
                    <select name='rating_founder_friendly' v-model='newReview.rating_founder_friendly'>
                        <option value='0'>---SELECT---</option>
                        <option value='1'>1 (Bad)</option>
                        <option value='2'>2 (OK) </option>
                        <option value='3'>3 (Good)</option>
                        <option value='4'>4 (Very Good)</option>
                        <option value='5'>5 (Excellent)</option>
                    </select><br><br>
                    </div>

                    <div style='width:28%'>

                    </div>

                   </div>

                    <h6 style='margin-bottom:30px; margin-top: 30px'>Review</h6>
                    <label>Title of Your Review</label><br>
                    <input type='text' name='title' v-model="newReview.title" required><br><br>
                    <label>Your Review</label><br>
                    <textarea style='width:100%; height:200px' name='review' placeholder="Write your detailed review here" v-model="newReview.review" required></textarea><br><br>
                    <div class='d-flex' style='margin-bottom:10px'>
                        <input type='checkbox' required id='declaration' style='margin-top:5px; margin-right:10px'>
                        <div>I certify that this review is based on my own experience and is my genuine opinion of this investor, and that I have no personal or business relationship with this investor, and have not been offered any incentive or payment originating from the investor to write this review. I understand that Rate Your Investor has a zero-tolerance policy on fake reviews.</div><br>
                    </div>
                    <button class="confirmbtn" style=width:50%; type="submit">Submit Review</button>
                    <button class="redbtn" style="width:50%;display: inline" @click.prevent="toMovieList">Cancel</button>
                </form>
            </div>
        </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'ReviewForm',
  data () {
    return {
      newReview: {
        title: '',
        reviewer: '',
        InvestorId: '',
        investor_role: 'Lead Investor',
        investment_stage: 'Seed',
        review: '',
        rating_overall: '0',
        rating_professionalism: '0',
        rating_speed: '0',
        rating_dd_complexity: '0',
        rating_post_inv_support: '0',
        rating_founder_friendly: '0'
      }
    }
  },
  methods: {
    addReview () {
      const review = this.newReview
      // console.log(review)
      this.$store.dispatch('addReview', review)
    }
  },
  computed: {
    users () {
      return this.$store.state.user
    },
    reviewer () {
      return this.$store.state.user.fullname
    },
    investors () {
      return this.$store.state.investors
    }
  },
  created () {
    this.$store.dispatch('fetchInvestors')
  }
}
</script>

<style>

</style>
