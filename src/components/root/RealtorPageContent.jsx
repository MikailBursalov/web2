'use client'
import { useEffect, useState } from 'react'
import { ArrowLeftIcon } from 'lucide-react'
import { SendMessageRealtor } from '@/components/root/realtors/SendMessageRealtor'
import { useRouter } from 'next/navigation'

const realtorsData = [
  {
    id: 1,
    rating: 5,
    reviews: [
      {
        userId: 1,
        name: '',
        text: '',
      },
      {
        userId: 2,
        name: '',
        text: '',
      },
      {
        userId: 3,
        name: '',
        text: '',
      },
    ],
    aboutUser: '',
    region: '',

    avatar: '/realtors/woman-ava1.jpg',
    name: 'Айсулуу Тыныбекова',
    offersCount: 8,
  },
  {
    id: 2,
    avatar: '/realtors/woman-ava2.jpg',
    name: 'Аида Сапарбек кызы',
    offersCount: 5,
  },
  {
    id: 3,
    avatar: '/realtors/boy-ava4.jpg',
    name: 'Дастан Рысбеков',
    offersCount: 2,
  },
  {
    id: 4,
    avatar: '/realtors/boy-ava3.png',
    name: 'Микаиль Бурсалов',
    offersCount: 4,
  },
  {
    id: 5,
    avatar: '/realtors/boy-ava2.jpg',
    name: 'Эркебулан Дуйшеналиев',
    offersCount: 9,
  },
  {
    id: 6,
    avatar: '/realtors/boy-ava1.avif',
    name: 'Касым Барыктабасов',
    offersCount: 1,
  },
]
export const RealtorPageContent = () => {
  const [realtorsList, setRealtorsList] = useState([])
  const { push } = useRouter()
  const TakeToRealtorsPage = () => {
    push('/realtors')
  }
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div>
        <button
          onClick={TakeToRealtorsPage}
          className="text-blue-600 flex gap-2 items-center cursor-pointer"
        >
          <ArrowLeftIcon />
          <span>Все специалисты</span>
        </button>
      </div>
      <div className="flex justify-between items-center w-full">
        <div className={`w-3/4`}></div>
        <div className="w-1/4">
          <SendMessageRealtor />
        </div>
      </div>
    </div>
  )
}
