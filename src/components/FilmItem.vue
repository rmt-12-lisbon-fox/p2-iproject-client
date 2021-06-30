<template>
    <div class="transition duration-500 ease-in-out transform hover:scale-90 relative h-4/5 w-3/4 flex flex-col bg-primary rounded-lg shadow-lg">
        <div>
            <img :src="film.img" class="object-cover h-48 w-full rounded-lg">
        </div>
        <div class="px-5 py-5 flex flex-col justify-end space-y-3">
            <div>
                <h3 class="text-xl text-white font-semibold overflow-hidden h-6">{{ film.title }}</h3>
                <h5 class="text-sm text-third font-medium">{{ film.vtype }}</h5>
            </div>
            <div>
                <h4 class="text-base text-white font-semibold">Synopsis</h4>
                <h5 class="text-sm text-third font-medium overflow-auto h-10">{{ film.synopsis }}</h5>
            </div>
        </div>
        <div class="w-full flex justify-center mr-3 mb-16">
            <button @click="toReview(film.title)" class="w-1/2 flex justify-center px-3 py-2 bg-secondary text-fourth rounded-md hover:bg-third hover:text-black focus:outline-none">Review</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FilmItem',
    props: ['film'],
    methods: {
        toReview(title) {
            this.$store.commit('TITLE_FILM', title);
            this.$store.commit('REVIEW');
        }
    }
}
</script>

<style>

</style>