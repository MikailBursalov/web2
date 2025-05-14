'use client'
import Image from 'next/image'
import { HeartIcon, DotIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import usePropertyStore from '@/service/stores/useProperty.store'

const catalogData = [
  {
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

export const CatalogContent = () => {
  const { push } = useRouter()
  const { properties, fetchProperties } = usePropertyStore()
  const handleClickProduct = (item) => {
    localStorage.setItem('selectedProperty', JSON.stringify(item))
    push(`/catalog/${item._id}`)
  }
  console.log(properties)
  useEffect(() => {
    fetchProperties()
  }, [])
  return (
    <div className={`bg-white px-8 py-4 rounded-md`}>
      <div className={`max-w-screen-2xl mx-auto`}>
        <div>
          <h1 className={`text-3xl font-semibold mb-3`}>
            Весь список каталога
          </h1>
        </div>
        <div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {properties?.map((item, id) => (
              <li
                key={id}
                onClick={() => handleClickProduct(item)}
                className="overflow-hidden border rounded-sm   border-black w-full cursor-pointer group" // Убрали max-w-[330px] и добавили w-full
              >
                <div>
                  <div className="relative w-full h-[250px] overflow-hidden">
                    <img
                      src={item?.images[0] || '/noImage.png'}
                      alt={item.location.address || 'Фото квартиры'}
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
        </div>
      </div>
    </div>
  )
}
