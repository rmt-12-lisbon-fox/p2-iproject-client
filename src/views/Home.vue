<template>
   <!-- Home -->
    <div class="row mb-5 pb-5" id="home-page">
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
  components: { ProgramCard },
  computed : {
    programs() {
      return this.$store.state.programs
    }
  },
  methods : {
    fetchPrograms() {
      this.$store.dispatch('fetchPrograms')
    }
  },
  created() {
    this.fetchPrograms()
  }
}
</script>
