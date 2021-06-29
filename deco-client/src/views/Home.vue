<template>
  <div class="home-section">
    <div class="top-bar">
      <a href="">
        <img class="logout-icon" src="https://ik.imagekit.io/vrvrzbdh5xfk/logout_ITHl1w1gn.png" alt="Logout Icon">
      </a>
      <img class="logo-img" src="https://ik.imagekit.io/vrvrzbdh5xfk/thumbnail_just_text_1__3iAOz4E6c.png" alt="DECO Logo Text">
      <button class="btn-talk-doctor">Talk to a doctor</button>
    </div>
    <div class="border-chat">
      <div class="conversation-section">
      </div>
      <div class="type-section">
        <form class="type-bar">
          <input type="text" placeholder="Type a message...">
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  computed: {
    profilePic () {
      return this.$store.state.profilePic
    }
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
    width: 90rem;
    height: 48rem;
    border-style: solid;
    border-color: #0055B8;
    border-width: 0.5rem;
    border-radius: 3rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
  }

  .type-section {
    position: absolute;
    background-color: #0055B8;
    width: 90rem;
    height: 8rem;
    bottom: 0;
    border-radius: 0 0 2rem 2rem;
  }

  .top-bar {
    width: 90rem;
    display: flex;
    /* justify-content: space-between; */
    align-items: flex-end;
  }

  .logo-img {
    width: 18rem;
    height: 7rem;
    margin: 0 21rem 0.3rem 32rem;
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
    padding: 1rem 2rem;
    border-radius: 1rem;
    font-size: 1.5rem;
    color: white;
    font-family: 'Raleway', sans-serif;
  }

  .type-bar input {
    width: 70rem;
    height: 4rem;
    border-radius: 3rem;
    border-style: none;
    margin: 2rem 0 0 2rem;
    font-size: 1rem;
    font-family: 'Raleway', sans-serif;
  }

</style>
