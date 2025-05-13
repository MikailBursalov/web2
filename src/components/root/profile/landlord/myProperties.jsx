'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import usePropertyStore from '@/service/stores/useProperty.store'
import { FadeLoader } from 'react-spinners'
import { DotIcon, HeartIcon } from 'lucide-react'
import { useAuth } from '@/service/providers/AuthProvider'

export const MyPropertiesList = () => {
  const { loading, realtorProperties, fetchRealtorProperties } =
    usePropertyStore()
  const { token } = useAuth()

  const handleClickMyProperty = (id) => {
    console.log(id)
  }

  useEffect(() => {
    fetchRealtorProperties(token)
  }, [])

  console.log(realtorProperties)

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <FadeLoader color="#0000FF" />
      </div>
    )
  return (
    <div>
      <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {realtorProperties?.map((item, id) => (
          <li
            key={id}
            onClick={() => handleClickMyProperty(item.id)}
            className="overflow-hidden border rounded-sm   border-black w-full cursor-pointer group" // Убрали max-w-[330px] и добавили w-full
          >
            <div>
              <div className="relative w-full h-[180px] overflow-hidden">
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

              <div className="p-4">
                <h2 className="text-md font-bold">
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
  )
}
