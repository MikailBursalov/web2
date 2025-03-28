'use client'
import React, { useState } from 'react'
import { Auth } from '@/components/common/auth/Auth'
import { LoginForm } from '@/components/common/auth/LoginForm'
import { RegisterForm } from '@/components/common/auth/RegisterForm'
export const UserMenu = () => {
  const [modal, setModal] = useState(false)
  const [isLogin, setIsLogin] = useState(true)
  return (
    <>
      <div className="flex items-center gap-2">
        <button className="bg-blue-600 text-white rounded-md px-3 py-1">
          + Подать за 0 сом
        </button>
        <button
          onClick={() => setModal(!modal)}
          className="text-blue-600 bg-blue-200 rounded-md px-3 py-1 md:hover:bg-blue-300 duration-300"
        >
          Войти
        </button>
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
