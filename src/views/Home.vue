<template>
   <!-- Home -->
    <div class="row mb-5 pb-5" id="home-page">
      <div class="container">
        <div class="row">
          <div class="col-3 mx-5 mt-4">

             <div v-if="counter % 2 == 1" class="container mt-0">
              <button class="btn btn-primary mt-0" v-if="reminders.length > 0" disabled>Reminder</button> 
              <button class="btn btn-danger mt-3" v-if="reminders.length == 0" disabled>There is no reminder yet</button> 
              
              <div v-for="(data, index) in reminders" :key="index" class="alert alert-info mt-2"> 
                <strong>Info!</strong> {{ data.message }} <svg @click.prevent="deleteOneReminder(data.id, index)" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
              </div>
            </div>
              
          </div>
        </div>
      </div>

          <h1 class="mb-0 mt-3">Welcome To Go Exercise App !</h1>
      <div>
        <select class="offset-lg-8 mt-0 mb-3" @change.prevent="getValue($event)" name="" id="">
          <option value="">-- SHOW ALL CATEGORY --</option>
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
    deleteOneReminder(id, index) {
      let payload = { id, index}
      this.$store.dispatch('deleteOneReminder', payload)
    },
     fetchReminder() {
      this.$store.dispatch('fetchReminder')
    }
    
  },
  created() {
    this.fetchPrograms()
  }
}
</script>
