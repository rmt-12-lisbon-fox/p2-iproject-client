<template>
  <div class="result page">
    <div
      v-bind:style="{ backgroundImage: 'url(' + background.img + ')' }"
      class="bg-img bg-opaque d-flex"
    >
      <div class="d-flex justify-content-center" id="home-card">
        <div class="container">
          <div class="card-title">
            <div class="container pt-4">
              <h2 class="text-center" id="result-heading">Result</h2>
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
                  <div>
                    <b-button id="show-btn" class="btn-sm" variant="primary" @click="$bvModal.show('form-modal')">Send Result to Email</b-button>

                    <b-modal id="form-modal" hide-footer>
                      <template #modal-title>
                        Send Result to Email
                      </template>
                      <form v-on:submit.prevent="sendEmail">
                        <div class="mb-3">
                          <label for="email" class="form-label">Email:</label>
                          <input type="email" id="email"
                            class="form-control"
                            v-model="email"
                          >
                        </div>
                        <div class="mb-3">
                          <input type="checkbox" class="form-check-input" v-model="subscribe">
                          <label class="form-check-label" for="subscribe">Subscribe to current coordinates. Result will be sent every Sunday.</label>
                        </div>
                        <div class="modal-footer">
                          <b-button type="submit" class="mt-3" variant="primary" block @click="$bvModal.hide('form-modal')">Submit</b-button>
                        </div>
                      </form>
                    </b-modal>
                  </div>
                </div>
                <div class="col text-center">
                  <button class="btn btn-primary btn-sm">
                    <router-link to="/guide" target="_blank"  style="text-decoration: none; color: inherit;">
                      Table Guide
                    </router-link>
                  </button>
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
      email: '',
      subscribe: false
    }
  },
  methods: {
    sendEmail () {
      const payload = {
        email: this.email,
        subscribe: this.subscribe,
        city: this.result.city,
        data: this.result.data,
        lat: Number.parseFloat(this.result.latitude),
        long: Number.parseFloat(this.result.longitude)
      }
      this.$store.dispatch('sendEmail', payload)
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
