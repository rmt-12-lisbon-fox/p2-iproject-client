<template>
  <section>
    <div v-if="data.source" class="chatbot-section">
      <div class="message-section chatbot">
        <h1>{{ data.message }}</h1>
      </div>
      <div class="chatbot-image">
        <img src="https://ik.imagekit.io/vrvrzbdh5xfk/LOGO_1__T3fcLyPaX.png" alt="Chatbot Icon">
      </div>
    </div>
    <div v-if="!data.source" class="user-section">
      <div class="user-image">
        <img class="profilePic" :src="profilePic" alt="User Icon">
      </div>
      <div class="message-section user">
        <h1>{{ data.message }}</h1>
      </div>
    </div>
  </section>
</template>

<script>
// import TextToSpeech from 'text-to-speech-js'
export default {
  name: 'Answer',
  props: ['data'],
  computed: {
    profilePic () {
      return this.$store.state.profilePic
    }
  },
  methods: {
    speechToText (message) {
      const messageRaw = message.split(/\n| /)
      const messageProcess = messageRaw.filter(el => {
        return el.includes('http') === false
      })
      const synth = window.speechSynthesis
      const utter = new SpeechSynthesisUtterance(messageProcess.join(' '))
      // utter.text = message
      synth.speak(utter)
      // window.speechSynthesis.speak(utter)
      // TextToSpeech.talk(message)
      // responsiveVoice.speak(message)
      // voice.speak(message)
    }
  },
  created () {
    if (this.data.source) {
      this.speechToText(this.data.message)
    }
  }
}
</script>

<style scoped>
  img {
      width: 4rem;
      height: 4rem;
      margin: 1rem;
    }

  .message-section {
    background-color: #DBDBDB;
    color: #382E2E;
    border-radius: 1rem 1rem 0 1rem;
    padding: 0.5rem 1rem;
    max-width: 30rem;
    min-width: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .user {
    background-color: #0055B8;
    color: white;
    border-radius: 1rem 1rem 1rem 0rem;
  }

  h1 {
    font-weight: 600;
    font-size: 1.2rem;
    word-wrap: break-word;
  }

  .chatbot-section {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 1rem;
  }

  .user-section {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    margin: 1rem;
  }

  .profilePic {
    border-radius: 2rem;
  }
</style>
