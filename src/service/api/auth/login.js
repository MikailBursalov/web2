import { api } from '@/service/api/axios'

export const Login = async (data) => {
  try {
    return await api.post('auth/login/', data)
  } catch (error) {
    throw error
  }
}
