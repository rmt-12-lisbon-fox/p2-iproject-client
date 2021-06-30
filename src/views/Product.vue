<template>
  <section class="md:h-full flex items-center text-gray-600">
    <div class="container px-5 py-4 mx-auto">
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-6xl text-gray-700 font-semibold">
          Product
        </h1>
      </div>
      <div class="flex flex-wrap -m-4">
        <div
          class="p-4 sm:w-1/2 lg:w-1/3"
          v-for="data in dataTamplate"
          :key="data.id"
        >
          <div
            class="
              h-full
              border-2 border-gray-200 border-opacity-60
              rounded-lg
              overflow-hidden
            "
          >
            <img
              class="lg:h-72 md:h-48 w-full object-cover object-center"
              :src="data.imgT"
              alt="blog"
            />
            <h1 class="text-center pb-4">{{ data.version }}</h1>
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
                  ml-3
                "
                @click.prevent="views(data.id)"
              >
                Views
              </button>
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
                  ml-3
                "
                @click.prevent="form(data.id)"
              >
                form
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
  name: "Product",
  computed: {
    dataTamplate() {
      return this.$store.state.dataTamplate;
    },
  },
  methods: {
    views(id) {
      this.$store.dispatch("views", id);
    },
    form(id) {
      localStorage.setItem("TamplateId", id);
      this.$router.push("./form");
    },
  },
};
</script>

<style>
</style>
