'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { ProfileNav } from '@/components/root/profile/ProfileNav'
import { useAuth } from '@/service/providers/AuthProvider'
import useUserStore from '@/service/stores/useUser.store'
import { RingLoader } from 'react-spinners'

export default function ProfileLayout({ children }) {
  const { user, token, loading } = useAuth()
  const { userLoading } = useUserStore()
  const { push } = useRouter()
  const [checkedAuth, setCheckedAuth] = useState(false)
  const { fetchProfile } = useUserStore()

  useEffect(() => {
    if (loading) return

    if (!user && !token) {
      push('/')
      setTimeout(() => {
        window.dispatchEvent(new Event('open-login-modal'))
      }, 100)
    } else {
      setCheckedAuth(true)
      fetchProfile(token)
    }
  }, [user, token, loading])

  if (userLoading)
    return (
      <div className="fixed inset-0 top-1/4 left-1/2">
        <RingLoader color="#0000FF" />
      </div>
    )

  if (loading || !checkedAuth) return null // или <Spinner /> если хочешь

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
