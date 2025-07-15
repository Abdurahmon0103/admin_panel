<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 p-4">
    <div class="bg-white shadow-md rounded-lg p-6 w-full max-w-sm">
      <!-- Header -->
      <div class="flex flex-col items-center mb-6">
        <div class="h-10 mb-3 flex items-center justify-center gap-2">
          <!-- Logo -->
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.23 8.17C17.99 7.41 16.53 7 15.04 7L15.04 0C18.02 0 20.93 0.82 23.41 2.35C25.88 3.89 27.81 6.08 28.95 8.64C30.09 11.2 30.39 14.01 29.8 16.73C29.22 19.44 27.79 21.94 25.69 23.89C23.58 25.85 20.9 27.19 17.98 27.73C15.06 28.27 12.04 27.99 9.29 26.93C6.54 25.87 4.18 24.08 2.53 21.77C0.88 19.47 0 16.76 0 14L7.52 14C7.52 15.38 7.96 16.73 8.79 17.88C9.61 19.04 10.79 19.93 12.16 20.46C13.54 20.99 15.05 21.13 16.51 20.86C17.97 20.59 19.31 19.92 20.37 18.94C21.42 17.97 22.13 16.72 22.42 15.36C22.72 14 22.57 12.6 22 11.32C21.43 10.04 20.46 8.94 19.23 8.17Z"
              fill="#5046E5"
            />
          </svg>
          <h2 class="text-xl font-semibold text-gray-800">Xush kelibsiz!</h2>
        </div>
        <p class="text-sm text-gray-500 text-center mt-1">
          Iltimos hisob ma'lumotlarini kiriting
        </p>
      </div>

      <!-- Xatolik chiqishi -->
      <div v-if="showError" class="mb-3">
        <Alert variant="destructive">
          <AlertCircle class="w-4 h-4" />
          <AlertTitle>Xatolik</AlertTitle>
          <AlertDescription>
            Login yoki parol noto‘g‘ri. Qaytadan urinib ko‘ring.
          </AlertDescription>
        </Alert>
      </div>

      <!-- Form -->
      <form @submit.prevent="login" class="space-y-4">
        <div>
          <label
            for="userLogin"
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            Login
          </label>
          <input
            id="userLogin"
            v-model="userLogin"
            type="text"
            placeholder="Login"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div>
          <label
            for="userPassword"
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            Parol
          </label>
          <input
            id="userPassword"
            v-model="userPassword"
            type="password"
            placeholder="•••••••"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div class="flex items-center">
          <input
            id="remember"
            v-model="rememberMe"
            type="checkbox"
            class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label for="remember" class="ml-2 block text-sm text-gray-700">
            Eslab qolish
          </label>
        </div>

        <button
          type="submit"
          class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
          :disabled="isLoading"
        >
          <span v-if="isLoading">Yuklanmoqda...</span>
          <span v-else>Kirish</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { useAuthStore } from "@/stores/auth";
import { AlertCircle } from "lucide-vue-next";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// Form data
const userLogin = ref("");
const userPassword = ref("");
const rememberMe = ref(false);

// State
const isLoading = ref(false);
const showError = ref(false);

// Store va router
const auth = useAuthStore();
const router = useRouter();

// Kirish funksiyasi
async function login() {
  isLoading.value = true;
  showError.value = false;

  const payload = {
    userLogin: userLogin.value,
    userPassword: userPassword.value,
  };

  try {
    const response = await axios.post("/auth/login", payload);
    console.log("✅ Javob:", response);

    const token = response.data.accessToken; // bu nomni logdan aniqlang

    if (token) {
      auth.login(token);
      router.push("/");
    } else {
      showError.value = true;
    }
  } catch (error) {
    console.error("❌ Login xatolik:", error);
    showError.value = true;
  } finally {
    isLoading.value = false;
  }
}
</script>

<style scoped></style>
