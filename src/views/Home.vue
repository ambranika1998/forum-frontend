<template>
  <div>


    <div class="card w-75 mb-3">
      <form class="d-flex">
        <input class="form-control me-2" type="search" v-model="filter" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" v-on:click="search">Search</button>
      </form>
    </div>

    <div class="card w-75 mb-3" v-for="section in sections">
      <div class="card-body">
        <h5 class="card-title">{{ section.name }}</h5>
        <p class="card-text">{{ section.description }}</p>
        <!--        <a href="#" v-if="user.canEditSection" class="btn btn-primary">Button</a>-->
        <a href="#" class="btn btn-primary">Edit</a>
      </div>
    </div>
  </div>

</template>

<script>

import axios from "axios";
import {ref} from "vue";

export default {
  name: 'Home',
  setup() {
    const sections = ref([])
    const filter = ref("")
    return {
      sections, filter
    }
  },
  methods: {
    search () {
      axios.post('http://127.0.0.1:8000/topic/topic-sections/', {filter: this.filter}).then(result => {
        this.sections = result.data.results;
      });
    }
  },
  async created() {
    await axios.post('http://127.0.0.1:8000/topic/topic-sections/', {filter: this.filter}).then(result => {
      this.sections = result.data.results;
    });
  }
}
</script>
