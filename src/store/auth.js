import { defineStore } from 'pinia';
import { loginUser } from '@/api/auth';

export const useAuthStore = defineStore({
  state: () => ({
    userId: null,
    token: null,
  }),
  actions: {
    async loginUser(userId, password) {
      response = await loginUser(userId, password);
    },
  },
});
