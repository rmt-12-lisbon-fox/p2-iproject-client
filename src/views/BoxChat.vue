<template>
  <div class="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
    <div
      id="messages"
      class="
        flex flex-col
        space-y-4
        p-3
        overflow-y-auto
        scrollbar-thumb-blue
        scrollbar-thumb-rounded
        scrollbar-track-blue-lighter
        scrollbar-w-2
        scrolling-touch
      "
    >
      <div class="chat-message" v-for="data in message" :key="data.id">
        <div class="flex items-end">
          <div
            class="
              flex flex-col
              space-y-2
              text-xs
              max-w-xs
              mx-2
              order-2
              items-start
            "
          >
            <div>
              <span
                class="
                  px-4
                  py-2
                  rounded-lg
                  inline-block
                  rounded-bl-none
                  bg-gray-300
                  text-gray-600
                "
                >{{ data }}</span
              >
            </div>
          </div>
          <img
            :src="photoUserLogin"
            alt="My profile"
            class="w-6 h-6 rounded-full order-1"
          />
        </div>
      </div>
    </div>

    <form @submit.prevent="sendMessage">
      <div class="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
        <div class="relative flex">
          <input
            type="text"
            placeholder="Write Something"
            class="
              w-full
              focus:outline-none
              focus:placeholder-gray-400
              text-gray-600
              placeholder-gray-600
              pl-12
              bg-gray-200
              rounded-full
              py-3
            "
            v-model="msg"
          />
          <div class="absolute right-0 items-center inset-y-0 hidden sm:flex">
            <button
              type="submit"
              class="
                inline-flex
                items-center
                justify-center
                rounded-full
                h-12
                w-12
                transition
                duration-500
                ease-in-out
                text-white
                bg-blue-500
                hover:bg-blue-400
                focus:outline-none
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-6 w-6 transform rotate-90"
              >
                <path
                  d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "BoxChat",
  data() {
    return {
      msg: "",
    };
  },
  sockets: {
    broadcastMessage(data) {
      this.$store.dispatch("dataUser", data.id);
      this.$store.commit("SENDMESSAGE", data.msg);
    },
  },
  methods: {
    sendMessage() {
      const payload = {
        msg: this.msg,
        id: localStorage.idLogin,
      };
      this.$socket.emit("sendMessage", payload);
      this.msg = "";
    },
  },
  computed: {
    message() {
      return this.$store.state.message;
    },
    photoUserLogin() {
      return this.$store.state.photoUserLogin;
    },
  },
};
</script>

<style>
</style>