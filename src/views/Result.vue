<template>
  <div>
    <div
      v-bind:style="{ backgroundImage: 'url(' + background.img + ')' }"
      class="bg-img bg-opaque d-flex"
    >
      <div class="d-flex justify-content-center" id="home-card">
        <div class="container">
          <div class="card-title">
            <div class="container pt-4">
              <h2 class="text-center">Result</h2>
              <hr>
              <div class="row">
                <div class="col-4">
                  <h6>Location: {{ result.city }}, {{ result.country }}</h6>
                </div>
                <div class="col-3 text-center">
                  <select class="form-select form-select-sm" v-model="filterType">
                    <option value="All">All</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div class="col-3 text-center">
                  <button class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#form-email">
                    Send result to my email
                  </button>
                  <!-- Modal -->
                  <div class="modal fade text-start" id="form-email" tabindex="-1">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="form-email-label">Send result to my email</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          <form>
                            <div class="mb-3">
                              <label for="email" class="col-form-label">Email:</label>
                              <input type="email" class="form-control" id="email"
                                v-model="email"
                              >
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-primary">Submit</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col text-center">
                  <button class="btn btn-primary btn-sm">Table Guide</button>
                </div>
              </div>
                <h6>Lat: {{ coordinates.lat }}, Long: {{ coordinates.long }}</h6>
            </div>
              <div class="table-responsive">
                <table class="table table-bordered d-block">
                  <thead>
                    <tr class="text-center">
                      <th rowspan="2">Date</th>
                      <th colspan="4">Rise</th>
                      <th colspan="4">Culmination</th>
                      <th colspan="4">Set</th>
                    </tr>
                    <tr class="text-center">
                      <th>Alt</th>
                      <th>Azimuth</th>
                      <th>Time</th>
                      <th>Visible</th>
                      <th>Alt</th>
                      <th>Azimuth</th>
                      <th>Time</th>
                      <th>Visible</th>
                      <th>Alt</th>
                      <th>Azimuth</th>
                      <th>Time</th>
                      <th>Visible</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="el in filteredType"
                      :key="el.id"
                    >
                      <td>{{ el.date }}</td>
                      <td>{{ el.riseAlt }}°</td>
                      <td>{{ el.riseAz }}°</td>
                      <td>{{ el.riseTime }}</td>
                      <td>{{ el.riseVisible }}</td>
                      <td>{{ el.culminationAlt }}°</td>
                      <td>{{ el.culminationAz }}°</td>
                      <td>{{ el.culminationTime }}</td>
                      <td>{{ el.culminationVisible }}</td>
                      <td>{{ el.setAlt }}°</td>
                      <td>{{ el.setAz }}°</td>
                      <td>{{ el.setTime }}</td>
                      <td>{{ el.setVisible }}</td>
                    </tr>
                  </tbody>
                </table>
                <h6 v-if="!filteredType.length">No visible ISS predictions were found :(</h6>
              </div>
              <div class="card-body container">
            </div>
        </div>
        </div>
      </div>
      <div>
        <router-link to="/">
          <i
            class="position-absolute translate-middle fas fa-chevron-up 3x"
          ></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Result',
  data () {
    return {
      filterType: 'All',
      email: ''
    }
  },
  computed: {
    background () {
      return this.$store.state.background
    },
    result () {
      return this.$store.state.result
    },
    coordinates () {
      const lat = Number.parseFloat(this.result.latitude).toFixed(3)
      const long = Number.parseFloat(this.result.longitude).toFixed(3)
      return { lat, long }
    },
    tableData () {
      return this.$store.state.tableData
    },
    filteredType () {
      return this.$store.getters.filteredType(this.filterType)
    }
  },
  created () {
    this.$store.dispatch('makeTableData')
  }
}
</script>

<style>

</style>
