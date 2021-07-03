<template>
   <!-- Register -->
    <div class="container w-75 my-5 bg-light rounded shadow" id="register-page">
      <div class="row p-40 d-flex align-items-center">
        <div class="col">
          <img src="https://previews.123rf.com/images/oligliya/oligliya1503/oligliya150300025/37178559-fitness-concept-flat-isolated-vector-illustration-and-modern-design-element.jpg" style="width: 100%" alt="" />
        </div>
        <div class="col">
          <img src="https://www.kindpng.com/picc/m/208-2085671_running-man-icon-png-transparent-png.png" height="70" alt="">
          <h1>Go Exercise</h1>
          <form @submit.prevent="register">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label"
                >Username</label
              >
              <input
              v-model="username"
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="username"
                required
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label"
                >Email address</label
              >
              <input
              v-model="email"
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label"
                >Password</label
              >
              <input
              v-model="password"
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                required
              />
            </div>
            <div class="mb-3">
              <label for="age" class="form-label"
                >Age</label
              >
              <input
              v-model="age"
                type="number"
                class="form-control"
                id="age"
                required
              />
            </div>
            <div class="mb-3">
              <label for="age" class="form-label"
                >Gender</label
              >
            <select v-model="gender" required name="gender" id="">
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            </div>

            <button type="submit" class="btn theme_nav">Register</button>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name : 'Register',
  data() {
    return {
      username : '',
      email : '',
      password : '',
      age : '',
      gender : ''
    }
  },
  methods :  {
    register() {
      let payload = { email:this.email, password:this.password, username:this.username, age:this.age, gender:this.gender }
      this.$store.dispatch('register', payload)
    }
  }
}
</script>
