<template>
  <div class="flex">
    <Sidebar />
    <div class="flex-1 p-6">
      <Navbar />

      <h1 class="text-2xl font-bold mt-4">Dashboard</h1>

      <div v-if="canAccess('manage_users')" class="mt-4">
        <p>Admin Section</p>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import Navbar from "../components/layouts/Navbar.vue";
import Sidebar from "../components/layouts/Sidebar.vue";
import { useAuthStore } from "../stores/auth";
import { can } from "../utils/rbac";

const auth = useAuthStore();

const canAccess = (perm: string) => {
  return can(auth.role, perm);
};
</script>
