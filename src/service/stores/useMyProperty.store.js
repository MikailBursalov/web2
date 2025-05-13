import { create } from 'zustand'
import { api } from '@/service/api/axios'

const useMyPropertyStore = create((set, get) => ({
  myProperties: [],
  count: 0,
  loading: false,
  error: null,
  success: false,

  fetchMyProperties: async (token) => {
    set({ loading: true, error: null, success: false })
    try {
      const res = await api.get('/my-properties', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      set({ myProperties: res.data.data, count: res.data.count, success: true })
      return res.data
    } catch (err) {
      set({ error: err.response?.data?.message || err.message })
      return null
    } finally {
      set({ loading: false })
    }
  },

  createMyProperty: async (token, formData) => {
    set({ loading: true, error: null, success: false })
    try {
      const res = await api.post('/my-properties', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      })
      set((state) => ({
        myProperties: [...state.myProperties, res.data],
        count: state.count + 1,
        success: true,
      }))
      return res.data
    } catch (err) {
      set({ error: err.response?.data?.message || err.message })
      return null
    } finally {
      set({ loading: false })
    }
  },

  updateMyProperty: async (id, formData, token) => {
    set({ loading: true, error: null, success: false })
    try {
      const res = await api.patch(`/my-properties/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      })
      set((state) => ({
        myProperties: state.myProperties.map((p) =>
          p.id === id ? res.data : p
        ),
        success: true,
      }))
      return res.data
    } catch (err) {
      set({ error: err.response?.data?.message || err.message })
      return null
    } finally {
      set({ loading: false })
    }
  },

  deleteMyProperty: async (id, token) => {
    set({ loading: true, error: null, success: false })
    try {
      await api.delete(`/my-properties/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      set((state) => ({
        myProperties: state.myProperties.filter((p) => p.id !== id),
        count: Math.max(0, state.count - 1),
        success: true,
      }))
      return true
    } catch (err) {
      set({ error: err.response?.data?.message || err.message })
      return null
    } finally {
      set({ loading: false })
    }
  },
}))

export default useMyPropertyStore
