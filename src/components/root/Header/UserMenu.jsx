'use client'
import React, { useState } from 'react'
import { Auth } from '@/components/common/auth/Auth'
export const UserMenu = () => {
  const [modal, setModal] = useState(false)
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
      {modal && <Auth onClose={() => setModal(false)} />}
    </>
  )
}
