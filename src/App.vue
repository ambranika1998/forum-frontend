<template>
  <main>
    <Nav/>
    <router-view/>
  </main>

</template>

<script>
import Nav from "@/components/Nav.vue";

export default {
  name: 'App',
  components: {Nav},
  data() {
    return {
      authenticated: false,
      // this is only for testing purposes no actual app will have this
      // an api call will validate user credentials
      mockAccount: {
        username: "ameyrupji",
        password: "P@ssword!"
      }
    }
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding-right: 10px;
}

#nav a:not(:first-child) {
  border-left: 1px solid #2c3e50;
  padding-left: 10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
