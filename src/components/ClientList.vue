<script setup>
import { RouterLink } from "vue-router";
</script>

<script>
export default {
  name: "ClientList",

  data() {
    return {
      clients: [],
    };
  },

  created() {
    let baseUrl = "http://localhost:3003/api/v1/clients";

    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => (this.clients = data));
  },

  methods: {
    deleteClient(id) {
      fetch("http://localhost:3003/api/v1/clients/" + id, {
        method: "DELETE",
      });
    },
  },
};
</script>

<template>
  <div class="card-container">
    <div v-for="client in clients" :key="client.id">
      <div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">
              {{ client.first_name }} {{ client.last_name }}
            </h5>
            <p class="card-text">Personal information</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">{{ client.email }}</li>
            <li class="list-group-item">{{ client.phone }}</li>
          </ul>
          <div class="card-body block-link">
            <a class="card-link">
              <RouterLink to="/updateClient">Update</RouterLink>
            </a>
            <a class="card-link" href="#" v-on:click="deleteClient"> Delete </a>
            <a class="card-link">
              <RouterLink to="/showClient">Details</RouterLink>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.card-container {
  display: flex;
  justify-content: space-around;
  padding-top: 3rem;
}

.card {
  width: 18rem;
  box-shadow: 16px 15px 12px 6px rgba(0, 0, 0, 0.73);
  -webkit-box-shadow: 16px 15px 12px 6px rgba(0, 0, 0, 0.73);
  -moz-box-shadow: 16px 15px 12px 6px rgba(0, 0, 0, 0.73);
}

.block-link {
  background-color: black;
}
</style>
