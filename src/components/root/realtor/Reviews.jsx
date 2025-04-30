import { useState } from 'react'
import { Star } from 'lucide-react'

const reviews = [
  {
    id: 1,
    user: {
      name: 'Айбек Т.',
      avatar: 'https://i.pravatar.cc/40?u=a1',
    },
    text: 'Отличный специалист! Всё быстро и качественно. Рекомендую.',
  },
  {
    id: 2,
    user: {
      name: 'Жанара М.',
      avatar: 'https://i.pravatar.cc/40?u=a2',
    },
    text: 'Очень понравилось работать, всегда на связи и с вниманием к деталям.',
  },
  {
    id: 3,
    user: {
      name: 'Эмир К.',
      avatar: 'https://i.pravatar.cc/40?u=a3',
    },
    text: 'Работа выполнена раньше срока, всё на высшем уровне!',
  },
  {
    id: 4,
    user: {
      name: 'Алина С.',
      avatar: 'https://i.pravatar.cc/40?u=a4',
    },
    text: 'Очень ответственный и пунктуальный специалист.',
  },
  {
    id: 5,
    user: {
      name: 'Максат У.',
      avatar: 'https://i.pravatar.cc/40?u=a5',
    },
    text: 'Профессиональный подход и дружелюбное общение. Спасибо!',
  },
  {
    id: 6,
    user: {
      name: 'Нурайым Ж.',
      avatar: 'https://i.pravatar.cc/40?u=a6',
    },
    text: 'Объяснил все детали и выполнил заказ именно так, как нужно.',
  },
  {
    id: 7,
    user: {
      name: 'Тимур Б.',
      avatar: 'https://i.pravatar.cc/40?u=a7',
    },
    text: 'Сотрудничество прошло отлично, буду обращаться ещё.',
  },
  {
    id: 8,
    user: {
      name: 'Гульмира А.',
      avatar: 'https://i.pravatar.cc/40?u=a8',
    },
    text: 'Очень рекомендую! Всё сделано качественно и без задержек.',
  },
  {
    id: 9,
    user: {
      name: 'Ильяс Д.',
      avatar: 'https://i.pravatar.cc/40?u=a9',
    },
    text: 'Специалист знает своё дело, помог даже больше, чем ожидал.',
  },
  {
    id: 10,
    user: {
      name: 'Асель К.',
      avatar: 'https://i.pravatar.cc/40?u=a10',
    },
    text: 'Замечательная работа! Очень довольна результатом.',
  },
]

export const Reviews = () => {
  const rating = 4.7
  const fullStars = Math.floor(rating)
  const hasHalf = rating % 1 >= 0.5

  return (
    <div className="p-4">
      <div className="mt-10 p-4 border rounded-md">
        <h2 className="text-2xl font-bold mb-4">Отзывы о специалисте</h2>

        <div className="flex items-center gap-4 mb-2">
          <span className="text-2xl font-semibold">{rating}</span>
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                size={20}
                fill={index < rating ? '#facc15' : 'none'}
                stroke="#facc15"
                className="mr-1"
              />
            ))}
          </div>
        </div>

        <p className="text-gray-500 mb-4">{reviews.length} отзыва</p>

        <button className="mb-6 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">
          Добавить отзыв
        </button>

        <div className="space-y-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex gap-4 items-start border-t pt-4"
            >
              <img
                src={review.user.avatar}
                alt={review.user.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold">{review.user.name}</p>
                <p className="text-gray-700">{review.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
