<template>
  <div class="form-signin w-100 m-auto">
    <form @submit.p.prevent="register">
      <h1 class="h3 mb-3 fw-normal">Please register</h1>
      <div class="form-floating">
        <input type="text" class="form-control" id="floatingFirstName" placeholder="First Name" v-model="input.first_name">
        <label for="floatingFirstName">First Name</label>
      </div>
      <div class="form-floating">
        <input type="text" class="form-control" id="floatingLastName" placeholder="Last Name" v-model="input.last_name">
        <label for="floatingLastName">Last Name</label>
      </div>
      <div class="form-floating">
        <input type="text" class="form-control" id="floatingUsername" placeholder="Username" v-model="input.username">
        <label for="floatingUsername">Username</label>
      </div>
      <div class="form-floating">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="input.email">
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="input.password">
        <label for="floatingPassword">Password</label>
      </div>
      <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
    </form>

  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Register",
  data() {
    return {
      input: {
        username: "",
        first_name: "",
        last_name: "",
        email: "",
        password: ""
      }
    }
  },
  methods: {
    register() {
      if (this.input.username !== "" && this.input.password !== "" && this.input.username) {
        axios
            .post('http://127.0.0.1:8000/agent/register', this.input)
            .then(() => (this.$router.replace({name: "Login"})))
      } else {
        alert("An email and password must be present");
      }
    }
  }
}
</script>

<style scoped>

</style>