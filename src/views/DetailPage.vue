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

            <button disabled   class="btn btn-primary mb-2">Schedule : {{ info.Schedule.intensity }}</button><br>
            (This program will automatically deleted from your schedule after an hour from the schedule, and the reminder will be sent to your message box and email two hours before the schedule) <br>

            <button @click.prevent="removeSchedule(info.Schedule.id)" class="button button5 btn-danger ">Remove Now</button>
            </div>
          </div>

            <br><button v-if="!flagging"  @click.prevent="showIntensity" class="btn btn-dark">Add To My Schedule</button>

          <form @submit.prevent="createSchedule(program.id, program.title)" v-if="show" class="mt-5">
              
              <label >Please Select The Schedule</label><br>
           <input v-model="schedule" type="datetime-local"><br>

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
        schedule : '',
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
        let schedule = this.schedule
        let payload = { ProgramId, schedule, programTitle }
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
        this.$store.dispatch('deleteSchedule', id)
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