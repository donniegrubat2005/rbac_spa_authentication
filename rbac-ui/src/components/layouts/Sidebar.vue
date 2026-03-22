<template>
  <aside class="w-64 bg-gray-100 h-screen p-4">
    <ul>
      <li v-if="canAccess('view_dashboard')">Dashboard</li>
      <li v-if="canAccess('manage_users')">Users</li>
      <li v-if="canAccess('edit_content')">Content</li>
    </ul>
  </aside>
</template>

<script setup lang="ts">
import { useAuthStore } from '../../stores/auth'
import { can } from '../../utils/rbac'

const auth = useAuthStore()

const canAccess = (perm: string) => {
  return can(auth.role, perm)
}
</script>