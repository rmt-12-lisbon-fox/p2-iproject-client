<template>
  <div class="h-screen sm:px-20 md:px-70 lg:px-96 xl:px-96 bg-gray-50">
    <div class="box-content h-full bg-blue-400 pb-10">
      <div class="pb-10">
        <h1 class="text-center text-4xl text-white font-extrabold pt-10">
          Generate Link
        </h1>
        <p class="text-center text-1xl text-white font-extrabold">
          input your link
        </p>
      </div>
      <div class="box-content mx-4 p-4 bg-white border-2 rounded-2xl">
        <form @submit.prevent="generateLink">
          <div>
            <label for="">Input Link</label>
            <input
              type="text"
              placeholder="Input Link"
              class="
                relative
                w-full
                px-3
                py-2
                border-b-2 border-gray-500
                rounded-b-md
                focus:outline-none
                focus:ring-yellow-500
                focus:border-yellow-500
                placeholder-gray-500
                text-gray-900
                focus:z-10
                sm:text-sm
              "
              v-model="inputLink"
            />
          </div>
          <div>
            <label for="">Generated Link</label>
            <input
              type="text"
              disabled
              placeholder="Generated Link"
              class="
                relative
                w-full
                px-3
                py-2
                border-b-2 border-gray-500
                rounded-b-md
                focus:outline-none
                focus:ring-yellow-500
                focus:border-yellow-500
                placeholder-gray-500
                text-gray-900
                focus:z-10
                sm:text-sm
              "
              :value="generatedLink"
            />
          </div>

          <div class="grid grid-cols-1 gap-1 items-center pt-5">
            <button
              type="submit"
              class="bg-yellow-500 m-4 p-2 rounded-xl place-self-auto"
            >
              Generate
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GenerateLink",
  data() {
    return {
      inputLink: "",
    };
  },
  methods: {
    generateLink() {
      const payload = this.inputLink;
      this.$store.dispatch("generateLink", payload);
    },
  },
  computed: {
    generatedLink() {
      return this.$store.state.generatedLink;
    },
  },
};
</script>

<style>
</style>
