<template>
  <section id="main-page">
    <div class="w-full bg-cover bg-center" style="height:32rem; background-image: url(https://cdn.decorilla.com/online-decorating/wp-content/uploads/2020/02/Rustic_Industrial16.jpg);">
      <div class="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
          <div class="text-center">
              <h1 class="text-gray-50 text-3xl font-semibold uppercase md:text-3xl">Inspire Your Design</h1>
              <button v-if="!isLoggedIn" @click.prevent="toRegisterDesign" class="mt-4 -mr-10 px-4 py-2 bg-blue-600 text-white text-base
              font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Register as designer</button>
              <button v-if="!isLoggedIn" @click.prevent="toRegisterCust" class="mt-4 ml-20 px-4 py-2 bg-blue-600 text-white text-base
              font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Register as customer</button>
          </div>
      </div>
    </div>
    <main class="my-8">
        <div class="container">
            <!-- filter by category -->
            <div class="relative">
              <select @change="filter" v-model="CategoriesId" class="text-gray-700 bg-gray-100 text-2xl font-medium" name="category" id="category">
                <option value="" disabled>Category</option>
                <option value="1">Living Room</option>
                <option value="2">Bed Room</option>
                <option value="3">Dining Room</option>
                <option value="4">Kitchen Set</option>
                <option value="5">Garage</option>
                <option value="6">Apartment</option>
              </select>
            </div>
            <!-- Card -->
            <Card></Card>
            <!-- Page -->
            <div class="flex justify-center">
                <div class="flex rounded-md mt-8">
                    <a @click.prevent="prevPage" href="" class="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 ml-0 rounded-l hover:bg-blue-500 hover:text-white"><span>Previous</span></a>
                    <a @click.prevent="nextPage" href="" class="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 rounded-r hover:bg-blue-500 hover:text-white"><span>Next</span></a>
                </div>
            </div>
        </div>
    </main>
  </section>
</template>

<script>
import Card from '../components/Card.vue'

export default {
  name: 'Home',
  data () {
    return {
      page: 1,
      CategoriesId: ''
    }
  },
  components: { Card },
  methods: {
    filter () {
      const CategoriesId = this.CategoriesId
      let filterQuery = ''

      if (CategoriesId) {
        filterQuery = `CategoriesId=${CategoriesId}`
      }

      this.$store.commit('FILTERQUERY', filterQuery)
      this.$store.dispatch('getAllDesigns')
    },
    toRegisterDesign () {
      this.$router.push({ name: 'RegisterDesigner' }).catch(() => {})
    },
    toRegisterCust () {
      this.$router.push({ name: 'RegisterCust' }).catch(() => {})
    },
    prevPage () {
      this.page--
      const url = `page=${this.page}&size=4`

      this.$store.commit('QUERY', url)
      this.$store.dispatch('getAllDesigns')
    },
    nextPage () {
      this.page++
      const url = `page=${this.page}&size=4`

      this.$store.commit('QUERY', url)
      this.$store.dispatch('getAllDesigns')
    }
  },
  computed: {
    isLoggedIn () {
      return this.$store.state.isLoggedIn
    }
  },
  created () {
    this.$store.dispatch('getAllDesigns')
  }
}
</script>
