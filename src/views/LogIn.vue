<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 p-4">
    <div class="bg-white shadow-md rounded-lg p-6 w-full max-w-sm">
      <!-- Logo and Welcome -->
      <div class="flex flex-col items-center mb-6">
        <div class="h-10 mb-3">
          <svg
            width="152"
            height="28"
            viewBox="0 0 152 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <!-- Your SVG logo paths here -->
            <path
              d="M19.23 8.17C17.99 7.41 16.53 7 15.04 7L15.04 0C18.02 0 20.93 0.82 23.41 2.35C25.88 3.89 27.81 6.08 28.95 8.64C30.09 11.2 30.39 14.01 29.8 16.73C29.22 19.44 27.79 21.94 25.69 23.89C23.58 25.85 20.9 27.19 17.98 27.73C15.06 28.27 12.04 27.99 9.29 26.93C6.54 25.87 4.18 24.08 2.53 21.77C0.88 19.47 0 16.76 0 14L7.52 14C7.52 15.38 7.96 16.73 8.79 17.88C9.61 19.04 10.79 19.93 12.16 20.46C13.54 20.99 15.05 21.13 16.51 20.86C17.97 20.59 19.31 19.92 20.37 18.94C21.42 17.97 22.13 16.72 22.42 15.36C22.72 14 22.57 12.6 22 11.32C21.43 10.04 20.46 8.94 19.23 8.17Z"
              fill="#5046E5"
            />
            <!-- Include all other paths from your original SVG -->
          </svg>
        </div>
        <h2 class="text-xl font-semibold text-gray-800">Xush kelibsiz!</h2>
        <p class="text-sm text-gray-500 text-center mt-1">
          Iltimos hisob ma'lumotlarini kiriting
        </p>
      </div>

      <!-- Login Form -->
      <form @submit.prevent="handleLogin" class="space-y-4">
        <!-- Username Input -->
        <div>
          <label
            for="username"
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            Login
          </label>
          <div class="relative">
            <input
              id="username"
              v-model="username"
              type="text"
              placeholder="Login"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
        </div>

        <!-- Password Input -->
        <div>
          <label
            for="password"
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            Parol
          </label>
          <div class="relative">
            <input
              id="password"
              v-model="password"
              type="password"
              placeholder="•••••••"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
        </div>

        <!-- Remember Me & Forgot Password -->
        <div class="flex items-center justify-between">
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
          <a href="#" class="text-sm text-indigo-600 hover:text-indigo-500">
            Parolni unutdingizmi?
          </a>
        </div>

        <!-- Submit Button -->
        <div>
          <button
            type="submit"
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
          >
            Kirish
          </button>
        </div>
      </form>

      <!-- Alternative Login Options -->
      <div class="mt-6">
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-2 bg-white text-gray-500"> Yoki </span>
          </div>
        </div>

        <div class="mt-6 grid grid-cols-2 gap-3">
          <button
            type="button"
            class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span class="sr-only">Sign in with Google</span>
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12.545 10.239v3.821h5.445c-0.712 2.315-2.647 3.972-5.445 3.972-3.332 0-6.033-2.701-6.033-6.032s2.701-6.032 6.033-6.032c1.498 0 2.866 0.549 3.921 1.453l2.814-2.814c-1.784-1.667-4.166-2.685-6.735-2.685-5.522 0-10 4.477-10 10s4.478 10 10 10c8.396 0 10-7.496 10-10 0-0.67-0.069-1.325-0.189-1.961h-9.811z"
              />
            </svg>
          </button>
          <button
            type="button"
            class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span class="sr-only">Sign in with Apple</span>
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Sign Up Link -->
      <div class="mt-6 text-center text-sm">
        <span class="text-gray-600">Hisobingiz yo'qmi?</span>
        <a
          href="#"
          class="font-medium text-indigo-600 hover:text-indigo-500 ml-1"
        >
          Ro'yxatdan o'tish
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const username = ref("");
const password = ref("");
const rememberMe = ref(false);

const handleLogin = () => {
  // Add your login logic here
  console.log("Logging in with:", {
    username: username.value,
    password: password.value,
    rememberMe: rememberMe.value,
  });

  // Redirect after successful login
  router.push("/dashboard");
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
