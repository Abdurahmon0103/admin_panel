<template>
  <div class="min-h-screen flex flex-col bg-gray-100">
    <!-- Faqat login bo'lsa Header ko'rsatiladi -->
    <Header v-if="isLoggedIn" />

    <div class="flex flex-1 overflow-hidden">
      <!-- Faqat login bo'lsa Sidebar ko'rsatiladi -->
      <Sidebar v-if="isLoggedIn" class="max-sm:hidden" />

      <main class="flex-1 overflow-y-auto p-4">
        <RouterView />
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
const isLoggedIn = ref(localStorage.getItem("token") !== null);
</script>
