<template>
  <div class="h-screen sm:px-20 md:px-70 lg:px-96 xl:px-96 bg-gray-50">
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
        <form @submit.prevent="login">
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

          <div class="grid grid-cols-1 gap-1 items-center pt-5">
            <button
              type="submit"
              class="bg-yellow-500 m-4 p-2 rounded-xl place-self-auto"
            >
              Login
            </button>
            <GoogleLogin
              :params="params"
              :onSuccess="onSuccess"
              :renderParams="renderParams"
            ></GoogleLogin>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import GoogleLogin from "vue-google-login";
export default {
  name: "Login",
  components: { GoogleLogin },
  data() {
    return {
      email: "",
      password: "",
      params: {
        client_id:
          "406553754397-n65jb2fgabmc5ge4741kg7so6kuo41i1.apps.googleusercontent.com",
      },
      renderParams: {
        width: 250,
        height: 50,
        longtitle: true,
      },
    };
  },
  methods: {
    login() {
      const payload = {
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch("login", payload);
    },
    onSuccess(googleUser) {
      this.$store.dispatch("onSuccess", googleUser);
    },
  },
};
</script>

<style>
</style>
