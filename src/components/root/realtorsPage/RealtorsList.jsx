'use client'
import { Star } from 'lucide-react'
import { useRouter } from 'next/navigation'

const realtors = [
  {
    id: 101,
    name: 'Айбек Туратбеков',
    avatar: 'https://i.pravatar.cc/60?u=r1',
    rating: 4.8,
    reviews: 12,
    listings: 24,
    about:
      'Опытный риелтор, работаю на рынке недвижимости более 5 лет. Помогаю купить, продать и арендовать жильё без лишних хлопот.',
  },
  {
    id: 102,
    name: 'Жанара Мусуралиева',
    avatar: 'https://i.pravatar.cc/60?u=r2',
    rating: 4.6,
    reviews: 8,
    listings: 17,
    about:
      'Специализируюсь на продаже квартир и коммерческой недвижимости в Бишкеке и близлежащих районах.',
  },
  {
    id: 103,
    name: 'Тимур Бакытов',
    avatar: 'https://i.pravatar.cc/60?u=r3',
    rating: 4.9,
    reviews: 20,
    listings: 31,
    about:
      'Всегда на связи, гарантирую прозрачность и честность в каждой сделке.',
  },
]

export const RealtorsList = () => {
  const { push } = useRouter()
  return (
    <div className="space-y-4 mt-6">
      {realtors.map((r) => (
        <div
          key={r.id}
          onClick={() => {
            push(`/realtors/${r.id}`)
          }}
          className="flex items-center justify-between border rounded-xl p-4 shadow-sm bg-white md:hover:bg-blue-100 duration-300 cursor-pointer"
        >
          {/* Левая часть: Аватар + ФИО */}
          <div className="flex items-center gap-4 w-1/6">
            <img
              src={r.avatar}
              alt={r.name}
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-lg">{r.name}</p>
            </div>
          </div>

          {/* Центр: рейтинг, звёзды, id и описание */}
          <div className="w-2/3 px-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-base font-medium">{r.rating}</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < r.rating ? '#facc15' : 'none'}
                    stroke="#facc15"
                    className="mr-0.5"
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500 ml-2">
                {r.reviews} отзывов
              </span>
              <span className="ml-4 text-sm text-gray-400">ID: {r.id}</span>
            </div>
            <p className="text-gray-700 truncate">{r.about}</p>
          </div>

          {/* Правая часть: Кол-во объявлений */}
          <div className="text-center w-1/6">
            <p className="text-xl font-bold text-blue-600">{r.listings}</p>
            <p className="text-sm text-gray-500">объявлений</p>
          </div>
        </div>
      ))}
    </div>
  )
}
