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
    data() {
        return {
            message: ''
        }
    },
    methods: {
        toHome() {
            this.$store.commit('LOGINPAGEOFF')
            router.push({path:'/'})
        }
    },
    watch: {
        activationMessage: function (val) {
            // console.log(val, 'VALLL')
            this.message = val
        }
    },
    computed: {
        activationMessage() {
            return this.$store.state.activationMessage
        }
    },
    created() {
        this.$store.commit('TOLOGINPAGE')
        let id = this.$route.params.id
        this.$store.dispatch('verifyFounder', id)
    }
}
</script>

<style>

</style>