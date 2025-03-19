import axios from 'axios'
import Cookies from 'js-cookie'

axios.defaults.withCredentials = true

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
})

const refreshToken = async () => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/auth/refresh-token`,
      { refresh_token: Cookies.get('refresh_token') }
    )
    const newAccessToken = response.data.access_token
    Cookies.set('access_token', newAccessToken, {
      expires: 1 / 24, // 1 час
      secure: true,
      sameSite: 'Strict',
    })
    return newAccessToken
  } catch (error) {
    console.error('Refresh token failed', error)
    window.location.href = '/login'
    throw error
  }
}

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      try {
        const newAccessToken = await refreshToken()
        error.config.headers['Authorization'] = `Bearer ${newAccessToken}`
        return axios(error.config)
      } catch {
        return Promise.reject(error)
      }
    }
    return Promise.reject(error)
  }
)

export { api }
