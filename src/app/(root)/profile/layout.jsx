'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ProfileNav } from '@/components/root/profile/ProfileNav'

export default function ProfileLayout({ children }) {
  const { push } = useRouter()
  useEffect(() => {
    push('/profile/user')
  }, [])
  return (
    <main>
      <div className={`w-full py-4 bg-gray-100 my-5 `}>
        <h1 className={`max-w-screen-2xl mx-auto text-xl font-semibold px-2`}>
          Мой профиль
        </h1>
      </div>
      <div
        className={`flex justify-between items-start gap-2 max-w-screen-2xl mx-auto px-2`}
      >
        <div className={`w-1/4`}>
          <ProfileNav />
        </div>
        <div className={`w-3/4`}>{children}</div>
      </div>
    </main>
  )
}
