'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const realtorsData = [
  {
    id: 1,
    avatar: '/realtor/woman-ava1.jpg',
    name: 'Айсулуу Тыныбекова',
    offersCount: 8,
  },
  {
    id: 2,
    avatar: '/realtor/woman-ava2.jpg',
    name: 'Аида Сапарбек кызы',
    offersCount: 5,
  },
  {
    id: 3,
    avatar: '/realtor/boy-ava4.jpg',
    name: 'Дастан Рысбеков',
    offersCount: 2,
  },
  {
    id: 4,
    avatar: '/realtor/boy-ava3.png',
    name: 'Микаиль Бурсалов',
    offersCount: 4,
  },
  {
    id: 5,
    avatar: '/realtor/boy-ava2.jpg',
    name: 'Эркебулан Дуйшеналиев',
    offersCount: 9,
  },
  {
    id: 6,
    avatar: '/realtor/boy-ava1.avif',
    name: 'Касым Барыктабасов',
    offersCount: 1,
  },
]

export const Realtors = () => {
  const { push } = useRouter()
  const handleClickRealtor = (realtorId) => {
    push(`realtors/${realtorId}`)
  }
  return (
    <div>
      <h1 className={`text-2xl font-semibold`}>Реалторы</h1>
      <div className={`my-7`}>
        <ul className={`space-y-4`}>
          {realtorsData.map((item, id) => (
            <li
              key={id}
              onClick={() => handleClickRealtor(item.id)}
              className={`flex items-center justify-start gap-5 group cursor-pointer`}
            >
              <div>
                <div className="size-14 rounded-full overflow-hidden">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={100}
                    height={100}
                  />
                </div>
              </div>
              <div>
                <h3
                  className={`md:group-hover:border-b md:group-hover:border-b-gray-400 duration-500`}
                >
                  {item.name}
                </h3>
                <p>{item.offersCount + ' предложений'}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
