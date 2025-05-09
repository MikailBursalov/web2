import { create } from 'zustand'
import { api } from '@/service/api/axios'

const usePropertyStore = create((set, get) => ({
  properties: [],
  loading: false,
  error: null,
  success: false,

  fetchProperties: async (token) => {
    set({ loading: true, error: null, success: false })
    try {
      const res = await api.get('/properties', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      set({ properties: res.data, success: true })
      return res.data
    } catch (err) {
      set({ error: err.response?.data?.message || err.message })
      return null
    } finally {
      set({ loading: false })
    }
  },

  createProperty: async (token, formData) => {
    set({ loading: true, error: null, success: false })
    try {
      const res = await api.post('/properties', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      })
      set((state) => ({
        properties: [...state.properties, res.data],
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

  updateProperty: async (id, formData, token) => {
    set({ loading: true, error: null, success: false })
    try {
      const res = await api.patch(`/properties/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      })
      set((state) => ({
        properties: state.properties.map((p) => (p.id === id ? res.data : p)),
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

  deleteProperty: async (id, token) => {
    set({ loading: true, error: null, success: false })
    try {
      await api.delete(`/properties/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      set((state) => ({
        properties: state.properties.filter((p) => p.id !== id),
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

export default usePropertyStore
