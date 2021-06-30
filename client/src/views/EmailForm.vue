<template>
    <section id="register-page">
        <div class="flex items-center min-h-screen dark:bg-gray-100">
          <div class="container mx-auto">
              <div class="bg-gray-50 max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
                  <div class="text-center">
                      <h1 class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Send your email</h1>
                  </div>
                    <div class="m-7">
                      <form @submit.prevent="sendEmail">
                          <input type="hidden" name="apikey" value="YOUR_ACCESS_KEY_HERE">
                          <input type="hidden" name="subject" value="New Submission from Web3Forms">
                          <input type="checkbox" name="botcheck" id="" style="display: none;">
                          <div class="mb-6">
                              <label for="from" class=" block mb-2 text-sm text-gray-600 dark:text-gray-400">From<span style="color:#ff0000">*</span></label>
                              <input v-model="from" type="text" name="from" id="from" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                          </div>
                          <div class="mb-6">
                              <label for="to" class="text-sm text-gray-600 dark:text-gray-400">To<span style="color:#ff0000">*</span></label>
                              <input v-model="oneDesign.User.email" type="text" name="to" id="to" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                          </div>
                          <div class="mb-6">
                              <label for="to" class="text-sm text-gray-600 dark:text-gray-400">Your email password<span style="color:#ff0000">*</span></label>
                              <input v-model="password" type="password" name="password" id="password" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                          </div>
                          <div class="mb-6">
                            <label for="subject" class="text-sm text-gray-600 dark:text-gray-400">Subject<span style="color:#ff0000">*</span></label>
                            <input v-model="subject" type="text" name="subject" id="subject" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                          </div>
                          <div class="mb-6">
                            <label for="content" class="text-sm text-gray-600 dark:text-gray-400">Content<span style="color:#ff0000">*</span></label>
                            <textarea v-model="content" name="content" id="contetn" cols="30" rows="10" class="form-control" placeholder=" Type your messages here"></textarea>
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
  name: 'EmailForm',
  data () {
    return {
      from: '',
      password: '',
      subject: '',
      content: ''
    }
  },
  computed: {
    oneDesign () {
      return this.$store.state.oneDesign
    }
  },
  methods: {
    getOneDesign () {
      const id = this.$route.params.id
      this.$store.dispatch('getOneDesign', id)
    },
    sendEmail () {
      const currentData = this.oneDesign
      const input = {
        from: this.from,
        to: currentData.User.email,
        password: this.password,
        subject: this.subject,
        content: this.content
      }

      this.$store.dispatch('sendEmail', input)
    }
  },
  created () {
    this.getOneDesign()
  }
}
</script>

<style>

</style>
