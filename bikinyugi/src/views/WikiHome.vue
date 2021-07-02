<template>
  <div id="wiki-home" class="container">
      <div class="container-fluid px-1 py-5 mx-auto justify-content-around">
    <div class="row d-flex">
        <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
            <div class="card">
                <h5 class="text-center mb-4">Card Search</h5>
                <form class="form-card" @submit.prevent="wikiSearch">
                    <div class="row justify-content-between text-left">
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Name</label> <input type="text" placeholder="ex: kuriboh" v-model="name"> </div>
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Type</label> <input type="text" placeholder="ex: spell card" v-model="type"> </div>
                    </div>
                    <div class="row justify-content-between text-left">
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Attribute</label> <input type="text" placeholder="ex: earth" v-model="attribute"> </div>
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Sets</label> <input type="text" placeholder="ex: cotd" v-model="card_sets"> </div>
                    </div>
                    <div class="row justify-content-between text-left">
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Archetype</label> <input type="text" placeholder="ex: magician" v-model="archetype"> </div>
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Banlist Information</label> <input type="text" placeholder="ex: limited" v-model="banlist_info"> </div>
                    </div>
                    <div class="row justify-content-between text-left">
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Link Rating</label>
                        <select
                              name=""
                              class="form-control form-control-sm mw-100 w-100 m-1 h-100"
                              v-model="linkval"
                            >
                              <option value="" class="text-muted">Link Rating</option>
                              <option :value="i" v-for="i in 6" :key="i">{{ i }}</option>
                            </select>
                         </div>
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Link Marker</label> <input type="text" placeholder="ex: bottom-left" v-model="linkmarkers"> </div>
                    </div>
                    <div class="row justify-content-start text-left">
                        <div class="form-group col-sm-3 flex-column d-flex"> <label class="form-control-label px-3">Level/Rank</label>
                          <div class="col">
                            <select
                              name=""
                              class="form-control form-control-sm mw-100 w-100 m-1 h-75"
                              v-model="level"
                            >
                              <option value="" class="text-muted">Level</option>
                              <option :value="i" v-for="i in 13" :key="i">{{ i }}</option>
                            </select>
                          </div>
                         </div>
                        <div class="form-group col-sm-3 flex-column d-flex"> <label class="form-control-label px-3">Scale</label>
                          <div class="col">
                            <select
                              name=""
                              class="form-control form-control-sm mw-100 w-100 m-1 h-75"
                              v-model="level"
                            >
                              <option value="" class="text-muted">Scale</option>
                              <option :value="i-1" v-for="i in 14" :key="i-1">{{ i-1 }}</option>
                            </select>
                          </div>
                         </div>
                         <div class="form-group col-sm-3 flex-column d-flex"> <label class="form-control-label px-3">Attack</label> <input type="number" placeholder="ex: 3000"> </div>
                         <div class="form-group col-sm-3 flex-column d-flex"> <label class="form-control-label px-3">Defense</label> <input type="number" placeholder="ex: 2500"> </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="form-group col-sm-3"> <button type="submit" class="btn-block btn-primary" @click="openSearch">Submit</button> </div>
                        <div class="form-group col-sm-3"> <button class="btn-block btn-secondary" @click="clearWiki">Clear</button> </div>
                    </div>
                </form>
            </div>
        </div>
                <div class="col mt-0">
                  <div class="card overflow-auto" style="max-height:26%;">
                  Latest Cards
          <form @submit.prevent="latestSearch">
              <button type="submit" class="btn btn-primary">Fetch</button>
          </form>
          <div class="row border border-2" v-for="latest in latestCards" :key="latest.id">
          <div class="col-4 py-1">
            <img :src="latest.card_images[0].image_url_small" alt="New Card" class="w-100">
          </div>
          <div class="col-8">
          <router-link :to="`/wiki/${latest.id}`">{{latest.name}} <span class="badge bg-primary" style="font-size: .50em; font-weight:500">NEW</span></router-link>
          <div class="row">
          <center><b>Card Popularity:</b></center>
          </div>
          <div class="row">
          Views This Week: {{latest.misc_info[0].viewsweek}}
          </div>
          <div class="row">
          Release Date: {{latest.misc_info[0].tcg_date ? latest.misc_info[0].tcg_date : 'Not announced yet'}}
          </div>
          <div class="row">
          Card Sets: {{latest.card_sets ? latest.card_sets[0].set_code : 'Not announced yet'}}
          </div>
          </div>
                  </div>
          </div>
      </div>
    </div>
