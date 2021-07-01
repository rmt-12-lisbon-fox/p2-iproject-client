<template>
    <!-- INVESTOR LIST -->
    <section id="investor-list" style="margin-left: 8%; margin-right: 8%">
        <div class="page-title shadow rounded bg-secondary bg-gradient">
            <h3>All Investors</h3>
        </div>

        <div class = 'card'>
            <div class= "card-body" style="overflow-x: scroll">
                <table style="overflow-x: auto" class="table table-striped table-hover tableMovies table-responsive" >
                    <thead class='table-primary'>
                        <tr>
                            <th style="text-align:center">Name</th>
                            <th style="text-align:center">Region</th>
                            <th style="text-align:center">Industry</th>
                            <th style="text-align:center">Website URL</th>
                            <th style="text-align:center">Linkedin URL</th>                            
                            <th style="text-align:center">Requester ID</th>
                            <th style="text-align:center">Status</th>
                            <th style="text-align:center">Verify</th>                            
                        </tr>
                    </thead>
                    <tbody id="movieList">
                        <tr v-for="(investor, index) in allinvestors" :key='investor.id' :index='index' :investor='investor'>
                            <td style="text-align:center;padding-left:15px;padding-right:20px">{{investor.name}}</td>

                            <td style="text-align:center">{{investor.region}}</td>

                            <td style="text-align:center">{{investor.industry}}</td>

                            <td style="text-align:center">{{investor.website_url}}</td>                            

                            <td style="text-align:center">{{investor.linkedin_url}}</td>

                            <td style="text-align:center">{{investor.requesterId}}</td>

                            <td style="text-align:center">{{investor.status}}</td>

                            <td style="text-align:center">
                                <a class="badge bg-success" href='#' @click.prevent="verify(investor.id)">Verify</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
</template>

<script>
import router from '../router'
export default {
  name: 'Dashboard',
  methods: {
    verify (id) {
      this.$store.dispatch('verifyInvestor', id)
    }
  },
  computed: {
    allinvestors () {
      return this.$store.state.allinvestors
    }
  },
  created () {
    this.$store.dispatch('fetchAllInvestors')
    this.$store.commit('SLIDERTOGGLE', false)
  }
}
</script>

<style>

</style>
