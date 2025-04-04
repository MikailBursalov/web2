'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [loading, setLoading] = useState(true)
  const { push } = useRouter()

  useEffect(() => {
    const storedToken = Cookies.get('token')
    const storedUser = Cookies.get('user')

    if (storedToken && storedUser) {
      try {
        const decodedUser = JSON.parse(decodeURIComponent(storedUser))
        setUser(decodedUser)
        setToken(storedToken)
      } catch (err) {
        console.error('Ошибка при декодировании user из cookies', err)
      }
    }

    setLoading(false) // после проверки куков
  }, [])

  const logout = () => {
    Cookies.remove('token')
    Cookies.remove('user')
    setUser(null)
    setToken(null)
    push('/')
  }

  return (
    <AuthContext.Provider
      value={{ user, token, loading, setUser, setToken, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth должен использоваться внутри AuthProvider')
  }
  return context
}
