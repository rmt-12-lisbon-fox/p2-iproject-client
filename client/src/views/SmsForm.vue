<template>
      <section id="register-page">
        <div class="flex items-center min-h-screen dark:bg-gray-100">
          <div class="container mx-auto">
              <div class="bg-gray-50 max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
                  <div class="text-center">
                      <h1 class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Send your message</h1>
                  </div>
                    <div class="m-7">
                      <form @submit.prevent="sendMessage">
                          <input type="hidden" name="apikey" value="YOUR_ACCESS_KEY_HERE">
                          <input type="hidden" name="subject" value="New Submission from Web3Forms">
                          <input type="checkbox" name="botcheck" id="" style="display: none;">
                          <div class="mb-6">
                              <label for="content" class="text-sm text-gray-600 dark:text-gray-400">Messages<span style="color:#ff0000">*</span></label>
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
  name: 'SmsForm',
  data () {
    return {
      content: ''
    }
  },
  methods: {
    sendMessage () {
      const input = {
        content: this.content
      }

      this.$store.dispatch('sendMessage', input)
    }
  }
}
</script>

<style>

</style>
