<template>
   <!-- Home -->
    <div class="row mb-5 pb-5" id="home-page">
      <div>

  <div v-if="counter % 2 == 1" class="container">
  <h2>Reminder</h2>
  
  <div v-for="data in reminders" :key="data.id" class="alert alert-info">
    <strong>Info!</strong> {{ data.message }}
  </div>
 
</div>

        <select class="offset-lg-8 mt-5 mb-0" @change.prevent="getValue($event)" name="" id="">
          <option value="">-- SORT BY CATEGORY --</option>
          <option value="Endurance">Endurance</option>
          <option value="Strength">Strength</option>
          <option value="Balance">Balance</option>
          <option value="Flexible">Flexible</option>
        </select>
      </div>
      <div class="row d-flex justify-content-center">

       <ProgramCard v-for="data in programs" :key="data.id" :data="data"/>
     
      </div>
    </div>
</template>

<script>
// @ is an alias to /src
import ProgramCard from './ProgramCard.vue'
export default {
  name: 'Home',
  data() { return { sort : '' }},
  components: { ProgramCard },
  computed : {
    programs() {
      return this.$store.state.programs
    },
    counter() {
      return this.$store.state.counter
    },
    reminders() {
    return this.$store.state.reminders
    }
  },
  methods : {
    fetchPrograms() {
      this.$store.dispatch('fetchPrograms')
    },
    getValue(event) {
      console.log(`masuk getValue`)
      let filter =  `?filter=${event.target.value}` 
      this.$store.dispatch('fetchPrograms', filter)
    },
    fetchReminder() {
      this.$store.dispatch('fetchReminder')
    }
  },
  created() {
    this.fetchPrograms()
    this.fetchReminder()
  }
}
</script>
