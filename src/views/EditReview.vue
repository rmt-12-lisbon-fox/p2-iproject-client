<template>
    <div class="min-h-screen min-w-screen bg-secondary flex justify-center items-center">
        <div class="w-2/5 flex flex-col items-center space-y-5 px-10 py-7 bg-fourth rounded-lg shadow-lg">
            <h1 class="font-mono text-3xl font-extrabold">Review Form</h1>
            <form @submit.prevent = 'review' class="w-full flex flex-col space-y-3 font-mono">
                <div>
                    <input  v-model="titleFilm" type="text" disabled class="w-full bg-primary px-2 py-1.5 rounded-md text-base font-sans focus:outline-none focus:ring focus:ring-primary shadow-lg">
                </div>
                <div>
                    <textarea  v-model="comment" rows="3" cols="3" class="w-full px-2 py-1.5 rounded-md text-base font-sans focus:outline-none focus:ring focus:ring-primary shadow-lg" placeholder="Insert your comment here"></textarea>
                </div>
                <div class="flex justify-center">
                    <button  type="submit" class="transition duration-500 ease-in-out transform hover:scale-110 w-2/4 flex justify-center py-2 bg-secondary text-white rounded-md focus:outline-none">SUBMIT</button>
                </div>
                <div class="flex justify-center">
                    <router-link to="/myComment" class="transition duration-500 ease-in-out transform hover:scale-110 w-2/4 flex justify-center py-2 bg-primary text-white rounded-md focus:outline-none">
                        BACK
                    </router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EditReview'
}
</script>

<style>

</style>