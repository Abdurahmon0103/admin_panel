// src/stores/auth.ts
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: null as string | null,
  }),
  actions: {
    login(token: string) {
      this.token = token;
      localStorage.setItem("accessToken", token);
    },
    logout() {
      this.token = null;
      localStorage.removeItem("accessToken");
    },
  },
});
