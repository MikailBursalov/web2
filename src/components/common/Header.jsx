import { Logo } from '@/components/root/Header/Logo'
import { NavigationMenu } from '@/components/root/Header/NavigationMenu'
import { HeaderControls } from '@/components/root/Header/HeaderControls'
import { UserMenu } from '@/components/root/Header/UserMenu'
import Link from 'next/link'

export const Header = () => {
  return (
    <>
      <header className="max-w-screen-2xl px-2 mx-auto flex justify-between items-center py-3">
        <Logo />
        <div className="flex items-center justify-between gap-5">
          <Link href={'/catalog'}>Каталог</Link>
          <NavigationMenu />
          <HeaderControls />
          <UserMenu />
        </div>
      </header>
    </>
  )
}
