// src/stores/auth.js
import { defineStore } from 'pinia'
import api from '../api/api'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    access: localStorage.getItem('access') || null,
    refresh: localStorage.getItem('refresh') || null,
    role: localStorage.getItem('role') || null,
  }),

  actions: {
    async login(data) {
      const res = await api.post('login/', data)

      this.access = res.data.access
      this.refresh = res.data.refresh
      this.role = res.data.role

      localStorage.setItem('access', this.access)
      localStorage.setItem('refresh', this.refresh)
      localStorage.setItem('role', this.role)
    },

    async register(data) {
      await api.post('register/', data)
    },

    logout() {
      this.access = null
      this.refresh = null
      this.role = null
      localStorage.clear()
    }
  }
})