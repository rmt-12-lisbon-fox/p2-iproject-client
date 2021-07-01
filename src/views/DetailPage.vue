<template>
  <div class="row m-5" id="home-page">
      <div class="row  d-flex m-5 justify-content-center">

        <div class="card card-detail col-4 m-0" style="width: 50%; height: 100%;">

         <div class="embed-responsive embed-responsive-16by9 mt-4">
            <iframe width="600" height="350" class="embed-responsive-item" :src="program.videoId" allowfullscreen></iframe>
        </div>

          <div class="card-body">
            <h5 class="card-title"> {{ program.title }} </h5>
            <button disabled class="btn btn-warning m-4">Category : {{ program.type }} </button> 

          

          <div v-for="info in scheduleId.Programs" :key="info.id">
            <div v-if="program.id == info.id ">{{ check(info) }}

            <br><button disabled   class="btn btn-primary mb-2">Intensity : {{ info.Schedule.intensity }}</button>
            <h5 v-if="info.Schedule.intensity == 'Low' ">Schedule : Today only</h5>
            <h5 v-if="info.Schedule.intensity == 'Moderate' ">Schedule : Monday, Wednesday, Friday</h5>
            <h5 v-if="info.Schedule.intensity == 'High' ">Schedule : Monday - Friday</h5>

            <!-- <button @click.prevent="removeSchedule(scheduleId.id)" class="button button5 btn-danger ">Remove</button> -->
            </div>
          </div>

            <br><button v-if="!flagging"  @click.prevent="showIntensity" class="btn btn-dark">Add To My Bookmark</button>

          <form @submit.prevent="createSchedule(program.id, program.title)" v-if="show" class="mt-5">
              
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
        flagging : false,
        choice : [
          {
            name  : 'Low',
            desc : 'Low (Today)'
          },
          {
            name  : 'Moderate',
            desc : 'Moderate (Mon,Wed,Fri)'
          },
          {
            name  : 'High',
            desc : 'High (Mon-Fri)'
          },
        ]
      }
    },
    computed : {
        program() {
          return this.$store.state.program
        },
        scheduleId() {
          return this.$store.state.scheduleId
        }
    },
    methods : {
      createSchedule(ProgramId, programTitle) {
        let intensity = this.intensity
        let payload = { ProgramId, intensity, programTitle }
        this.$store.dispatch('createSchedule', payload)
      },
      showIntensity() {
        this.show = true
      },
      onChange(event) {
        this.intensity = event.target.value
      },
      check(data) {
        if (data) {
          this.flagging = true
          console.log(data.id, `ini data flagging`)
        }
      },
      removeSchedule(id) {
        console.log(program, `ini schedule id dari removee`)
        // this.$store.dispatch('deleteSchedule', id)
      }

    },
    created () {
      this.$store.dispatch('detailProgram', localStorage.id)
      this.$store.dispatch('fetchSchedule', 'check')
    }

}
</script>

<style>
.button5 {
  border-radius: 12px;
}
</style>