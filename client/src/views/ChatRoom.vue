<template>
  <div class="container content d-flex justify-content-evenly">
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
        <div class="card">
          <div class="card-header">Chat</div>
            <body-message v-for="(el,i) in getMessage" :key='i' :el='el'/>
        </div>
        <div class="row mb-3 my-3 d-flex justify-content-evenly">
          <div class="col-9 mx-1">
          <input type="text" class="form-control form-control-lg" style="margin:0px" v-model="message">
          </div>
          <div class="col">
          <button @click.prevent="sendMessage">Send Message</button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import BodyMessage from '../components/BodyMessage.vue'
export default {
  name: 'ChatRoom',
  components: { BodyMessage },
  data () {
    return {
      message: '',
      newMessage: '',
      username: ''
    }
  },
  sockets: {
    connect () {
    },
    sendChat (data) {
      this.$store.dispatch('incomingMessage', data)
    }
  },
  methods: {
    sendMessage () {
      const data = {
        username: localStorage.username,
        message: this.message
      }
      this.$store.dispatch('incomingMessage', data)
      this.$socket.client.emit('getChat', data)
    }
  },
  computed: {
    getMessage () {
      return this.$store.state.message
    }
  }
}

</script>

<style>
body{
    background:#eee;
}
.chat-list {
    padding: 0;
    font-size: .8rem;
}

.chat-list li {
    margin-bottom: 10px;
    overflow: auto;
    color: #ffffff;
}

.chat-list .chat-img {
    float: left;
    width: 48px;
}

.chat-list .chat-img img {
    -webkit-border-radius: 50px;
    -moz-border-radius: 50px;
    border-radius: 50px;
    width: 100%;
}

.chat-list .chat-message {
    -webkit-border-radius: 50px;
    -moz-border-radius: 50px;
    border-radius: 50px;
    background: #5a99ee;
    display: inline-block;
    padding: 10px 20px;
    position: relative;
}

.chat-list .chat-message:before {
    content: "";
    position: absolute;
    top: 15px;
    width: 0;
    height: 0;
}

.chat-list .chat-message h5 {
    margin: 0 0 5px 0;
    font-weight: 600;
    line-height: 100%;
    font-size: .9rem;
}

.chat-list .chat-message p {
    line-height: 18px;
    margin: 0;
    padding: 0;
}

.chat-list .chat-body {
    margin-left: 20px;
    float: left;
    width: 70%;
}

.chat-list .in .chat-message:before {
    left: -12px;
    border-bottom: 20px solid transparent;
    border-right: 20px solid #5a99ee;
}

.chat-list .out .chat-img {
    float: right;
}

.chat-list .out .chat-body {
    float: right;
    margin-right: 20px;
    text-align: right;
}

.chat-list .out .chat-message {
    background: #fc6d4c;
}

.chat-list .out .chat-message:before {
    right: -12px;
    border-bottom: 20px solid transparent;
    border-left: 20px solid #fc6d4c;
}

.card .card-header:first-child {
    -webkit-border-radius: 0.3rem 0.3rem 0 0;
    -moz-border-radius: 0.3rem 0.3rem 0 0;
    border-radius: 0.3rem 0.3rem 0 0;
}
.card .card-header {
    background: #17202b;
    border: 0;
    font-size: 1rem;
    padding: .65rem 1rem;
    position: relative;
    font-weight: 600;
    color: #ffffff;
}

.content{
    margin-top:40px;
}
</style>
