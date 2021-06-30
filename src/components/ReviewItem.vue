<template>
    <div class="relative w-1/2 h-full flex bg-primary rounded-lg shadow-lg">
        <div>
            <img :src="review.User.imageUrl" class="object-cover h-60 w-56 rounded-lg">
        </div>
        <div class="w-1/2 px-5 py-5 flex flex-col justify-start space-y-3">
            <div>
                <h5 class="text-base text-third font-medium">{{ review.User.email }}</h5>
            </div>
            <div>
                <h3 class="text-xl text-white font-semibold">Title</h3>
                <h5 class="text-base text-fourth font-medium">{{ review.title }}</h5>
            </div>
            <div>
                <h4 class="text-base text-white font-semibold">Comment</h4>
                <h5 class="break-words text-sm text-fourth font-medium overflow-y-auto h-16">{{ review.comment }}</h5>
            </div>
        </div>
        <div class="absolute bottom-0 right-0 mr-3 mb-3">
            <button v-if="isMine" @click="update(review.id)" class="w-full flex justify-center px-3 py-2 bg-secondary text-white rounded-md  focus:outline-none">Edit</button>
            <button v-if="!isMine" class="w-full flex justify-center px-3 py-2 bg-secondary text-white rounded-md hover:bg-third hover:text-black focus:outline-none">
                <ShareNetwork
                    network="facebook"
                    url="https://google.com"
                    title="Nreview"
                    description="Let's go to NReview and start yours"
                    :quote="`${review.User.email} has been reviewed ${review.title}`"
                    >
                    Share
                </ShareNetwork>
            </button>
        </div>
        <div class="absolute bottom-0 right-0 mr-20 mb-3">
            <button v-if="!isMine" @click="speech(review.comment)" class="w-full flex justify-center px-3 py-2 bg-third text-white rounded-md focus:outline-none">Speech It!</button>
            <button v-if="isMine" @click="deleteReview(review.id)" class="w-full flex justify-center px-3 py-2 bg-third text-white rounded-md focus:outline-none">Delete</button>
        </div>
        <audio ref="audio" :src='audio'></audio>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'ReviewItem',
    props: ['review'],
    methods: {
        update(id) {
            this.$router.push({ path: `/editReview/${id}`});
        },
        deleteReview(id) {
            this.$store.dispatch('deleteReview', id);
        },
        speech(comment) {
            this.$store.dispatch('tos', comment)
            .then( _ => {
                this.$refs.audio.play();
            })
        }
    },
    computed: mapState([
        'isMine',
        'audio'
    ])
}
</script>

<style>

</style>