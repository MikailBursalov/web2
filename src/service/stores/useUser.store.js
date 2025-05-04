import { create } from 'zustand'
import { api } from '@/service/api/axios'

const useUserStore = create((set) => ({
  profile: null,
  userLoading: false,
  error: null,

  fetchProfile: async (token) => {
    set({ userLoading: true, error: null })
    try {
      const res = await api.get('/users/profile', {
        headers: { Authorization: `Bearer ${token}` },
      })
      set({ profile: res.data.data, userLoading: false })
    } catch (err) {
      set({ error: err, userLoading: false })
    }
  },

  updateProfile: async (token, data) => {
    set({ userLoading: true, error: null })
    try {
      const res = await api.patch('/users/profile', data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      set({ profile: res.data.data, userLoading: false })
    } catch (err) {
      set({ error: err, userLoading: false })
    }
  },

  updateUserAvatar: async (token, data) => {
    set({ userLoading: true, error: null })
    try {
      const res = await api.post('/users/avatar', data, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      })

      set({ profile: res.data.data, userLoading: false })
    } catch (err) {
      set({ error: err, userLoading: false })
    }
  },

  sendPasswordResetRequest: async (token, email) => {
    set({ userLoading: true, error: null })
    try {
      await api.post(
        '/auth/forgot-password',
        { email },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      set({ userLoading: false })
    } catch (err) {
      set({ error: err, userLoading: false })
    }
  },

  resetPassword: async ({ token, resetToken, newPassword }) => {
    set({ userLoading: true, error: null })
    try {
      await api.post(
        '/auth/reset-password',
        {
          resetToken,
          newPassword,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      set({ userLoading: false })
    } catch (err) {
      set({ error: err, userLoading: false })
    }
  },
}))

export default useUserStore
