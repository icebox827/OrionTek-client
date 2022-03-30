<script setup>
import { RouterLink, RouterView } from "vue-router";
import WelcomeVue from "./components/Welcome.vue";
import FooterVue from "./components/Footer.vue";
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand brand">OrionTek</a>
        <span class="title">Client manangement software</span>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav"></div>
        </div>
      </div>
    </nav>
  </header>
  <WelcomeVue />
  <FooterVue />
</template>

<style>
@import "@/assets/base.css";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.brand {
  font-weight: 900;
  font-size: xx-large;
}

.title {
  color: whitesmoke;
}
</style>
