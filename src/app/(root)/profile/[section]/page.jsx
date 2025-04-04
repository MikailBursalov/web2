'use client'
import { use, useEffect } from 'react'

import { UserInfo } from '@/components/root/profile/UserInfo'
import { Wishlist } from '@/components/root/profile/Wishlist'
import { ApartmentsList } from '@/components/root/profile/ApartmentsList'
import { NotFoundPage } from '@/components/common/NotFound'
import Cookies from 'js-cookie'

export default function ProfileSection({ params }) {
  const resolvedParams = use(params)
  const section = resolvedParams.section
  const role = Cookies.get('role')

  useEffect(() => {
    console.log(Cookies.get('role'))
  }, [])

  if (section === 'user') {
    return <UserInfo />
  }

  if (section === 'wishlist') {
    return <Wishlist />
  }

  if (section === 'apartments' && role === 'landlord') {
    return <ApartmentsList />
  }

  return <NotFoundPage />
}
