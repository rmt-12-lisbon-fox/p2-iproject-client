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

            <form v-if="show" class="mt-3">
                <label>Please choose the intentisy :</label><br>
              <select @change.prevent="onChange($event)" class="custom-select">
                <option value="low">Low (Today)</option>
                <option value="moderate">Moderate (Mon,Wed,Fri)</option>
                <option value="high">High (Mon - Fri)</option>
              </select>
              <button type="submit" class="btn btn primary">Confirm</button>
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
        intentisy : ''
      }
    },
    computed : {
        program() {
          return this.$store.state.program
        },
        UserId() {
          return this.$store.state.UserId
        }
    },
    methods : {
      createSchedule(ProgramId, intentisy) {
        let payload = { UserId, ProgramId, intentisy }
        this.$store.dispatch('')
      },
      showIntensity() {
        this.show = true
      },
      onChange(event) {
        console.log(event.target.value)
      }
    },
    created () {
      this.$store.dispatch('detailProgram', localStorage.id)
    }

}
</script>

<style>

</style>