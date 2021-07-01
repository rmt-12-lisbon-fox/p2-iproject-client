<template>
  <div class="container">
    <div class="mb-4 p-2">
        <h3 class="h3"> My Bookmark </h3>
    </div>
    <div class="mt-5" style="padding-bottom: 8%;">
        <table class="table text-white mt-3 px-5">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            <BookmarkRow
            v-for="(el,i) in bookmarkAll" :key="el.id" :el="el" :i="i"
            />
        </tbody>
        </table>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import BookmarkRow from '../components/BookmarkRow.vue'
export default {
  components: { BookmarkRow },
    name: 'Bookmark',
    computed: {
        ...mapState(['bookmarkAll'])
    },
    methods: {
        ...mapActions(['findBookmark'])
    },
    created() {
        this.findBookmark()
    }
}
</script>

<style>

</style>