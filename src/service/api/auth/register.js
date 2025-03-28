import { api } from '@/service/api/axios'

export const Register = async (data) => {
  try {
    return await api.post('auth/register/', data)
  } catch (error) {
    throw error
  }
}
