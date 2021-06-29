<template>
  <section class="md:h-full flex items-center text-gray-600">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4">
        <div class="p-4 sm:w-1/2 lg:w-1/3">
          <div
            class="
              h-full
              border-2 border-gray-200 border-opacity-60
              rounded-lg
              overflow-hidden
            "
            v-for="data in dataBlog"
            :key="data.id"
          >
            <img
              class="lg:h-72 md:h-48 w-full object-cover"
              :src="data.img"
              alt="blog"
            />
            <h1 class="text-2xl font-semibold mb-3">{{ data.title }}</h1>
            <div class="flex items-center flex-wrap">
              <button
                type="submit"
                class="
                  text-indigo-300
                  inline-flex
                  items-center
                  md:mb-2
                  lg:mb-0
                  cursor-pointer
                  hover:bg-indigo-900
                  hover:text-white
                  border
                  rounded-xl
                  px-2
                  ml-4
                "
                @click.prevent="detail(data.id)"
              >
                Detail
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Blog",
  computed: {
    dataBlog() {
      return this.$store.state.dataBlog;
    },
  },
  methods: {
    detail(id) {
      this.$store.dispatch("detail", id);
    },
  },
};
</script>

<style>
</style>
