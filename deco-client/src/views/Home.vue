<template>
  <div class="home-section">
    <div class="top-bar">
      <a href="" @click.prevent="logoutEvent">
        <img class="logout-icon" src="https://ik.imagekit.io/vrvrzbdh5xfk/logout_ITHl1w1gn.png" alt="Logout Icon">
      </a>
      <img class="logo-img" src="https://ik.imagekit.io/vrvrzbdh5xfk/thumbnail_just_text_1__3iAOz4E6c.png" alt="DECO Logo Text">
      <button class="btn-talk-doctor">Talk to a doctor</button>
    </div>
    <div class="border-chat">
      <div class="conversation-section">
        <!-- <chatbot-answer></chatbot-answer>
        <user-answer></user-answer> -->
        <answer v-for="(data, index) in messages" :key="index" :data="data"></answer>
      </div>
      <div class="type-section">
        <form class="type-bar" @submit.prevent="sendUserMessage">
          <input v-model="userMessage" type="text" placeholder="Type a message...">
          <button class="form-btn" type="submit">Send</button>
        </form>
        <a href="">
          <img class="mic-icon" src="https://ik.imagekit.io/vrvrzbdh5xfk/mic_button_FqLU8zUP8Kn2.png" alt="Mic Icon">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
// import ChatbotAnswer from '../components/ChatbotAnswer.vue'
// import UserAnswer from '../components/UserAnswer.vue'
import Answer from '../components/Answer.vue'
export default {
  name: 'Home',
  components: { Answer },
  data () {
    return {
      userMessage: ''
    }
  },
  computed: {
    messages () {
      return this.$store.state.messages
    }
  },
  methods: {
    fetchChatbotReply (message) {
      this.$store.dispatch('fetchChatbotReply', message)
    },
    sendUserMessage () {
      this.$store.dispatch('sendUserMessage', this.userMessage)
      this.userMessage = ''
    },
    logoutEvent () {
      this.$store.dispatch('logoutEvent')
    }
  },
  created () {
    this.fetchChatbotReply('hi')
  }
}
</script>

<style scoped>
  .home-section {
    font-family: 'Raleway', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: #382E2E;
  }

  .border-chat {
    width: 75rem;
    height: 35rem;
    border-style: solid;
    border-color: #0055B8;
    border-width: 0.5rem;
    border-radius: 3rem;
    display: flex;
    /* align-items: center; */
    flex-direction: column;
    position: relative;
  }

  .type-section {
    position: absolute;
    background-color: #0055B8;
    width: 75rem;
    height: 7rem;
    bottom: 0;
    border-radius: 0 0 2rem 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .top-bar {
    width: 75rem;
    display: flex;
    /* justify-content: space-between; */
    align-items: flex-end;
  }

  .logo-img {
    width: 18rem;
    height: 7rem;
    margin: 0 15rem 0.3rem 24rem;
  }

  .logout-icon {
    width: 3.5rem;
    height: 3.5rem;
    margin-bottom: 1rem;
  }

  button {
    background: none;
    border-style: none;
  }

  button:hover{
    cursor: pointer;
  }

  .btn-talk-doctor {
    margin-bottom: 1rem;
    background-color: #0055B8;
    padding: 0.8rem 1.5rem;
    border-radius: 1rem;
    font-size: 1.5rem;
    color: white;
    font-family: 'Raleway', sans-serif;
  }

  .type-bar input {
    width: 55rem;
    height: 3.5rem;
    border-radius: 3rem;
    border-style: none;
    margin: 0 1rem 0 0rem;
    font-size: 1rem;
    font-family: 'Raleway', sans-serif;
    padding-left: 1.5rem;
  }

  .form-btn {
    padding: 1rem 2rem;
    background-color: #004492;
    color: white;
    font-size: 1.2rem;
    font-family: 'Raleway', sans-serif;
    border-radius: 1rem;
    margin-right: 1rem;
  }

  .form-btn:hover {
    background-color: #003066;
  }

  .mic-icon {
    width: 4rem;
    height: 4rem;
  }

  .conversation-section {
    display: flex;
    flex-direction: column;
    overflow: scroll;
    max-height: 28rem;
  }

  .conversation-section::-webkit-scrollbar {
    display: none;
  }

</style>
