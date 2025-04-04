'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/service/providers/AuthProvider'

export default function ProfileRedirectPage() {
  const { push } = useRouter()
  const { user, token } = useAuth()

  useEffect(() => {
    console.log(user)
    console.log(token)
    push('/profile/user')
  }, [])

  return null
}
