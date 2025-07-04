<template>
  <div class="flex h-screen bg-gray-100 border-r-2 border-black">
    <Sidebar />
    <div class="flex-1 flex flex-col overflow-hidden">
      <Header />
      <div class="flex-1 overflow-x-hidden overflow-y-auto bg-white p-6">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "./views/Sidebar.vue";
import Header from "./views/Header.vue";
import { RouterView } from "vue-router";
</script>

<style></style>
