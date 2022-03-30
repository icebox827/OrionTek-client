<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="greetings">
    <h1 class="title">{{ msg }}</h1>
    <h3 class="sub-title">Manage clients and addresses</h3>
  </div>
  <div class="card-container">
    <div class="card" style="width: 18rem">
      <img src="..." class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Client</h5>
        <p class="card-text">
          View list of clients, create, update and delete clients
        </p>
        <a href="#" class="btn btn-primary">Initiate</a>
      </div>
    </div>

    <div class="card" style="width: 18rem">
      <img src="..." class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Address</h5>
        <p class="card-text">
          View list of address and corresponding client, create, update and
          delete addresses
        </p>
        <a href="#" class="btn btn-primary">Initiate</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.title,
.sub-title {
  text-align: center;
}

.card-container {
  display: flex;
  justify-content: space-evenly;
  margin-top: 3rem;
}
</style>
