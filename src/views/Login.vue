<template>
  <div class="form-signin w-100 m-auto">
    <form @submit.p.prevent="login">
      <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

      <div class="form-floating">
        <input type="text" class="form-control" id="floatingInput" placeholder="Username"
               v-model="input.username">
        <label for="floatingInput">Username</label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
               v-model="input.password">
        <label for="floatingPassword">Password</label>
      </div>
      <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
    </form>

  </div>

</template>

<script>
import axios from "axios";

export default {
  name: 'Login',
  data() {
    return {
      input: {
        username: "",
        password: ""
      }
    }
  },
  methods: {
    async login() {
      if (this.input.username !== "" || this.input.password !== "") {
        const response = axios.post('http://127.0.0.1:8000/agent/api/token/', this.input)
        await response.then(result => {
          localStorage.setItem('token', result.data.access)
        }).then(() => (this.$router.replace({name: "Home"})));

        await axios.get('http://127.0.0.1:8000/agent/get-details', {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        }).then(result => {
          localStorage.setItem('user', JSON.stringify(result.data))
          localStorage.setItem('username', result.data.username)

        })
      } else {
        alert("Username and password must be present");
      }
    }
  }
}
</script>

<style>
.form-signin {
  max-width: 330px;
  padding: 15px;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

</style>