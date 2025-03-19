import Link from 'next/link'

export const Logo = () => (
  <div className="w-32 h-auto">
    <Link href="/">
      <img
        src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 110 40'%3E%3Cpath fill='%230468FF' fill-rule='evenodd' d='M19.5 9.13c-1.547 0-2.8-1.264-2.8-2.824s1.253-2.825 2.8-2.825c1.545 0 2.799 1.265 2.799 2.825s-1.254 2.824-2.8 2.824zm0-8.97c-3.373 0-6.107 2.757-6.107 6.16a6.17 6.17 0 0 0 1.24 3.72l.406.567 4.46 5.427 4.867-5.995a6.17 6.17 0 0 0 1.239-3.72c0-3.402-2.734-6.16-6.106-6.16zm2.33 28.62V18.443h-4.523v4.855l-4.52-5.479L.2 33.075l4.187 3.516 8.4-10.18 8.4 10.18 4.186-3.516z' clip-rule='evenodd'/%3E%3C/svg%3E"
        alt="main logo"
        className="w-32 h-auto object-contain"
      />
    </Link>
  </div>
)
