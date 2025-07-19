<template>
  <div class="min-h-screen flex flex-col bg-gray-100">
    <Header v-if="isLoggedIn" class="fixed w-full z-50" />
    <div class="flex flex-1 overflow-hidden">
      <Sidebar v-show="isLoggedIn" class="max-sm:hidden fixed h-screen mt-16" />
      <main class="flex-1 overflow-y-auto p-4">
        <RouterView class="ml-64 mt-20" />
      </main>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Sidebar from "./views/Sidebar.vue";
import Header from "./views/Header.vue";
import { RouterView } from "vue-router";
let a = ref(null);
let token = localStorage.getItem("token");
function isLoggedIn(login) {
  if (login === null) {
    a = token;
  } else {
    a = null;
  }
}
isLoggedIn(null);
</script>
