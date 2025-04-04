'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { ProfileNav } from '@/components/root/profile/ProfileNav'
import { useAuth } from '@/service/providers/AuthProvider'

export default function ProfileLayout({ children }) {
  const { user, token } = useAuth()
  const { push } = useRouter()
  const [checkedAuth, setCheckedAuth] = useState(false)

  useEffect(() => {
    if (!user && !token) {
      push('/')
      setTimeout(() => {
        window.dispatchEvent(new Event('open-login-modal'))
      }, 100)
    } else {
      setCheckedAuth(true)
    }
  }, [user, token])

  if (!checkedAuth) return null // ничего не рендерим, пока не знаем результат проверки

  return (
    <main>
      <div className="w-full py-4 bg-gray-100 my-5">
        <h1 className="max-w-screen-2xl mx-auto text-xl font-semibold px-2">
          Мой профиль
        </h1>
      </div>
      <div className="flex justify-between items-start gap-2 max-w-screen-2xl mx-auto px-2">
        <div className="w-1/4">
          <ProfileNav />
        </div>
        <div className="w-3/4">{children}</div>
      </div>
    </main>
  )
}
