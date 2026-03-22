// src/services/api.js
import axios from 'axios'
import { useAuthStore } from '../stores/auth'

const api = axios.create({
  baseURL: 'http://localhost:8000/api/',
})

api.interceptors.request.use(config => {
  const auth = useAuthStore()
  if (auth.access) {
    config.headers.Authorization = `Bearer ${auth.access}`
  }
  return config
})

api.interceptors.response.use(
  res => res,
  async err => {
    const auth = useAuthStore()

    if (err.response?.status === 401 && auth.refresh) {
      try {
        const res = await axios.post('http://localhost:8000/api/token/refresh/', {
          refresh: auth.refresh
        })

        auth.access = res.data.access
        localStorage.setItem('access', auth.access)

        err.config.headers.Authorization = `Bearer ${auth.access}`
        return axios(err.config)
      } catch (e) {
        auth.logout()
      }
    }

    return Promise.reject(err)
  }
)

export default api