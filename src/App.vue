<script setup>
import { RouterLink, RouterView } from "vue-router";
import Nav from "@/components/Nav.vue"
</script>

<template>
  <header>
    <Nav/>
  </header>

  <RouterView />
</template>


<style>
body {
  margin: 0px;
}
</style>