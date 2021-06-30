<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
      </div>
      <div class="col">
    <form class="card mt-5 item-align-center text-center rounded py-5" @submit.prevent="loginHandler" style="width: 35rem;">
      <div class="row mb-3">
        <div class="col"></div>
        <div class="col-8">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Username</label>
            <input type="text" class="form-control" v-model="username" aria-describedby="emailHelp">
          </div>
        </div>
        <div class="col"></div>
      </div>
      <div class="row mb-3">
        <div class="col"></div>
        <div class="col-8">
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" v-model="password">
          </div>
        </div>
        <div class="col"></div>
      </div>
      <div class="row mb-3">
        <div class="col"></div>
        <div class="col">
        </div>
        <div class="col">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
        <div class="col">
        </div>
        <div class="col"></div>
      </div>
    </form>
      </div>
      <div class="col">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    loginHandler () {
      const data = {
        username: this.username,
        password: this.password
      }
      this.$store.dispatch('loginHandler', data)
    }
  }
}

</script>

<style>

</style>
