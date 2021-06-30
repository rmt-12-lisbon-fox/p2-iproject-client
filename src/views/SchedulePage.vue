<template>
  <div class="row mb-5 pb-5" id="home-page">
      <div class="row d-flex justify-content-center">

       <ScheduleCard v-for="data in schedule" :key="data.id" :data="data"/>
     
      </div>
    </div>
</template>

<script>
import ScheduleCard from './ScheduleCard.vue'
export default {
    name : 'SchedulePage',
    components : { ScheduleCard },
    computed : {
        schedule() {
            return this.$store.state.schedule
        }
    },
    created() {
        this.$store.dispatch('fetchSchedule')
    }

}
</script>

<style>

</style>