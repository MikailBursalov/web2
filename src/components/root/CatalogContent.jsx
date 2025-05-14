'use client'
import Image from 'next/image'
import { HeartIcon, DotIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import usePropertyStore from '@/service/stores/useProperty.store'

const formatPriceLabel = (price) => {
  if (!price?.amount || !price?.currency || !price?.paymentPeriod)
    return 'цена не указана'

  const currencySymbol = price.currency === 'USD' ? '$' : 'C'
  const periodLabel =
    {
      daily: '/день',
      weekly: '/неделя',
      monthly: '/мес',
      yearly: '/год',
    }[price.paymentPeriod] || ''

  return `${price.amount} ${currencySymbol}${periodLabel}`
}

export const CatalogContent = () => {
  const { push } = useRouter()
  const { properties, fetchProperties } = usePropertyStore()

  const handleClickProduct = (item) => {
    localStorage.setItem('selectedProperty', JSON.stringify(item))
    push(`/catalog/${item._id}`)
  }

  useEffect(() => {
    fetchProperties()
  }, [])

  return (
    <div className="bg-white px-8 py-4 rounded-md">
      <div className="max-w-screen-2xl mx-auto">
        <div>
          <h1 className="text-3xl font-semibold mb-3">Весь список каталога</h1>
        </div>
        <div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {properties?.map((item, id) => (
              <li
                key={id}
                onClick={() => handleClickProduct(item)}
                className="overflow-hidden border rounded-sm border-black w-full cursor-pointer group"
              >
                <div>
                  <div className="relative w-full h-[250px] overflow-hidden">
                    <img
                      src={item?.images?.[0] || '/noImage.png'}
                      alt={item?.location?.address || 'Фото квартиры'}
                      className="object-cover w-full h-full md:group-hover:scale-105 duration-1000"
                    />
                    <span className="absolute top-2 right-2 bg-black/50 md:hover:bg-black/70 cursor-pointer duration-300 p-2 rounded-full">
                      <HeartIcon className="text-white size-4" />
                    </span>
                  </div>

                  <div className="p-4">
                    <h2 className="text-md font-bold">
                      {formatPriceLabel(item.price)}
                    </h2>
                    <h3 className="text-sm font-semibold">{item?.title}</h3>

                    <div className="flex items-center text-gray-600 text-xs">
                      <span>{item.bedrooms}-спалня</span>
                      <DotIcon />
                      <span>{item.bathrooms}-ванны</span>
                      <DotIcon />
                      <span>{item.area} м²</span>
                    </div>
                    <div>
                      <span className="line-clamp-1 text-xs">
                        {item?.location?.address}
                      </span>
                    </div>
                    <div>
                      <h1 className="text-xs mt-4">Дополнительно:</h1>
                      <div>
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
