<script setup>
import { RouterLink } from "vue-router";
import axios from "axios";
</script>

<script>
export default {
  name: "AddClient",

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
    handleSubmit(e) {
      e.preventDefault();
      let baseUrl = "http://localhost:3003/api/v1/clients";

      axios
        .post(baseUrl, {
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          password: this.password,
          phone: this.phone,
          company_id: this.company_id,
        })
        .then((res) => res.json());
    },
  },
};
</script>

<template>
  <form @submit="handleSubmit">
    <div class="mb-4">
      <label for="firstName" class="form-label">First name</label>
      <input
        type="text"
        class="form-control"
        id="firstName"
        placeholder="First name"
        v-model="first_name"
      />
    </div>
    <div class="mb-4">
      <label for="lastName" class="form-label">Last name</label>
      <input
        type="text"
        class="form-control"
        id="lastName"
        placeholder="last name"
        v-model="last_name"
      />
    </div>
    <div class="mb-4">
      <label for="email" class="form-label">Email</label>
      <input
        type="email"
        class="form-control"
        id="email"
        aria-describedby="emailHelp"
        placeholder="email"
        v-model="email"
      />
    </div>
    <div class="mb-4">
      <label for="phone" class="form-label">Phone</label>
      <input
        type="text"
        class="form-control"
        id="phone"
        placeholder="phone"
        v-model="phone"
      />
    </div>
    <div class="mb-4">
      <label for="companyId" class="form-label" hidden>Company ID</label>
      <input
        type="number"
        class="form-control"
        id="companyId"
        v-model="company_id"
        hidden
      />
    </div>
    <button type="submit" class="btn btn-primary">
      <a href="#">
        <RouterLink to="/client">Add</RouterLink>
      </a>
    </button>
  </form>
</template>
