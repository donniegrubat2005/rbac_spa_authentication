<template>
  <div class="mx-auto bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
  <h2 class="text-2xl font-semibold text-gray-800 text-center mb-6">
    Create Account
  </h2>

  <form @submit.prevent="register" class="space-y-5">
    <div>
      <label class="block text-sm text-gray-600 mb-1">First Name</label>
      <input type="text" v-model="form.first_name"
        class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none">
    </div>
    <div>
      <label class="block text-sm text-gray-600 mb-1">Last Name</label>
      <input type="text" v-model="form.last_name"
        class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none">
    </div>
     <div>
      <label class="block text-sm text-gray-600 mb-1">User Name</label>
      <input type="text" v-model="form.username"
        class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none">
    </div>

    <div>
      <label class="block text-sm text-gray-600 mb-1">Email</label>
      <input type="email" v-model="form.email"
        class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none">
    </div>

    <div>
      <label class="block text-sm text-gray-600 mb-1">Password</label>
      <input type="password" v-model="form.password"
        class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none">
    </div>

    <div>
      <label class="block text-sm text-gray-600 mb-1">Confirm Password</label>
      <input type="password" v-model="form.confirm_password"
        class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none">
    </div>

    <button type="submit"
      class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
      Sign Up
    </button>
  </form>

  <p class="text-sm text-center text-gray-600 mt-6">
    Already have an account?
    <router-link to="/login" class="text-blue-500 hover:underline">Sign in</router-link>
  </p>
</div>
</template>

<script setup>
import api from "../api/api.js";

import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'

const store = useAuthStore()

const form = ref({
  username: '',
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  confirm_password: '',
  role: 'user'
})

const register = async () => {
  await store.register(form.value)
}
</script>

<style scoped>

</style>