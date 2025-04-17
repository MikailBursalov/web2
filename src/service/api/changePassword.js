import { api } from '@/service/api/axios'

export const ChangePassword = async (token, data) => {
  try {
    return await api.post('', data, {
      headers: { Authorization: `Bearer ${token}` },
    })
  } catch (err) {
    console.error(err)
  }
}
