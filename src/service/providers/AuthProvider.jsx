'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)

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
  }, [])

  const logout = () => {
    Cookies.remove('token')
    Cookies.remove('user')
    setUser(null)
    setToken(null)
  }

  return (
    <AuthContext.Provider value={{ user, token, setUser, setToken, logout }}>
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
