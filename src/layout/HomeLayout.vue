<script setup>
import SideNav from "./SideNav.vue";

</script>
<template>
  <div class="row m-0 p-0">
    <div class="col-2 p-0">
      <SideNav/>
    </div>
    <div class="col-10">
      <main class="container">
        <RouterView v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </RouterView>
      </main>
    </div>

  </div>

</template>
<style scoped></style>
