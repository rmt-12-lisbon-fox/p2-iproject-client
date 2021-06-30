<template>
         <div class="min-h-screen min-w-screen bg-secondary flex justify-center items-center">
            <div class="w-2/5 flex flex-col items-center space-y-5 px-10 py-7 bg-fourth rounded-lg shadow-lg">
                <h1 class="font-mono text-3xl font-extrabold">Register Your Account</h1>
                <form @submit.prevent = 'register' class="w-full flex flex-col space-y-3 font-mono" enctype="multipart/form-data">
                    <div>
                        <label>Profile Picture: </label>
                        <input @change="getFiles"  type="file" class="w-full  text-base font-sans  focus:outline-none shadow-lg">
                    </div>
                    <div>
                        <input  v-model="data.email" type="email"  class="w-full px-2 py-1.5 rounded-md text-base font-sans focus:outline-none focus:ring focus:ring-primary shadow-lg" placeholder="Email">
                    </div>
                    <div>
                        <input v-model="data.password" type="password"  class="w-full px-2 py-1.5 rounded-md text-base font-sans focus:outline-none focus:ring focus:ring-primary shadow-lg" placeholder="Password">
                    </div>
                    <div>
                        <input v-model="data.name" type="text"  class="w-full px-2 py-1.5 rounded-md text-base font-sans focus:outline-none focus:ring focus:ring-primary shadow-lg" placeholder="Fullname">
                    </div>
                    <div>
                        <input v-model="data.phoneNumber" type="text"  class="w-full px-2 py-1.5 rounded-md text-base font-sans focus:outline-none focus:ring focus:ring-primary shadow-lg" placeholder="Phone Number">
                    </div>
                    <div>
                        <textarea v-model="data.address" rows="3" cols="3" class="w-full px-2 py-1.5 rounded-md text-base font-sans focus:outline-none focus:ring focus:ring-primary shadow-lg" placeholder="Your current address"></textarea>
                    </div>
                    <div class="flex justify-center">
                        <button  type="submit" class="transition duration-500 ease-in-out transform hover:scale-110 w-2/4 flex justify-center py-2 bg-secondary text-white rounded-md focus:outline-none">SUBMIT</button>
                    </div>
                    <div class="flex justify-center">
                        <router-link to="/login" class="transition duration-500 ease-in-out transform hover:scale-110 w-2/4 flex justify-center py-2 bg-primary text-white rounded-md focus:outline-none">
                            BACK
                        </router-link>
                    </div>
                </form>
            </div>
        </div>
</template>

<script>
export default {
    name: 'Register',
    data() {
        return {
            data: {
                email: '',
                password: '',
                name: '',
                address: '',
                phoneNumber: '',
                imageUrl: ''
            }
        }
    },
    methods: {
        getFiles(event) {
            this.data.imageUrl = event.target.files[0];
        },
        register() {
            this.$store.dispatch('register', this.data);
        }
    }
}
</script>

<style>

</style>