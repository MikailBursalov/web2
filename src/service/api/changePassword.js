import { api } from '@/service/api/axios'

// Шаг 1: Запрос на восстановление пароля по email
export const requestPasswordReset = async (token, data) => {
  try {
    const response = await api.post('auth/forgot-password', data, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return response.data // здесь обычно приходит resetToken
  } catch (err) {
    console.error('Ошибка при запросе восстановления пароля:', err)
    throw err
  }
}

// Шаг 2: Сброс пароля с использованием токена
export const resetPassword = async (token, data) => {
  try {
    const response = await api.post('auth/reset-password', data, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return response.data
  } catch (err) {
    console.error('Ошибка при сбросе пароля:', err)
    throw err
  }
}
