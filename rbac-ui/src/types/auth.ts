export type Role = 'admin' | 'editor' | 'user'

export interface User {
  id: number
  name: string
  email: string
  role: Role
  token: string
}