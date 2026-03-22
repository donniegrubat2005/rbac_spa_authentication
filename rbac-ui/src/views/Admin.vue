<script setup>
import { onMounted, ref } from 'vue'
import api from '@/services/api'

const data = ref(null)

onMounted(async () => {
  const res = await api.get('admin/')
  data.value = res.data
})
</script>

<template>
  <div>
    <h2>Admin Panel</h2>
    <pre>{{ data }}</pre>
  </div>
</template>