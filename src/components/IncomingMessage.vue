<template>
<ul class="chat-box chatContainerScroll">
    <li class="chat-left" v-if="+message.userId != senderId">
          <div class="chat-avatar">
              <img :src="`https://avatars.dicebear.com/api/initials/${message.nickname}.svg`" alt="Retail Admin">
              <div class="chat-name">{{message.nickname}}</div>
          </div>
          <div class="chat-text">
            <p>{{message.message}}</p>
          </div>
      </li>
    <li class="chat-right" v-if="+message.userId == senderId">
        <div class="chat-text">
          <p>{{message.message}}</p>
        </div>
        <div class="chat-avatar">
            <img :src="`https://avatars.dicebear.com/api/initials/${message.nickname}.svg`" alt="Retail Admin">
            <div class="chat-name">{{message.nickname}}</div>
        </div>
      </li>
</ul>
</template>

<script>
export default {
  name: 'IncomingMessage',
  props: ['message'],
  data () {
    return {
      senderId: localStorage.id
    }
  }
}
</script>

<style>

</style>
