<template>
  <div class="container mt-5">
    <!-- Page header start -->
    <div class="page-title">
        <div class="row gutters">
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <h2 class="title">Healing App</h2>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"> </div>
        </div>
    </div>
    <!-- Page header end -->

    <!-- Content wrapper start -->
    <div class="content-wrapper">

        <!-- Row start -->
        <div class="row gutters">

            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" style="padding-bottom: 200px;">

                <div class="card m-0">

                    <!-- Row start -->
                    <div class="row no-gutters">
                        <div class="col-xl-12 col-lg-8 col-md-8 col-sm-9 col-9">
                            <div class="selected-user">
                                <span>To: <span class="name">Emily Russell</span></span>
                            </div>
                          <Message :CommunityId="CommunityId" />
                        </div>
                    </div>
                    <!-- Row end -->
                </div>

            </div>

        </div>
        <!-- Row end -->

    </div>
    <!-- Content wrapper end -->

</div>

</template>

<script>
import Message from '../components/Message.vue'
export default {
  name: 'Chat',
  components: {
    Message
  },
  data () {
    return {
      CommunityId: this.$route.params.id
    }
  },
  sockets: {
    broadcast (data) {
      this.$store.commit('JOIN', data)
    }
  },
  computed: {
    join () {
      return this.$store.state.join
    }
  }
}
</script>

<style>
 @import '../../css/styles.css';
</style>
