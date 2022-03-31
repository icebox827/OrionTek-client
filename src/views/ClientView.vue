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
.client {
  display: flex;
  justify-content: space-between;
}

.heading,
.add-button {
  margin: 1.5rem;
}

a {
  color: white;
  text-decoration: none;
}
</style>
