'use client'
import { XIcon } from 'lucide-react'
import { ApartmentType } from '@/components/root/profile/landlord/ApartmentType'
import { useEffect, useState } from 'react'
import { SelectPrice } from '@/components/root/profile/landlord/SelectPrice'
import { AreaAndAmenities } from '@/components/root/profile/landlord/AreaAndAmenities'
import { ProductImages } from '@/components/root/profile/landlord/ProductImages'
import { LocationPicker } from '@/components/root/profile/landlord/ProductLocation'
import { api } from '@/service/api/axios'
import { useAuth } from '@/service/providers/AuthProvider'
import { FadeLoader } from 'react-spinners'
import usePropertyStore from '@/service/stores/useProperty.store'

export const AddProductModalWindow = ({ close }) => {
  const [data, setData] = useState({
    title: null,
    description: null,
    propertyType: null,
    location: {
      address: null,
      city: null,
      // district: null,
      // microDistrict: null,
    },
    price: { amount: null, currency: null, paymentPeriod: null },
    bedrooms: null,
    bathrooms: null,
    area: null,
    amenities: [],
    images: [],
  })

  const { loading, createProperty } = usePropertyStore()

  const { token } = useAuth()

  const onSubmit = async () => {
    const formData = new FormData()

    formData.append('title', data.title)
    formData.append('description', data.description)
    formData.append('propertyType', data.propertyType)
    formData.append('location[address]', data.location.address)
    formData.append('location[city]', data.location.city)
    formData.append('price[amount]', data.price.amount)
    formData.append('price[currency]', data.price.currency)
    formData.append('price[paymentPeriod]', data.price.paymentPeriod)
    formData.append('bedrooms', data.bedrooms)
    formData.append('bathrooms', data.bathrooms)
    formData.append('area', data.area)
    data.amenities.forEach((item, index) => {
      formData.append(`amenities`, item)
    })
    data.images.forEach((file, index) => {
      formData.append(`images`, file)
    })

    const response = await createProperty(token, formData)
    if (response) {
      console.log('true')
      close()
    }
  }

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
      onClick={close}
    >
      <div
        className="w-[400px] sm:w-[600px] md:w-[700px] lg:w-[1200px] min-h-[400px] bg-white p-6 rounded-lg shadow-lg relative"
        onClick={(e) => e.stopPropagation()}
      >
        <XIcon
          className={`absolute right-2 top-2 text-red-500 font-black cursor-pointer`}
          onClick={close}
        />
        <div>
          <div className={`flex justify-between items-start gap-2`}>
            <div className={`w-1/2 space-y-2`}>
              <div className={`flex flex-col gap-1`}>
                <label className={`text-gray-600 text-xs ml-1`}>
                  Заголовок
                </label>
                <input
                  value={data.title || ''}
                  onChange={(e) =>
                    setData((prev) => {
                      return { ...prev, title: e.target.value }
                    })
                  }
                  type="text"
                  placeholder={`Заголовок объявления`}
                  className={`border border-blue-500 px-3 py-1 rounded-md`}
                />
              </div>
              <div className={`flex justify-between items-center gap-2`}>
                <ApartmentType
                  setValue={setData}
                  selectedTitle={data.propertyType}
                />
                <SelectPrice
                  setValue={setData}
                  selectedPrice={data.price.amount}
                  selectedCurrency={data.price.currency}
                  selectedPaymentPeriod={data.price.paymentPeriod}
                />
              </div>
              <AreaAndAmenities setValue={setData} selectedTitle={data} />
              <ProductImages images={data.images} setImages={setData} />
            </div>
            <div className={`flex flex-col gap-1 w-1/2`}>
              <div className={`w-full flex flex-col gap-1`}>
                <label className={`text-gray-600 text-xs ml-1`}>Описание</label>
                <textarea
                  value={data.description || ''}
                  onChange={(e) => {
                    setData((prev) => {
                      return { ...prev, description: e.target.value }
                    })
                  }}
                  cols={'50'}
                  rows={'10'}
                  placeholder={`Описание объявления`}
                  className={`border border-blue-500 px-3 py-1 rounded-md`}
                />
              </div>
              <LocationPicker
                onLocationSelect={(locationData) =>
                  setData((prev) => ({
                    ...prev,
                    location: {
                      ...prev.location,
                      ...locationData,
                    },
                  }))
                }
              />
            </div>
          </div>
        </div>
        <button
          className={`bg-blue-500 px-5 text-white text-2xl font-semibold rounded-md ${!loading ? 'md:hover:bg-blue-500/10 md:hover:text-blue-500 md:hover:border md:hover:border-blue-500 py-3' : 'py-0'} w-full text-center mt-10 duration-300`}
          onClick={onSubmit}
          disabled={loading}
        >
          {!loading ? 'Подать объявление' : <FadeLoader color={'white'} />}
        </button>
      </div>
    </div>
  )
}
