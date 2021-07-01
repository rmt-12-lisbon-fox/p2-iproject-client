<template>
         <div class="min-h-screen min-w-screen bg-secondary flex justify-center items-center">
            <div class="w-2/5 flex flex-col items-center space-y-5 px-10 py-7 bg-fourth rounded-lg shadow-lg">
                <h1 class="font-mono text-3xl font-extrabold">Register Your Account</h1>
                <user-form></user-form>
            </div>
        </div>
</template>

<script>
import UserForm from '../components/UserForm.vue'
export default {
    name: 'Register',
    components: {
        UserForm
    }
 
}
</script>

<style>

</style>