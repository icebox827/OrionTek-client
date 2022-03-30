<script setup>
import { RouterLink } from "vue-router";
// import Image from "../assets/background.png";

// export default {
//   data: () => ({
//     Image,
//   }),
// };
</script>

<template>
  <div class="greetings">
    <h1 class="sub-title">Manage clients and addresses</h1>
  </div>
  <div class="card-container">
    <div class="card" style="width: 18rem">
      <img
        src="../assets/cytonn-photography-vWchRczcQwM-unsplash.jpg"
        class="card-img-top"
        alt="client"
      />
      <div class="card-body">
        <h5 class="card-title">Client</h5>
        <p class="card-text">
          View list of clients, create, update and delete clients
        </p>
        <a href="#" class="btn btn-primary">
          <RouterLink to="/client">Initiate</RouterLink>
        </a>
      </div>
    </div>

    <div class="card" style="width: 18rem">
      <img
        src="../assets/jonathan-kemper-xOs8yCItUM0-unsplash.jpg"
        class="card-img-top"
        alt="address"
      />
      <div class="card-body">
        <h5 class="card-title">Address</h5>
        <p class="card-text">
          View list of address and corresponding client, create, update and
          delete addresses
        </p>
        <a href="#" class="btn btn-primary">
          <RouterLink to="/address">Initiate</RouterLink>
        </a>
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

/* .greetings {
  background-image: url(../assets/background.png);
  background-position: center;
} */
.sub-title {
  text-align: center;
}

.card-container {
  display: flex;
  justify-content: space-evenly;
  margin-top: 3rem;
}
.card {
  box-shadow: 16px 15px 12px 6px rgba(0, 0, 0, 0.73);
  -webkit-box-shadow: 16px 15px 12px 6px rgba(0, 0, 0, 0.73);
  -moz-box-shadow: 16px 15px 12px 6px rgba(0, 0, 0, 0.73);
}
</style>
