'use client'
import React, { useEffect, useState } from 'react'
import { RegisterForm } from '@/components/common/auth/RegisterForm'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/service/providers/AuthProvider'
import { LoginForm } from '@/components/common/auth/LoginForm'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
export const UserMenu = () => {
  const [modal, setModal] = useState(false)
  const [isLogin, setIsLogin] = useState(true)

  const { user, logout } = useAuth()
  const router = useRouter()

  const getInitials = () => {
    return user?.name?.toUpperCase() || 'U'
  }

  useEffect(() => {
    console.log(user)
  }, [user])
  return (
    <>
      <div className="flex items-center gap-2">
        <button className="bg-blue-600 text-white rounded-md px-3 py-1">
          + Подать за 0 сом
        </button>
        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar className="cursor-pointer">
                <AvatarImage src={user.avatar || ''} alt={user.name} />
                <AvatarFallback className={`size-20 text-blue-500`}>
                  {getInitials()}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40 mt-2">
              <DropdownMenuItem onClick={() => router.push('/profile')}>
                Профиль
              </DropdownMenuItem>
              <DropdownMenuItem onClick={logout}>Выйти</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <button
            onClick={() => setModal(!modal)}
            className="text-blue-600 bg-blue-200 rounded-md px-3 py-1 md:hover:bg-blue-300 duration-300"
          >
            Войти
          </button>
        )}
      </div>
      {modal &&
        (isLogin ? (
          <LoginForm
            close={() => setModal(!modal)}
            changeForm={() => setIsLogin(!isLogin)}
          />
        ) : (
          <RegisterForm
            close={() => setModal(!modal)}
            changeForm={() => setIsLogin(!isLogin)}
          />
        ))}
    </>
  )
}
