<template>
      <!-- WRITE A REVIEW -->
    <section id="add-movie" class='subBody' style="margin-bottom:2rem">
        <div tyle='padding-top:20px; padding-left:5%; padding-right: 5px;'>

        <h1 style='color:black; text-shadow: 2px 2px 4px #868686'>Write a New Review</h1><br>
        <h5 style='color:darkslategray'>Help other founders get the best insights of their future investors</h5><br><br>
<!--
        <div class="page-title shadow rounded bg-secondary bg-gradient">
            <h3>Who Are You Reviewing?</h3>
        </div> -->

        <h3 style='text-align:center'>Who Are You Reviewing?</h3><br>
        <div style="text-align:center">
        <select style='width:50%; margin:auto' name='InvestorId'>
            <option value='0'>---SELECT---</option>
            <option value='1'>1 (Bad)</option>
            <option value='2'>2 (OK) </option>
            <option value='3'>3 (Good)</option>
            <option value='4'>4 (Very Good)</option>
            <option value='5'>5 (Excellent)</option>
        </select>
        <p>Not finding your investor? Register a new investor <a href>here</a></p><br><br>
        </div>

        <!-- <div class="page-title shadow rounded bg-secondary bg-gradient">
            <h3>Who Are You Reviewing?</h3>
        </div> -->

        <div class = 'card'>
            <div class= "card-header" style='background-color: white;'>
                <h3 style='font-weight: bold;'>AJ Capital</h3>
                <h6>Travel & Entertainment - Jakarta, Indonesia</h6>
            </div>
            <div class= "card-body" style="overflow-x: scroll; padding-top: 0px">
                <form action="/">

                    <h6 style='margin-top:25px'>Details</h6>

                    <div style='width:40.5%'>
                        <label style='margin-top:20px'>Review As</label><br>
                        <select name='rating'>
                            <option value='0'>---SELECT---</option>
                            <option value='1'>Myself</option>
                            <option value='2'>Anonymous</option>
                        </select><br><br>
                    </div>

                    <div class='d-flex justify-content-between' style='margin-top: 10px; margin-bottom: 20px;width:90%; height: 100px'>
                        <div style='width:45%'>
                            <label>Investor's Role</label><br>
                            <input type='text' id='addMovie-title' name='title' placeholder="e.g Titanic" v-model="newMovie.title"><br><br>
                        </div>
                        <div style='width:45%'>
                            <label>Investment Stage</label><br>
                            <input type='text' id='addMovie-synopsis' name='synopsis' placeholder="Write your description here" v-model="newMovie.synopsis"><br><br>
                        </div>
                    </div>

                    <h6>Ratings</h6>
                    <div class='d-flex' style='margin-bottom: 20px'>
                        <div class="rating">
                            <label>
                            <input type="radio" name="stars" value="1"/>
                            <span class="icon">●</span>
                            </label>
                            <label>
                            <input type="radio" name="stars" value="2" />
                            <span class="icon" >●</span>
                            <span class="icon" >●</span>
                            </label>
                            <label>
                            <input type="radio" name="stars" value="3" />
                            <span class="icon" >●</span>
                            <span class="icon">●</span>
                            <span class="icon" >●</span>
                            </label>
                            <label>
                            <input type="radio" name="stars" value="4" />
                            <span class="icon" >●</span>
                            <span class="icon" >●</span>
                            <span class="icon" >●</span>
                            <span class="icon" >●</span>
                            </label>
                            <label>
                            <input type="radio" name="stars" value="5" />
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
                    <select name='rating'>
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
                    <select name='rating'>
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
                    <select name='rating'>
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
                    <select name='rating'>
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
                    <select name='rating'>
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
                    <input type='text' id='addMovie-title' name='title' placeholder="e.g Titanic" v-model="newMovie.title"><br><br>
                    <label>Your Review</label><br>
                    <input type='text' id='addMovie-synopsis' name='synopsis' placeholder="Write your description here" v-model="newMovie.synopsis"><br><br>
                    <div class='d-flex' style='margin-bottom:10px'>
                        <input type='checkbox' id='declaration' style='margin-top:5px; margin-right:10px'>
                        <div>I certify that this review is based on my own experience and is my genuine opinion of this hotel, and that I have no personal or business relationship with this establishment, and have not been offered any incentive or payment originating from the establishment to write this review. I understand that Tripadvisor has a zero-tolerance policy on fake reviews.</div><br>
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

}
</script>

<style>

</style>