</div>
<div id="myOverlay" class="overlay" v-if="showResult">
  <span class="closebtn" @click="closeSearch" title="Close Overlay">×</span>
  <div class="overlay-content">
    <!-- <form action="/action_page.php">
      <input type="text" placeholder="Search.." name="search">
      <button type="submit"><i class="fa fa-search"></i></button>
    </form> -->
      <div class="card mt-0">
          <div class="row">
                <div class="col-2 border" v-for="card in wikiResult" :key="card.cardId">
                <router-link :to="`/wiki/${card.cardId}`">{{card.name}}</router-link>
            </div>
          </div>
      </div>

  </div>
</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WikiHome',
  methods: {
    openSearch () {
      this.showResult = true
    },
    closeSearch () {
      this.showResult = false
    },
    clearWiki () {
      this.query = ''
      this.name = ''
      this.type = ''
      this.race = ''
      this.level = ''
      this.linkval = ''
      this.linkmarkers = ''
      this.scale = ''
      this.attribute = ''
      this.atk = ''
      this.def = ''
      this.archetype = ''
      this.banlist_info = ''
      this.card_sets = ''
      this.card_pricesM = ''
      this.card_pricesL = ''
      this.hideWiki = true
    },
    wikiSearch () {
      this.hideWiki = false
      const { name, type, race, level, linkval, linkmarkers, scale, attribute, atk, def, archetype, banlist_info, card_sets, card_pricesM, card_pricesL } = this
      this.$store.dispatch('fetchAllCards', { name, type, race, level, linkval, linkmarkers, scale, attribute, atk, def, archetype, banlist_info, card_sets, card_pricesM, card_pricesL, size: 30 })
    },
    twitterSearch () {
      this.$toasted.info('Please Wait..')
      this.$store.dispatch('fetchTwitter', this.query)
    },
    latestSearch () {
      this.$toasted.info('Please Wait..')
      this.$store.dispatch('latestSearch')
    }
  },
  data () {
    return {
      query: '',
      name: '',
      type: '',
      race: '',
      level: '',
      linkval: '',
      linkmarker: '',
      scale: '',
      attribute: '',
      atk: '',
      def: '',
      archetype: '',
      banlist_info: '',
      card_sets: '',
      card_pricesM: '',
      card_pricesL: '',
      hideWiki: true,
      showResult: false
    }
  },
  computed: {
    wikiResult () {
      return this.$store.state.allCards
    },
    tweets () {
      return this.$store.state.tweets
    },
    latestCards () {
      return this.$store.state.latestCards
    }
  }
}
</script>

<style scoped>
.openBtn {
  background: #f1f1f1;
  border: none;
  padding: 10px 15px;
  font-size: 20px;
  cursor: pointer;
}

.openBtn:hover {
  background: #bbb;
}

.overlay {
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.274);
}

.overlay-content {
  position: relative;
  top: 20%;
  width: 80%;
  text-align: center;
  margin-top: 30px;
  margin: auto;
}

.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
  cursor: pointer;
  color: white;
}

.overlay .closebtn:hover {
  color: #ccc;
}

.overlay input[type=text] {
  padding: 15px;
  font-size: 17px;
  border: none;
  float: left;
  width: 80%;
  background: white;
}

.overlay input[type=text]:hover {
  background: #f1f1f1;
}

.overlay button {
  float: left;
  width: 20%;
  padding: 15px;
  background: #ddd;
  font-size: 17px;
  border: none;
  cursor: pointer;
}

.overlay button:hover {
  background: #bbb;
}

body {
    color: #000;
    overflow-x: hidden;
    height: 100%;
    background-image: url("https://i.imgur.com/GMmCQHC.png");
    background-repeat: no-repeat;
    background-size: 100% 100%
}

.card {
    padding: 30px 40px;
    margin-top: 60px;
    margin-bottom: 60px;
    border: none !important;
    box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.2)
}

.blue-text {
    color: #00BCD4
}

.form-control-label {
    margin-bottom: 0
}

input,
textarea,
button {
    padding: 8px 15px;
    border-radius: 5px !important;
    margin: 5px 0px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    font-size: 18px !important;
    font-weight: 300
}

input:focus,
textarea:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    border: 1px solid #00BCD4;
    outline-width: 0;
    font-weight: 400
}

.btn-block {
    text-transform: uppercase;
    font-size: 15px !important;
    font-weight: 400;
    height: 43px;
    cursor: pointer
}

.btn-block:hover {
    color: #fff !important
}

button:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    outline-width: 0
}
</style>
