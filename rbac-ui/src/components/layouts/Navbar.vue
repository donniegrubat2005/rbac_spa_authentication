<template>
  <nav class="bg-gray-800 text-white px-4 py-3 flex justify-between">
    <h1 class="font-bold">MyApp</h1>

    <div v-if="auth.isAuthenticated">
      <span class="mr-4">{{ auth.user?.name }}</span>
      <button @click="logout" class="bg-red-500 px-3 py-1 rounded">
        Logout
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useAuthStore } from '../../stores/auth'

const auth = useAuthStore()

const logout = () => {
  auth.logout()
}
</script>