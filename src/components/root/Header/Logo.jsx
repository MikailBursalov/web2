import Link from 'next/link'

export const Logo = () => (
  <div className="w-fit h-auto">
    <Link href="/">
      <span className="flex justify-center items-end space-x-2">
        <img
          src="/easeRentLogo.png"
          alt="main logo"
          className="w-[64px] h-auto object-contain"
        />
        <span className="text-4xl pb-2 font-bold bg-gradient-to-r from-[rgb(12,130,237)] to-[rgb(5,25,34)] bg-clip-text text-transparent">
          EasyRent
        </span>
      </span>
    </Link>
  </div>
)
