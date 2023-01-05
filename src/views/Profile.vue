<template>
  <form @submit.p.prevent="updateProfile">
    <h1 class="h3 mb-3 fw-normal">Update Profile</h1>
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

</template>

<script>


import {ref} from "vue";

export default {
  name: 'Profile',
  setup(){
    const isAuthenticated = ref((!('token' in localStorage && localStorage.getItem('token') !== "")));

    const user = ref(isAuthenticated ? JSON.parse(localStorage.getItem('user')) : null);
    let input = {
      username: "",
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    }

    if(user !== null) {
      input = {
        username: this.user.username,
        first_name: this.user.first_name,
        last_name: this.user.last_name,
        email: this.user.email,
        password: ""
      }
    }
    return {
      user,
      isAuthenticated,
      input
    }
  }

}
</script>
