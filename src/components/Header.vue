<script setup>

import PicoThemeToggle from "./PicoThemeToggle.vue";
</script>

<template>
    <nav class="bg-aliceblue">
      <ul>
        <li class="header-title"><strong>Employee Management System</strong></li>
      </ul>
      <PicoThemeToggle />
    </nav>
</template>

<style scoped>
  .bg-aliceblue {
    background-color: aliceblue;
  }
</style>