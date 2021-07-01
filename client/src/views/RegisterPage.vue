<template>
    <div class="container-fluid">
    <div class="row">
      <div class="col">
      </div>
      <div class="col">
    <form class="card mt-5 item-align-center text-center rounded py-5" @submit.prevent="register" style="width: 35rem;">
      <div class="row mb-3 d-flex justify-content-evenly">
        <div class="col-5">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Username</label>
            <input type="text" class="form-control" v-model="username" aria-describedby="emailHelp">
          </div>
        </div>
        <div class="col-5">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email</label>
            <input type="text" class="form-control" v-model="email" aria-describedby="emailHelp">
          </div>
        </div>
      </div>
      <div class="row mb-3 d-flex justify-content-evenly">
        <div class="col-5">
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" v-model="password">
          </div>
        </div>
        <div class="col-5">
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Name</label>
            <input type="text" class="form-control" v-model="name">
          </div>
        </div>
      </div>
      <div class="row mb-3 d-flex justify-content-evenly">
        <div class="col-5">
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Phone Number</label>
            <input type="text" class="form-control" v-model="phoneNumber">
          </div>
        </div>
        <div class="col-5">
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Address</label>
            <input type="text" class="form-control" v-model="address">
          </div>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col"></div>
        </div>
        <div class="col">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
        <div class="col">
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
  name: 'RegisterPage',
  data () {
    return {
      username: '',
      password: '',
      email: '',
      name: '',
      phoneNumber: '',
      address: ''
    }
  },
  methods: {
    register () {
      const data = {
        username: this.username,
        password: this.password,
        email: this.email,
        name: this.name,
        phoneNumber: this.phoneNumber,
        address: this.address
      }
      this.$store.dispatch('registerHandler', data)
    }
  }
}
</script>

<style>

</style>
