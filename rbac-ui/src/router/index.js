import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { can } from '../utils/rbac'

const routes = [
  { path: '/', component: () => import('../views/Landing.vue') },

  { path: '/login', component: () => import('../views/Login.vue') },
  { path: '/register', component: () => import('../views/Register.vue') },

  {
    path: '/dashboard',
    component: () => import('../views/Dashboard.vue'),
     meta: { requiresAuth: true }
  },

   {
    path: '/admin',
     component: () => import('../views/Admin.vue'),
    meta: { requiresAuth: true, role: 'admin' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const auth = useAuthStore()

  if (to.meta.requiresAuth && !auth.token) {
    return next('/login')
  }

  if (to.meta.role && auth.role !== to.meta.role) {
    return next('/dashboard')
  }

  next()
})

export default router