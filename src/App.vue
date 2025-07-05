<template>
  <div class="min-h-screen flex flex-col bg-gray-100">
    <Header />
    <div class="flex flex-1 overflow-hidden">
      <Sidebar class="max-sm:hidden" />
      <main class="flex-1 overflow-y-auto p-4">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "./views/Sidebar.vue";
import Header from "./views/Header.vue";
import { RouterView } from "vue-router";
</script>

<style></style>
