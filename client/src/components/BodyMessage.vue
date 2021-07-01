<template>
  <div class="card-body height3">
    <ul class="chat-list">
      <li class="in">
        <div class="chat-img">
          <img alt="Avtar" src="https://bootdey.com/img/Content/avatar/avatar1.png">
        </div>
        <div class="chat-body">
          <div class="chat-message">
            <h5>{{el.username}}</h5>
            <p>{{el.message}}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BodyMessage',
  props: ['el']
}
</script>

<style>

</style>
