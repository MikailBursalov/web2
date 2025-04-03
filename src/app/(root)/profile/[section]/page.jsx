'use client'
import { use } from 'react'

import { UserInfo } from '@/components/root/profile/UserInfo'
import { Wishlist } from '@/components/root/profile/Wishlist'
import { ApartmentsList } from '@/components/root/profile/ApartmentsList'
import { NotFoundPage } from '@/components/common/NotFound'

export default function ProfileSection({ params }) {
  const resolvedParams = use(params)
  const section = resolvedParams.section

  switch (section) {
    case 'user':
      return <UserInfo />
    case 'wishlist':
      return <Wishlist />
    case 'apartments':
      return <ApartmentsList />
    default:
      return <NotFoundPage />
  }
}
