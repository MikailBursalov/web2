'use client'
import { useState } from 'react'
import { HeartIcon, ListPlusIcon, MessageCircleMoreIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

const data = [
  // { name: 'Сравнение объектов', icon: <ListPlusIcon /> },
  // { name: 'Сообщения', icon: <MessageCircleMoreIcon /> },
  { name: 'Избранные', icon: <HeartIcon />, link: '/profile/wishlist' },
]

export const HeaderControls = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const { push } = useRouter()

  return (
    <ul className="flex justify-between items-center gap-6 relative">
      {data.map((item, index) => (
        <li
          key={index}
          className="relative flex flex-col items-center cursor-pointer"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => push(item.link)}
        >
          {item.icon}
          {hoveredIndex === index && (
            <span className="absolute top-full left-1/2 transform -translate-x-1/2 bg-black text-white rounded-md px-2 py-1 text-sm mt-2 whitespace-nowrap shadow-lg">
              {item.name}
            </span>
          )}
        </li>
      ))}
    </ul>
  )
}
