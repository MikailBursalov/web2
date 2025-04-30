import { DotIcon, HeartIcon, PlusIcon, XIcon } from 'lucide-react'
import { useState } from 'react'
import { AddProductModalWindow } from '@/components/root/profile/landlord/AddProductModalWindow'
import Image from 'next/image'

const popularAds = [
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

export const ApartmentsList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className={'space-y-4'}>
        <div className="w-full py-3 bg-gray-300 px-5 text-end rounded-md">
          <button
            onClick={() => setIsModalOpen(true)}
            className={`flex items-center gap-2 bg-blue-500/30 border border-blue-500 rounded-md text-blue-700 text-2xl px-3 py-1 hover:bg-blue-500/50 transition-colors duration-200 ease-in-out cursor-pointer ml-auto`}
          >
            <PlusIcon className="" />
            <span>Добавить объявление</span>
          </button>
        </div>
        <div>
          <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {popularAds.map((item, id) => (
              <li
                key={id}
                onClick={() => handleClickProduct(item.id)}
                className="overflow-hidden border rounded-sm   border-black w-full cursor-pointer group" // Убрали max-w-[330px] и добавили w-full
              >
                <div>
                  <div className="relative w-full h-[180px] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.address || 'Фото квартиры'}
                      fill
                      sizes={'100vh'}
                      className="object-cover w-full h-full md:group-hover:scale-105 duration-1000"
                    />
                    <span className="absolute top-2 right-2 bg-black/50 md:hover:bg-black/70 cursor-pointer duration-300 p-2 rounded-full">
                      <HeartIcon className="text-white size-4" />
                    </span>
                  </div>

                  <div className="p-4">
                    <h2 className="text-md font-bold">
                      {item.paymentPeriod === 'month'
                        ? `${item.price} ⃀/мес.`
                        : `${item.price} ⃀/год`}
                    </h2>

                    <div className="flex items-center text-gray-600 text-xs">
                      <span>{item.roomCount}-комн. кв.</span>
                      <DotIcon />
                      <span>{item.area} м²</span>
                      <DotIcon />
                      <span>
                        {item.floor} / {item.totalFloors} этаж
                      </span>
                    </div>
                    <div>
                      <span className={`line-clamp-1 text-xs`}>
                        {item.address}
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isModalOpen && (
        <AddProductModalWindow close={() => setIsModalOpen(false)} />
      )}
    </>
  )
}
