<template>
  <div>
    <nav class="bg-gray-800 md:h-full md:max-w-full sm:max-w-full">
      <div class="flex relative items-center p-4">
        <div class="w-5/6 justify-items-start">
          <router-link
            class="
              bg-gray-900
              text-white
              px-3
              py-2
              rounded-md
              text-sm
              font-medium
            "
            aria-current="page"
            to="/"
            >Invite kuy</router-link
          >
          <router-link
            class="
              text-gray-300
              hover:bg-gray-700
              hover:text-white
              px-3
              py-2
              rounded-md
              text-sm
              font-medium
            "
            to="/"
            >Home</router-link
          >
          <router-link
            class="
              text-gray-300
              hover:bg-gray-700
              hover:text-white
              px-3
              py-2
              rounded-md
              text-sm
              font-medium
            "
            to="/blog"
            >Blog</router-link
          >
          <router-link
            class="
              text-gray-300
              hover:bg-gray-700
              hover:text-white
              px-3
              py-2
              rounded-md
              text-sm
              font-medium
            "
            to="/product"
            >Product</router-link
          >
          <router-link
            class="
              text-gray-300
              hover:bg-gray-700
              hover:text-white
              px-3
              py-2
              rounded-md
              text-sm
              font-medium
            "
            to="/preview"
            >Preview</router-link
          >
          <router-link
            class="
              text-gray-300
              hover:bg-gray-700
              hover:text-white
              px-3
              py-2
              rounded-md
              text-sm
              font-medium
            "
            to="/generatelink"
            >Generate Link</router-link
          >
          <router-link
            class="
              text-gray-300
              hover:bg-gray-700
              hover:text-white
              px-3
              py-2
              rounded-md
              text-sm
              font-medium
            "
            to="/chat"
            >Chatting</router-link
          >
        </div>
        <div class="w-1/6 justify-items-end">
          <router-link
            class="
              text-gray-300
              hover:bg-gray-700
              hover:text-white
              px-3
              py-2
              rounded-md
              text-sm
              font-medium
            "
            to="/login"
            v-if="!isLogin"
            >Login</router-link
          >
          <router-link
            class="
              text-gray-300
              hover:bg-gray-700
              hover:text-white
              px-3
              py-2
              rounded-md
              text-sm
              font-medium
            "
            to="/register"
            v-if="!isLogin"
            >Register</router-link
          >
          <button
            class="
              text-gray-300
              hover:bg-gray-700
              hover:text-white
              px-3
              py-2
              rounded-md
              text-sm
              font-medium
            "
            v-if="isLogin === true"
            disabled="disabled"
          >
            Hello {{ username }}
          </button>
          <button
            class="
              text-gray-300
              hover:bg-gray-700
              hover:text-white
              px-3
              py-2
              rounded-md
              text-sm
              font-medium
            "
            v-if="isLogin === true"
            @click.prevent="logout"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "NavBar",
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    },
    username() {
      return this.$store.state.username;
    },
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/login");
      this.$store.commit("LOGOUT");
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Success Logout",
        showConfirmButton: false,
        timer: 1500,
      });
    },
  },
};
</script>

<style>
</style>
