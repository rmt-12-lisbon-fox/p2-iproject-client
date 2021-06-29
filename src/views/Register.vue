<template>
  <div class="h-full w- sm:px-20 md:px-70 lg:px-96 xl:px-96 bg-gray-50">
    <div class="box-content h-full bg-blue-400 pb-10">
      <div class="pb-10">
        <h1 class="text-center text-4xl text-white font-extrabold pt-10">
          Invite Kuy
        </h1>
        <p class="text-center text-1xl text-white font-extrabold">
          Silahkan masuk / daftar
        </p>
      </div>
      <div class="box-content mx-4 p-4 bg-white border-2 rounded-2xl">
        <form @submit.prevent="register" enctype="multipart/form-data">
          <div>
            <label for="">Full Name</label>
            <input
              type="text"
              placeholder="Full Name"
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
              v-model="fullName"
            />
          </div>
          <div>
            <label for="">Email</label>
            <input
              type="text"
              placeholder="Email"
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
              v-model="email"
            />
          </div>
          <div>
            <label for="">Password</label>
            <input
              type="password"
              placeholder="Password"
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
              v-model="password"
            />
          </div>
          <div>
            <label for="">Phone Number</label>
            <input
              type="text"
              placeholder="Phone Number"
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
              v-model="phoneNumber"
            />
          </div>
          <div>
            <label for="">Photo/Avatar</label>
            <input
              type="file"
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
              @change="avatar($event)"
            />
          </div>
          <div class="grid grid-cols-1 gap-1">
            <button
              type="submit"
              class="bg-yellow-500 m-4 p-2 rounded-xl place-self-auto"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      fullName: "",
      email: "",
      password: "",
      phoneNumber: "",
      photo: "",
    };
  },
  methods: {
    register() {
      const payload = {
        fullName: this.fullName,
        email: this.email,
        password: this.password,
        phoneNumber: this.phoneNumber,
        photo: this.photo,
      };
      this.$store.dispatch("register", payload);
    },
    avatar(event) {
      const files = event.target.files;
      this.photo = files[0];
    },
  },
};
</script>

<style>
</style>
