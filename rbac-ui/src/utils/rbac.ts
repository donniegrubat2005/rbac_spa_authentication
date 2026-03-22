import type { Role } from '../types/auth'

export const rolePermissions: Record<Role, string[]> = {
  admin: ['view_dashboard', 'manage_users', 'edit_content'],
  editor: ['view_dashboard', 'edit_content'],
  user: ['view_dashboard'],
}

export function can(role: Role | null, permission: string): boolean {
  if (!role) return false
  return rolePermissions[role].includes(permission)
}