<template>
  <div class="row m-5" id="home-page">
      <div class="row  d-flex m-5 justify-content-center">

        <div class="card card-detail col-4 m-5" style="width: 50%; height: 100%;">

         <div class="embed-responsive embed-responsive-16by9 mt-4">
            <iframe width="420" height="315" class="embed-responsive-item" :src="program.videoId" allowfullscreen></iframe>
        </div>

          <div class="card-body">
            <h5 class="card-title"> {{ program.title }} </h5>
            <button disabled class="btn btn-warning m-4">Category : {{ program.type }} </button> 
            <br><button @click.prevent="showIntensity" class="btn btn-dark">Add to My Programs</button>

            <form @submit.prevent="createSchedule(program.id)" v-if="show" class="mt-5">
                
                <label >Please Select The Intensity</label><br>
              <select required v-model="intensity" class="custom-select">
                <option v-for="(data, i) in choice" :key="i" :value="data.name">{{ data.desc }}</option>
               
              </select><br>

              <button type="submit" class="btn btn-primary mt-3 mb-0">Confirm</button>
          </form>

          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name : 'DetailPage',
    data () {
      return {
        show : false,
        intensity : '',
        choice : [
          {
            name  : 'low',
            desc : 'Low (Today)'
          },
          {
            name  : 'moderate',
            desc : 'Moderate (Mon,Wed,Fri)'
          },
          {
            name  : 'high',
            desc : 'High (Mon-Fri)'
          },
        ]
      }
    },
    computed : {
        program() {
          return this.$store.state.program
        },
    },
    methods : {
      createSchedule(ProgramId) {
        let intensity = this.intensity
        let payload = { ProgramId, intensity }
        this.$store.dispatch('createSchedule', payload)
      },
      showIntensity() {
        this.show = true
      },
      onChange(event) {
        this.intensity = event.target.value
      }
    },
    created () {
      this.$store.dispatch('detailProgram', localStorage.id)
    }

}
</script>

<style>

</style>