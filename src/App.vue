<template>
  <div>
    <transition
      mode="out-in"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <router-view/>
    </transition>
    <HFooter></HFooter>
  </div>
</template>

<script>
import HFooter from 'vue-hacktiv8-footer'
export default {
  name: 'App',
  components: { HFooter }
}
</script>

<style>

</style>
