<template>
  <div class="chatbot-section">
    <div class="message-section">
      <h1>Hi! I'm DECO your personal chatbot!</h1>
    </div>
    <div class="chatbot-image">
      <img src="https://ik.imagekit.io/vrvrzbdh5xfk/LOGO_1__T3fcLyPaX.png" alt="Chatbot Icon">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatbotAnswer'
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
    display: flex;
    justify-content: center;
    align-items: center;
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
    margin-right: 1rem;
  }

</style>
