<template>
  <div class="mx-auto bg-white p-8 rounded-2xl text-center shadow-lg w-full max-w-md">
    <h2 class="text-2xl font-semibold text-gray-800 text-center mb-6">
      Welcome Back
    </h2>

    <form @submit.prevent="handleLogin" class="space-y-5">
      <div>
        <label class="block text-sm text-gray-600 mb-1">Email</label>
        <input type="email" placeholder="Enter your email" v-model="form.email"
          class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none">
      </div>

      <div>
        <label class="block text-sm text-gray-600 mb-1">Password</label>
        <input type="password" placeholder="Enter your password" v-model="form.password"
          class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none">
      </div>

      <div class="flex items-center justify-between text-sm">
        <label class="flex items-center gap-2">
          <input type="checkbox" class="accent-blue-500">
          Remember me
        </label>
        <a href="#" class="text-blue-500 hover:underline">Forgot?</a>
      </div>

      <button type="submit"
        class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
        Sign In
      </button>
    </form>
     <p class="text-sm text-center text-gray-600 mt-6">
      Don't have an account?
      <router-link to="/register" class="text-blue-500 hover:underline">Sign up</router-link>
    </p>
  
  </div>
  
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'

const auth = useAuthStore()
const router = useRouter()

const form = ref({
  email: '',
  password: ''
})

const handleLogin = async () => {
  await auth.login(form.value)
  router.push('/dashboard')
}

</script>