<template>
    <section id="add-page">
      <div class="flex items-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <div class="container mx-auto">
            <div class="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
                <div class="text-center">
                    <h1 class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Add a design</h1>
                </div>
                <div class="m-7">
                    <form @submit.prevent="addDesign" enctype="multipart/form-data">
                        <input type="hidden" name="apikey" value="YOUR_ACCESS_KEY_HERE">
                        <input type="hidden" name="subject" value="New Submission from Web3Forms">
                        <input type="checkbox" name="botcheck" id="" style="display: none;">
                        <div class="mb-6">
                            <label for="name" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Title<span style="color:#ff0000">*</span></label>
                            <input v-model="name" type="text" name="name" id="name" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                        </div>
                        <div class="mb-6">
                            <label for="description" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Description<span style="color:#ff0000">*</span></label>
                            <input v-model="description" type="text" name="description" id="description" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                        </div>
                        <div class="mb-6">
                            <label for="imageUrl" class="text-sm text-gray-600 dark:text-gray-400">Picture 1<span style="color:#ff0000">*</span></label>
                            <input required @change="onFileChange" ref="myFiles" multiple type="file" id="imageUrl" name="imageUrl" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500">
                      </div>
                      <div class="mb-6">
                            <label for="imageUrl" class="text-sm text-gray-600 dark:text-gray-400">Picture 2</label>
                            <input @change="onFileChange2" ref="myFiles" multiple type="file" id="imageUrl" name="imageUrl" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500">
                      </div>
                      <div class="mb-6">
                            <label for="imageUrl" class="text-sm text-gray-600 dark:text-gray-400">Picture 3</label>
                            <input @change="onFileChange3" ref="myFiles" multiple type="file" id="imageUrl" name="imageUrl" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500">
                      </div>
                      <div class="mb-6">
                        <label for="category" class="text-sm text-gray-600 dark:text-gray-400">Category<span style="color:#ff0000">*</span></label>
                        <select v-model="CategoriesId" name="category" id="category" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500">
                            <option value="" selected disabled>Choose category</option>
                            <option v-for="element in categories" :key="element.id" :value="element.id">{{ element.name }}</option>
                        </select>
                    </div>
                        <div class="mb-6">
                            <button type="submit" class="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: 'AddDesign',
  data () {
    return {
      name: '',
      description: '',
      files: [],
      CategoriesId: null
    }
  },
  methods: {
    onFileChange (event) {
      const files = event.target.files
      this.files.push(files[0])
    },
    onFileChange2 (event) {
      const files = event.target.files
      this.files.push(files[0])
    },
    onFileChange3 (event) {
      const files = event.target.files
      this.files.push(files[0])
    },
    addDesign () {
      const input = {
        name: this.name,
        description: this.description,
        files: this.files,
        CategoriesId: this.CategoriesId
      }

      this.$store.dispatch('addDesign', input)
      this.name = ''
      this.description = ''
      this.files = []
      this.CategoriesId = null
    }
  },
  computed: {
    categories () {
      return this.$store.state.categories
    }
  },
  created () {
    this.$store.dispatch('getAllCategories')
  }
}
</script>

<style>

</style>
