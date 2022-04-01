<script setup>
import { RouterLink } from "vue-router";
</script>

<script>
export default {
  name: "destroyClient",

  data() {
    return {
      clients: [],
    };
  },

  methods: {
    addClients() {
      let baseUrl = `http://localhost:3003/api/v1/clients/4{id}`;

      fetch(baseUrl, {
        method: "DELETE",
        headers: { "Content-Type": "applications/json" },
        body: JSON.stringify(this.clients),
      })
        .then((res) => res.json())
        .then((data) => (this.clients = data));
    },
  },
};
</script>

<template>
  <div>
    <a href="#">
      <h3 class="alert">Client deleted successfully</h3>
      <RouterLink to="/client"></RouterLink>
    </a>
  </div>
</template>
