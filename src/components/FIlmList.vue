<template>
    <div class="h-auto p-10 grid grid-cols-4 gap-2 place-content-center place-items-center">
        <film-item
        v-for="film in films" :key="film.id"
        :film="film"></film-item>
    </div>
</template>

<script>
import FilmItem from './FilmItem.vue'
export default {
    name: 'FilmList',
    components: {
        FilmItem
    },
    props: ['films']
}
</script>

<style>

</style>