<template>
    <!-- INVESTOR LIST -->
    <section id="investor-list" style="margin-bottom:2rem">
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
                            <th style="text-align:center">Type</th>
                            <th style="text-align:center">Status</th>
                        </tr>
                    </thead>
                    <tbody id="movieList">
                        <tr v-for="(investor, index) in allinvestors" :key='investor.id' :index='index' :investor='investor'>
                            <td style="text-align:center;padding-left:15px;padding-right:20px">{{investor.name}}</td>

                            <td style="text-align:center">{{investor.industry}}</td>

                            <td style="text-align:center">{{investor.type}}</td>
                                                
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
        verify(id) {
            this.$store.dispatch('verifyInvestor', id)
        }
    },
    computed: {
        allinvestors() {
            return this.$store.state.allinvestors
        }
    },  
    created() {
        this.$store.dispatch('fetchAllInvestors')
        this.$store.commit('SLIDERTOGGLE', false)
    }
}
</script>

<style>

</style>