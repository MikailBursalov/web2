import { create } from 'zustand'
import { api } from '@/service/api/axios'

const usePropertyStore = create((set, get) => ({
  properties: [],
  realtorProperties: [],
  popularProperties: [], // добавлено
  recommendedProperties: [], // добавлено
  count: 0,
  realtorCount: 0,
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
      set({ properties: res.data.data, count: res.data.count, success: true })
      return res.data
    } catch (err) {
      set({ error: err.response?.data?.message || err.message })
      return null
    } finally {
      set({ loading: false })
    }
  },

  fetchRealtorProperties: async (token) => {
    set({ loading: true, error: null, success: false })
    try {
      const res = await api.get('/properties/my-properties', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      set({
        realtorProperties: res.data.data,
        realtorCount: res.data.count,
        success: true,
      })
      return res.data
    } catch (err) {
      set({ error: err.response?.data?.message || err.message })
      return null
    } finally {
      set({ loading: false })
    }
  },

  fetchPopularProperties: async () => {
    set({ loading: true, error: null, success: false })
    try {
      const res = await api.get('/properties/popular')
      set({ popularProperties: res.data.data, success: true })
      return res.data
    } catch (err) {
      set({ error: err.response?.data?.message || err.message })
      return null
    } finally {
      set({ loading: false })
    }
  },

  fetchRecommendedProperties: async () => {
    set({ loading: true, error: null, success: false })
    try {
      const res = await api.get('/properties/recommended')
      set({ recommendedProperties: res.data.data, success: true })
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

export default usePropertyStore
