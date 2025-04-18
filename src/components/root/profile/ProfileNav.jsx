'use client'
import React, { useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { HeartIcon, HomeIcon, HousePlusIcon } from 'lucide-react'
import Link from 'next/link'
import { useAuth } from '@/service/providers/AuthProvider'
import Cookies from 'js-cookie'
import { Skeleton } from '@/components/ui/skeleton'

export const ProfileNav = () => {
  const role = Cookies.get('role')

  const navData = [
    {
      name: 'Профиль',
      icon: <HomeIcon />,
      link: '/profile/user',
      params: 'user',
    },
    {
      name: 'Избранные',
      icon: <HeartIcon />,
      link: '/profile/wishlist',
      params: 'wishlist',
    },
    role === 'landlord'
      ? {
          name: 'Квартиры',
          icon: <HousePlusIcon />,
          link: '/profile/apartments',
          params: 'apartments',
        }
      : null,
  ].filter(Boolean)

  const params = useParams()
  const { user, loading } = useAuth()

  return (
    <div className="bg-gray-100 rounded-md overflow-hidden">
      <div className="w-full">
        <div className="relative">
          <div className="bg-blue-500 h-32 w-full"></div>
          <div className="absolute left-1/2 top-10 transform -translate-x-1/2 size-28 bg-gray-400 rounded-full"></div>
        </div>
        {loading ? (
          <div>
            <Skeleton />
          </div>
        ) : (
          <div className="text-center pt-12 pb-4">
            <h2 className="font-semibold text-lg">{user.name}</h2>
            <h5 className="text-gray-600">{user.email}</h5>
          </div>
        )}
      </div>
      <div className="h-[1px] w-[90%] mx-auto bg-gray-500 my-4"></div>
      <nav className="space-y-3">
        {navData.map((item, index) => (
          <Link
            href={item.link}
            className={`flex items-center gap-4 justify-start p-3 duration-300 md:hover:text-blue-500 ${
              params.section === item.params
                ? 'bg-blue-500/30 border-l-4 md:hover:text-white border-l-blue-500 text-blue-600'
                : ''
            }`}
            key={index}
          >
            <span>{item.icon}</span>
            <span className="text-xl">{item.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  )
}
