<template>
    <div class="min-h-screen min-w-screen bg-primary flex justify-center items-center">
        <div class="w-2/5 flex flex-col items-center space-y-5 px-10 py-7 bg-third rounded-lg shadow-lg">
        <h1 class="font-mono text-3xl font-extrabold">Log In to Nreview </h1>
        <form @submit.prevent="login" class="w-full flex flex-col space-y-3 font-mono">
            <div>
                <input  v-model="data.email" type="email" id="email" class="w-full px-2 py-1.5 rounded-md text-base font-sans focus:outline-none focus:ring focus:ring-primary shadow-lg" placeholder="Email">
            </div>
            <div>
                <input v-model="data.password" type="password" id="password" class="w-full px-2 py-1.5 rounded-md text-base font-sans focus:outline-none focus:ring focus:ring-primary shadow-lg" placeholder="Password">
            </div>
            <div class="flex justify-center">
                <button  type="submit" class="transition duration-500 ease-in-out transform hover:scale-110 w-2/4 flex justify-center py-2 bg-primary text-white rounded-md focus:outline-none">SUBMIT</button>
            </div>
            <div class="flex justify-center">
                <router-link to="/register" class=" w-2/4 flex justify-center py-2 text-secondary">Register for free</router-link>
            </div>
        </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            data: {
                email: '',
                password: ''
            }
        }
    }, methods: {
        login(){
            this.$store.dispatch('login', this.data);
        }
    }
}
</script>

<style>

</style>