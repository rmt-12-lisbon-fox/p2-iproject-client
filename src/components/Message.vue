<template>
  <div class="chat-container">
        <IncomingMessage v-for="(el, i) in messages" :key="i" :message="el" />
        <div class="form-group mt-3 mb-0 p-3">
            <input type="text" v-model="inputMsg" class="p-2" style="width: 85%;" @keyup.enter="sendMessage"/>
            <button type="button" class="btn btn-primary mx-2" @click="sendMessage">
              Send
            </button>
             <button type="button" class="btn btn-warning" @click="translateMessage">
              Translate
            </button>
        </div>
    </div>
</template>

<script>
import IncomingMessage from './IncomingMessage.vue'
export default {
  name: 'Message',
  components: {
    IncomingMessage
  },
  props: ['CommunityId'],
  data () {
    return {
      inputMsg: ''
    }
  },
  sockets: {
    getMessage (data) {
      console.log(data)
      this.$store.commit('PUSH_MESSAGES', data)
    },
    translateMsg (data) {
      this.$store.commit('PUSH_MESSAGES', data)
    }
  },
  methods: {
    sendMessage () {
      const data = {
        CommunityId: this.CommunityId,
        userId: localStorage.id,
        nickname: localStorage.getItem('firstName'),
        message: this.inputMsg
      }
      this.$socket.emit('message', data)
      this.inputMsg = ''
    },
    translateMessage () {
      const data = {
        CommunityId: this.CommunityId,
        userId: localStorage.id,
        nickname: localStorage.getItem('firstName'),
        message: this.inputMsg
      }
      this.$socket.emit('translate', data)
      this.inputMsg = ''
    }
  },
  computed: {
    messages () {
      console.log(this.$store.state.messages)
      return this.$store.state.messages
    }
  }
  // created () {
  //   this.$socket.emit('get', this.CommunityId)
  // }
}
</script>

<style>

</style>
