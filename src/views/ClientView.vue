<script setup>
import ClientList from "../components/ClientList.vue";
</script>

<template>
  <div class="client">
    <h1>List of all clients</h1>
    <ClientList />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .client {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
