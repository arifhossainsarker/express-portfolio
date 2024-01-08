// authStore.js
import { defineStore } from 'pinia';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    isAuthenticated: false,
    token: '',
  }),
  actions: {
    login(token) {
      this.isAuthenticated = true;
      this.token = token;
    },
    logout() {
      this.isAuthenticated = false;
      this.token = '';
    },
  },
});
