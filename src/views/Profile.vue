<template>
    <div class="min-h-screen min-w-screen bg-secondary flex justify-center items-center">
        <div class="w-2/5 flex flex-col items-center space-y-5 px-10 py-7 bg-fourth rounded-lg shadow-lg">
        	<div class="block rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center" :style="`background-image: url(${user.imageUrl})`"></div>
			<h1 class="text-3xl text-primary font-bold pt-8 lg:pt-0">{{ user.name }}</h1>
			<div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-black opacity-25"></div>
            <div class="flex flex-col items-center">
                <p class="text-base font-bold flex items-center justify-center lg:justify-start">{{ user.email }}</p>
			    <p class="text-base font-bold flex items-center justify-center lg:justify-start">{{ user.phoneNumber }}</p>
            </div>
			<p class="text-sm">{{ user.address }}</p>
			<div class="pt-12 pb-8">
				<button @click="toEditProfile" class="transition duration-500 ease-in-out transform hover:scale-110 w-full flex justify-center p-5 bg-primary text-white rounded-full focus:outline-none">
				  EDIT PROFILE
				</button> 
			</div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Profile',
    methods: {
        toEditProfile() {
            this.$store.commit('EDIT_PROFILE');
            this.$router.push({ name: 'EditProfile' });
        }
    },
    created() {
        this.$store.dispatch('getProfile');
    },
    computed:  mapState([
    'user'
  ])
}
</script>

<style>

</style>