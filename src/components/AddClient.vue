<script>
export default {
  name: "AddClient",

  data() {
    return {
      clients: [],
    };
  },

  created() {
    let baseUrl = "http://localhost:3003/api/v1/clients";

    let post = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(baseUrl, post).then((res) => res.json());
  },
};
</script>

<template>
  <form>
    <div class="mb-3">
      <label for="firstName" class="form-label">First name</label>
      <input type="text" class="form-control" id="firstName" />
    </div>
    <div class="mb-3">
      <label for="lastName" class="form-label">Last name</label>
      <input type="text" class="form-control" id="lastName" />
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <input
        type="email"
        class="form-control"
        id="email"
        aria-describedby="emailHelp"
      />
    </div>
    <div class="mb-3">
      <label for="phone" class="form-label">Phone</label>
      <input type="text" class="form-control" id="phone" />
    </div>
    <button type="submit" class="btn btn-primary">Add</button>
  </form>
</template>
