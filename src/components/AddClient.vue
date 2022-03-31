<script>
export default {
  name: "AddClient",

  data() {
    return {
      clients: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        company_id: 1,
      },
    };
  },

  created() {
    let baseUrl = "http://localhost:3003/api/v1/clients";

    const requestOptions = {
      methods: "post",
      headers: { "Content-Type": "application/json" },
      // body: JSON.stringify(this.clients),
    };

    fetch(baseUrl, requestOptions)
      .then((res) => res.json())
      .then((data) => (this.clients = data));
  },

  // methods: {
  //   postData(e) {
  //     let baseUrl = "http://localhost:3003/api/v1/clients";

  //     fetch(baseUrl, this.clients).then((res) => res.json());
  //     e.preventDefault();
  //   },
  // },
};
</script>

<template>
  <form v-on:submit="clients" method="post">
    <div class="mb-4">
      <label for="firstName" class="form-label">First name</label>
      <input
        type="text"
        class="form-control"
        id="firstName"
        placeholder="First name"
        v-model="clients.first_name"
      />
    </div>
    <div class="mb-4">
      <label for="lastName" class="form-label">Last name</label>
      <input
        type="text"
        class="form-control"
        id="lastName"
        placeholder="last name"
        v-model="clients.last_name"
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
        v-model="clients.email"
      />
    </div>
    <div class="mb-4">
      <label for="phone" class="form-label">Phone</label>
      <input
        type="text"
        class="form-control"
        id="phone"
        placeholder="phone"
        v-model="clients.phone"
      />
    </div>
    <div class="mb-4">
      <label for="companyId" class="form-label" hidden>Company ID</label>
      <input
        type="number"
        class="form-control"
        id="companyId"
        v-model="clients.company_id"
        hidden
      />
    </div>
    <button type="submit" class="btn btn-primary">Add</button>
  </form>
</template>
