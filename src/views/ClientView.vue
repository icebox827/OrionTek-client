<script setup>
import { RouterLink } from "vue-router";
import ClientList from "../components/ClientList.vue";
</script>

<template>
  <div class="client">
    <h1 class="heading">List of all clients</h1>
    <a class="btn btn-primary add-button">
      <router-link to="/addClient">Add Client +</router-link>
    </a>
  </div>
  <ClientList />
</template>
<style>
/* .heading {
  text-align: center;
}

.add-button {
  display: flex;
  justify-content: start;
} */

.client {
  display: flex;
  justify-content: space-between;
}

a {
  color: white;
  text-decoration: none;
}
</style>
