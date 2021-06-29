<template>
  <div class="h-full w- sm:px-20 md:px-70 lg:px-96 xl:px-96 bg-gray-50">
    <div class="box-content h-full bg-blue-400 pb-10">
      <div class="pb-10">
        <h1 class="text-center text-4xl text-white font-extrabold pt-10">
          Form data
        </h1>
        <p class="text-center text-1xl text-white font-extrabold">
          silahkan isi
        </p>
      </div>
      <div class="box-content mx-4 p-4 bg-white border-2 rounded-2xl">
        <form @submit.prevent="save">
          <div>
            <label for="">Name Male</label>
            <input
              type="text"
              placeholder="Name Male"
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
              v-model="nameMale"
            />
          </div>
          <div>
            <label for="">Name Female</label>
            <input
              type="text"
              placeholder="Name female"
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
              v-model="nameFemale"
            />
          </div>
          <div>
            <label for="">Love Story</label>
            <input
              type="text"
              placeholder="Love Story"
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
              v-model="loveStory"
            />
          </div>
          <div>
            <label for="">Date Akad</label>
            <input
              type="date"
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
              v-model="dateAkad"
            />
          </div>
          <div>
            <label for="">Address Akad</label>
            <input
              type="text"
              placeholder="Input Address Akad"
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
              v-model="addressAkad"
            />
          </div>
          <div>
            <label for="">Date Reception</label>
            <input
              type="date"
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
              v-model="dateReception"
            />
          </div>
          <div>
            <label for="">Address Reception</label>
            <input
              type="text"
              placeholder="Input address reception"
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
              v-model="addressReception"
            />
          </div>
          <div class="grid grid-cols-1 gap-1">
            <button
              type="submit"
              class="bg-yellow-500 m-4 p-2 rounded-xl place-self-auto"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      nameMale: "",
      nameFemale: "",
      loveStory: "",
      dateAkad: "",
      addressAkad: "",
      dateReception: "",
      addressReception: "",
    };
  },
  methods: {
    save() {
      const payload = {
        nameMale: this.nameMale,
        nameFemale: this.nameFemale,
        loveStory: this.loveStory,
        dateAkad: this.dateAkad,
        addressAkad: this.addressAkad,
        dateReception: this.dateReception,
        addressReception: this.addressReception,
        TamplateId: localStorage.TamplateId,
      };
      this.$store.dispatch("save", payload);
    },
  },
};
</script>

<style>
</style>