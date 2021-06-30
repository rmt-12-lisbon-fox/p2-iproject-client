<template>
  <div>
    <section class="py-5 text-center container" style="margin-bottom: -700px;">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light">YOUR COMMUNITY</h1>
        <p class="lead text-muted">Welcome to Healing</p>
        <p>
        </p>
      </div>
    </div>
  </section>
  <div class="album py-5 bg-light">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 justify-content-center">
        <div class="col" v-for="el in myCommunity[0].Communities" :key="el.id">
          <div class="card shadow-lg">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false" >
              <image class="community" width="450" height="350" :xlink:href="el.imageUrl" />
            </svg>

            <div class="card-body">
              <h3>{{el.name}}</h3>
              <p class="card-text">{{el.description}}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" @click.prevent="chatRoom(el.id)">Chat</button>
                </div>
              </div>
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
  name: 'MyCommunity',
  computed: {
    myCommunity () {
      return this.$store.state.myCommunity
    }
  },
  methods: {
    chatRoom (id) {
      this.$socket.emit('send', id)
      this.$router.push(`/chat/${id}`)
    }
  },
  created () {
    this.$store.dispatch('allMyCommunity')
  }
}
</script>

<style>
.community {
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}
</style>
