'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Logo } from '@/components/root/Header/Logo'
import { NavigationMenu } from '@/components/root/Header/NavigationMenu'
import { HeaderControls } from '@/components/root/Header/HeaderControls'
import { UserMenu } from '@/components/root/Header/UserMenu'
import { ChatBot } from '@/components/root/Header/ChatBot'

export const Header = () => {
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <>
      <header className="container mx-auto flex justify-between items-center relative py-3">
        <Logo />
        <div className="flex items-center justify-between gap-5">
          <Link href={'/catalog'}>Каталог</Link>
          <NavigationMenu />
          <span
            className="bg-slate-200 rounded-xl px-4 py-1 text-blue-500 cursor-pointer md:hover:bg-gray-100 duration-300"
            onClick={() => setIsChatOpen(!isChatOpen)}
          >
            умный помощник
          </span>
          <HeaderControls />
          <UserMenu />
        </div>
      </header>
      <ChatBot isChatOpen={isChatOpen} setIsChatOpen={setIsChatOpen} />
    </>
  )
}
