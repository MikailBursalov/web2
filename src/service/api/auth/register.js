import { api } from '@/service/api/axios'

export const Register = async (data) => {
  try {
    return await api.post('/register/', data)
  } catch (error) {
    throw error
  }
}
