<template>
  <section id="card"><br><br>
        <div class="flex flex-col m-auto p-auto">
            <div class="pr-16 pb-12 hide-scroll-bar">
                <div class="flex flex-nowrap grid gap-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                    <div v-for="element in bookmarks" :key="element.Design.id" class="px-3">
                      <div class="w-64 h-72 max-w-xs overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
                            <a @click.prevent="toDetailPage(element.Design.id)" href="">
                            <div class="flex items-end justify-end h-72 w-full bg-cover" :style="`background-image: url(${element.Design.image1})`">
                            </div>
                            </a>
                      </div>
                      <button v-if="isBookmarkPage" @click.prevent="deleteBookmark(element.DesignId)" class="mx-2 -mt-52 text-gray-600 bg-gray-50 border rounded-md p-1 hover:bg-gray-200 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div><br>
    </section>
</template>

<script>
export default {
  name: 'Bookmark',
  computed: {
    bookmarks () {
      return this.$store.state.bookmarks
    },
    isBookmarkPage () {
      return this.$store.state.isBookmarkPage
    }
  },
  methods: {
    getAllBookmark () {
      this.$store.dispatch('getAllBookmark')
    },
    yesBookmarkPage () {
      this.$store.commit('ISBOOKMARKPAGE')
    },
    toDetailPage (id) {
      this.$router.push({ path: `/detail-page/${id}` }).catch(() => {})
      this.$store.dispatch('getOneDesign', id)
    },
    deleteBookmark (id) {
      this.$store.dispatch('deleteBookmark', id)
    }
  },
  created () {
    this.getAllBookmark()
    this.yesBookmarkPage()
  }
}
</script>

<style>

</style>
