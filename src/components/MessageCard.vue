<template>
       <li class="chat-left">
            <div class="chat-avatar">
                <img src="https://www.bootdey.com/img/Content/avatar/avatar3.png" alt="Retail Admin">
                <div class="chat-name">{{message.username}}</div>
            </div>
            <div class="chat-text">
              <p>{{message.message}}</p>
            </div>
        </li>
</template>

<script>
export default {
  name: 'MessageCard',
  props: ['message']
}
</script>

<style>

</style>