'use client'
import Image from 'next/image'
import { DotIcon, HeartIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import usePropertyStore from '@/service/stores/useProperty.store'
import { useEffect } from 'react'

const suggestedListingsData = [
  {
    id: 1,
    image: '/suggestedListings/image1.jpg',
    isInFavorite: false,
    price: 50000,
    paymentPeriod: 'month',
    roomCount: 4,
    area: 134,
    floor: 3,
    totalFloors: 9,
    address: '8-й м-н, дом 17, Октябрьский район, Бишкек, 720075',
  },
  {
    id: 2,
    image: '/suggestedListings/image2.jpg',
    isInFavorite: false,
    price: 890000,
    paymentPeriod: 'year',
    roomCount: 3,
    area: 105,
    floor: 2,
    totalFloors: 12,
    address: '8-й м-н, дом 17, Октябрьский район, Бишкек, 720075',
  },
  {
    id: 3,
    image: '/suggestedListings/image3.jpg',
    isInFavorite: true,
    price: 12000,
    paymentPeriod: 'month',
    roomCount: 1,
    area: 52,
    floor: 8,
    totalFloors: 14,
    address: 'Микрорайон Джал-23,Ленинский район, Бишкек, 720044, 5 этажей',
  },
  {
    id: 4,
    image: '/suggestedListings/image4.jpg',
    isInFavorite: false,
    price: 30000,
    paymentPeriod: 'month',
    roomCount: 2,
    area: 78,
    floor: 5,
    totalFloors: 20,
    address: 'Улица Токтогула, 13, Первомайский район, Бишкек, 720001, 1 этаж',
  },
  {
    id: 5,
    image: '/suggestedListings/image1.jpg',
    isInFavorite: false,
    price: 50000,
    paymentPeriod: 'month',
    roomCount: 4,
    area: 134,
    floor: 3,
    totalFloors: 9,
    address: '8-й м-н, дом 17, Октябрьский район, Бишкек, 720075',
  },
  {
    id: 6,
    image: '/suggestedListings/image2.jpg',
    isInFavorite: false,
    price: 890000,
    paymentPeriod: 'year',
    roomCount: 3,
    area: 105,
    floor: 2,
    totalFloors: 12,
    address: '8-й м-н, дом 17, Октябрьский район, Бишкек, 720075',
  },
  {
    id: 7,
    image: '/suggestedListings/image3.jpg',
    isInFavorite: true,
    price: 12000,
    paymentPeriod: 'month',
    roomCount: 1,
    area: 52,
    floor: 8,
    totalFloors: 14,
    address: 'Микрорайон Джал-23,Ленинский район, Бишкек, 720044, 5 этажей',
  },
  {
    id: 8,
    image: '/suggestedListings/image4.jpg',
    isInFavorite: false,
    price: 30000,
    paymentPeriod: 'month',
    roomCount: 2,
    area: 78,
    floor: 5,
    totalFloors: 20,
    address: 'Улица Токтогула, 13, Первомайский район, Бишкек, 720001, 1 этаж',
  },
]

export const SuggestedListings = () => {
  const { push } = useRouter()
  const { fetchRecommendedProperties, recommendedProperties } =
    usePropertyStore()
  const handleClickProduct = (id) => {
    push(`/catalog/${id}`)
  }

  useEffect(() => {
    fetchRecommendedProperties()
  }, [])
  return (
    <section className={`my-5`}>
      <div className={`max-w-screen-2xl mx-auto px-2`}>
        <div>
          <h1 className={`text-3xl font-semibold mb-3`}>
            Могут подойти для вас
          </h1>
        </div>
        <div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {recommendedProperties?.map((item, id) => (
              <li
                key={id}
                onClick={() => handleClickProduct(item.id)}
                className="overflow-hidden border rounded-sm   border-black w-full cursor-pointer group" // Убрали max-w-[330px] и добавили w-full
              >
                <div>
                  <div className="relative w-full h-[250px] overflow-hidden">
                    <Image
                      src={item.images[0]}
                      alt={item.location.address || 'Фото квартиры'}
                      fill
                      sizes={'100vh'}
                      className="object-cover w-full h-full md:group-hover:scale-105 duration-1000"
                    />
                    <span className="absolute top-2 right-2 bg-black/50 md:hover:bg-black/70 cursor-pointer duration-300 p-2 rounded-full">
                      <HeartIcon className="text-white size-4" />
                    </span>
                  </div>

                  <div className="p-4 ">
                    <h2 className="text-md font-bold ">
                      {['daily', 'weekly', 'monthly', 'yearly'].includes(
                        item?.price?.paymentPeriod
                      )
                        ? `${item?.price?.amount} ${item?.price?.currency === 'USD' ? '$/день' : 'C/день'}`
                        : 'цена не указана'}
                    </h2>
                    <h3 className={`text-sm font-semibold `}>{item?.title}</h3>

                    <div className="flex items-center text-gray-600 text-xs">
                      <span>{item.bedrooms}-спалня</span>
                      <DotIcon />
                      <span>{item.bathrooms}-ванны</span>
                      <DotIcon />
                      <span>{item.area} м²</span>
                    </div>
                    <div>
                      <span className={`line-clamp-1 text-xs`}>
                        {item?.location?.address}
                      </span>
                    </div>
                    <div>
                      <h1 className={`text-xs mt-4`}>Дополнительно:</h1>
                      <div className="">
                        <p>{item?.amenities?.join(', ')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div>
            <button
              className={`py-3 text-2xl text-blue-600 bg-blue-200/80 w-full rounded-lg font-semibold my-5 cursor-pointer md:hover:bg-blue-300 duration-300`}
              onClick={() => {
                push('/catalog')
                localStorage.setItem('catalog', 'suggestions')
              }}
            >
              Показать еще
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
