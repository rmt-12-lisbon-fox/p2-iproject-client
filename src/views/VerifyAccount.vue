<template>
    <section id="afterRegister">
    <div class='afterRegister'>
        <h2 id='afterRegisterThankYou'>{{message}}</h2>
        <!-- <p>Click to Continue</p> -->
        <hr>
            <button class="confirmbtnsinglecenter" type="submit" @click.prevent="toHome">Back to Home</button>
        </div>
    </section>
</template>

<script>
import router from '../router'
export default {
  name: 'verify',
  data () {
    return {
      message: ''
    }
  },
  methods: {
    toHome () {
      this.$store.commit('LOGINPAGEOFF')
      this.$store.commit('VERIFYTOGGLE', false)
      router.push({ path: '/' })
    }
  },
  watch: {
    activationMessage: function (val) {
      // console.log(val, 'VALLL')
      this.message = val
    }
  },
  computed: {
    activationMessage () {
      return this.$store.state.activationMessage
    }
  },
  created () {
    // console.log('MASUKKKKKKKK VERIFY')
    this.$store.commit('TOLOGINPAGE')
    this.$store.commit('VERIFYTOGGLE', true)
    const id = this.$route.params.id
    this.$store.dispatch('verifyFounder', id)
  }
}
</script>

<style>

</style>
