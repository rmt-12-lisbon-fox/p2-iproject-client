<template>
    <div class="h-screen w-screen ">
        <film-list
        :films="films.data"></film-list>
        <div class="h-1/6 w-full px-4 py-3 flex items-center justify-between sm:px-6">
            <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                    <a v-if="page !== 1" @click.prevent="minCounter" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-third text-sm font-medium text-gray-500 hover:bg-gray-50">
                        <span class="sr-only">Previous</span>
                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                    </a>
                    <a href="#" class="bg-white border-gray-500 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium">
                    {{ page }}
                        </a>
                    <a @click.prevent="addCounter" class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-third text-sm font-medium text-gray-500 hover:bg-gray-50">
                        <span class="sr-only">Next</span>
                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                    </a>
                </nav>
        </div>
        </div>
    </div>

</template>

<script>
import FilmList from '../components/FIlmList.vue'
import { mapState } from 'vuex'
export default {
    name: 'Films',
    data() {
        return {
            page: 1
        }
    },
    methods: {
        getFilms() {
            this.$store.dispatch('getFilms', this.page);
        },
        addCounter() {
            this.page++;
            this.getFilms();
        },
        minCounter() {
            this.page--;
            this.getFilms();
        }
    },
    components: {
        FilmList
    },
    created() {
        this.getFilms();
    },
    computed: mapState([
        'films'
    ])
}
</script>

<style>

</style>