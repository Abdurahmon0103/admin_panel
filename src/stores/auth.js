import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isLoggedIn: !!localStorage.getItem("token"),
    token: localStorage.getItem("token") || "",
  }),
  actions: {
    login(token) {
      localStorage.setItem("token", token);
      this.token = token;
      this.isLoggedIn = true;
    },
    logout() {
      localStorage.removeItem("token");
      this.token = "";
      this.isLoggedIn = false;
    },
  },
});
