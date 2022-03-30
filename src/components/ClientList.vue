<script>
export default {
  name: "ClientList",

  data() {
    return {
      clients: [],
    };
  },

  created() {
    fetch("http://localhost:3003/api/v1/clients")
      .then((res) => res.json())
      .then((data) => (this.clients = data));
  },
};
</script>

<template>
  <div>
    <div v-for="client in clients" :key="client.id">
      <h3>{{ client.first_name }}</h3>
    </div>
  </div>
</template>

<style></style>
