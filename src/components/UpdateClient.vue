<script setup>
import axios from "axios";
</script>

<script>
export default {
  name: "UpdateClient",

  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      phone: "",
      company_id: 1,
    };
  },

  methods: {
    handelSubmit(e, id) {
      e.preventDefault();

      const baseUrl = `http://localhost:300/api/v1/clients/${id}`;

      axios
        .patch(baseUrl, {
          
        })
    }
  },
};
</script>

<template>
  <div class="card-container">
    <div v-for="address in addresses" :key="address.id">
      <div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">
              <!-- {{ client.first_name }} {{ client.last_name }} -->
            </h5>
            <p class="card-text">Address detail</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">{{ address.street }}</li>
            <li class="list-group-item">{{ address.city }}</li>
            <li class="list-group-item">{{ address.state }}</li>
            <li class="list-group-item">{{ address.zip }}</li>
          </ul>
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
</style>
