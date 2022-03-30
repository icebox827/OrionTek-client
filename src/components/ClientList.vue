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
};
</script>

<template>
  <div>
    <div v-for="client in clients" :key="client.id">
      <div class="card-container">
        <div class="card" style="width: 18rem">
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
          <div class="card-body">
            <a href="#" class="card-link">Update</a>
            <a href="#" class="card-link">Delete</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.card-container {
  display: flex;
  justify-content: center;
}
</style>
