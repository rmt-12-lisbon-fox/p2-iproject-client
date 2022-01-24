<template>
   <li class="chat-right" v-if="+messsage.id == localStorage.id">
        <div class="chat-text">
          <p>{{message.message}}</p>
        </div>
        <div class="chat-avatar">
            <img src="https://www.bootdey.com/img/Content/avatar/avatar3.png" alt="Retail Admin">
            <div class="chat-name">{{message.username}}</div>
        </div>
      </li>
</template>

<script>
export default {
    name: 'OutcommingMessage',
    props: ['message']
}
</script>

<style>

</style>
