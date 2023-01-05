<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">Home</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <router-link to="/login" class="nav-link active" aria-current="page" v-if="!isAuthenticated">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/register" v-if="!isAuthenticated">Register</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/profile" class="nav-link active" aria-current="page" v-if="isAuthenticated">Profile</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" v-if="isAuthenticated">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>

import {ref} from 'vue'
export default {
  name: "Nav",
  setup(){
    const username = ref('username' in localStorage ? localStorage.getItem('username') : "")
    const isAuthenticated = ref((!('token' in localStorage && localStorage.getItem('token') !== "")));
    return {
      username,
      isAuthenticated
    }
  }
}
</script>

<style scoped>

</style>