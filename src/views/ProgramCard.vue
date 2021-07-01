<template>
   <div class="card card-custom m-5" style="width: 20rem">
          <img
            :src="data.thumbnail"
            class="card-img-top mt-2"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title"> {{ data.title }} </h5>
            <span v-if="age < 50 && data.type != 'Balance'" class="badge alert-warning ">Recommended</span>
            <span class="badge alert-primary m-2">{{ data.type }}</span>
            <br><button @click.prevent="toDetailPage(data.id)" class="btn btn-dark">See Details</button>
          </div>
        </div>
</template>

<script>
export default {
    name : 'ProgramCard',
    props : ['data'],
    computed : {
        age () {
            return this.$store.state.age
        }
    },
    methods : {
        toDetailPage(id) {
            this.$store.dispatch('detailProgram', id)
        }
    }
}
</script>

<style>
.card-custom {
    border-radius: 10%;
}

.card-img-top {
    border-radius: 10%;
}

.card-detail {
  border-radius: 5%;
}
</style>