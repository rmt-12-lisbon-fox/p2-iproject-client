<template>
    <div class="user-section">
      <div class="user-image">
        <img :src="profilePic" alt="User Icon">
      </div>
      <div class="message-section">
        <h1>What can you do?</h1>
      </div>
  </div>
</template>

<script>
export default {
  name: 'UserAnswer',
  computed: {
    profilePic () {
      return this.$store.state.profilePic
    }
  }
}
</script>

<style scoped>
img {
    width: 4rem;
    height: 4rem;
    margin: 1rem;
    border-radius: 2rem;
  }

  .message-section {
    background-color: #0055B8;
    color: white;
    border-radius: 1rem 1rem 1rem 0;
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

  .user-section {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    margin-left: 1rem;
  }
</style>
