<template>
      <section id="add-investor" class='subBody' style="margin-bottom:2rem">
        <div style='padding-top:20px; padding-left:5%; padding-right: 5px;'>

        <h1 style='color:black; text-shadow: 2px 2px 4px #868686'>Register New Investor</h1><br>

        <div class = 'card'>
            <div class= "card-body" style="overflow-x: scroll; padding-top: 0px">
                <p style='margin-top:25px; color:darkred; text-align:center'>After registering, you will need to wait for the investor to be verified before you can review this investor. This may take several hours. You will be notified via whatsapp</p>

                <form @submit.prevent='registerInvestor'>

                    <label style='margin-top:30px'><b>Investor Name*</b></label><br>
                    <input type='text' name='name' placeholder="Investor Name" v-model="newInvestor.name" required><br><br>

                    <label><b>Company Name (if different)</b></label><br>
                    <input type='text' name='company_name' placeholder="Leave blank if the same with Investor name" v-model="newInvestor.company_name"><br><br>

                    <div class='d-flex justify-content-between' style='margin-top: 10px; margin-bottom: 20px;width:90%; height: 100px'>
                        <div style='width:45%'>
                            <label><b>Region*</b></label>
                            <select style='width:100%; margin:auto' name='region' v-model="newInvestor.region" required>
                                <option value=''>---SELECT---</option>
                                <option value='Southeast Asia'>Southeast Asia</option>
                                <option value='China & Hong-Kong'>China & Hong-Kong</option>
                                <option value='Japan & Korea'>Japan & Korea</option>
                                <option value='India & Pakistan'>India & Pakistan</option>
                                <option value='Outside Asia'>Outside Asia</option>
                            </select>
                        </div>
                        <div style='width:45%'>
                            <label><b>Industry*</b></label>
                            <select style='width:100%; margin:auto' name='industry' v-model="newInvestor.industry" required>
                                <option value=''>---SELECT---</option>
                                <option value='Food & Beverage'>Food & Beverage</option>
                                <option value='Health & Medicine'>Health & Medicine</option>
                                <option value='Media & Entertainment'>Media & Entertainment</option>
                                <option value='Travel & Leisure'>Travel & Leisure</option>
                                <option value='Financial Services'>Financial Services</option>
                                <option value='E-Commerce & Retail'>E-Commerce & Retail</option>
                                <option value='Arts & Crafts'>Arts & Crafts</option>
                                <option value='Multi-Industry'>Multi-Industry</option>
                            </select>
                        </div>
                    </div>

                    <div class='d-flex justify-content-between' style='width:90%'>

                        <div style='width:45%'>
                            <label><b>Linkedin URL</b></label>
                            <input type="text" style='width:100%' id='registerName' placeholder="Your Linkedin Profile" name="linkedin_url" v-model="newInvestor.linkedin_url">
                            </div>
            
                           <div style='width:45%'>
                            <label><b>Website URL</b></label>
                            <input type="text" placeholder="Include https:// (e.g https://www.rate-your-investor.com)" name="website_url" v-model="newInvestor.website_url">
                        </div>
        
                    </div>

                    <label style='margin-top:20px'>Investor_type*</label><br>
                    <select name='investor_type' v-model='newInvestor.investor_type' required>
                        <option value=''>---SELECT---</option>
                        <option value='Angel Investor'>Angel Investor (Individual)</option>
                        <option value='Venture Capital'>Venture Capital (VC)</option>
                        <option value='Private Equity'>Private Equity (PE)</option>
                        <option value='Other'>Other</option>
                    </select><br><br>

                    <div class='d-flex' style='margin-bottom:10px'>
                        <input type='checkbox' required id='declaration' style='margin-top:5px; margin-right:10px'>
                        <div>I certify that the investor I am registering is real. I acknowledge that in order to add a new review, this investor will need to be verified, and I am willing to wait for the proper process.</div><br>
                    </div>

                    <div class='d-flex justify-content-between'>
                    <button class="confirmbtn" style='width:47%;border-radius: 20px;' type="submit">Register</button>
                    <button class="redbtn" style="width:47%;border-radius: 20px; display: inline" @click.prevent="toAddReview">Cancel</button>
                </div>
                </form>
            </div>
        </div>
        </div>
    </section>
</template>

<script>
import router from '../router'
export default {
    name: 'AddInvestor',
    data() {
        return {
            newInvestor: {
                name: '',
                company_name: '',
                region: '',
                industry: '',
                website_url: '',
                linkedin_url: '',
                investor_type: '',
            }
        }
    },
    methods: {
        toAddReview() {
            router.push({ path: `/add-review#add-review`})
        },
        registerInvestor() {
            let investor = this.newInvestor
            this.$store.dispatch('registerInvestor', investor)
        }
    }
}
</script>

<style>

</style>