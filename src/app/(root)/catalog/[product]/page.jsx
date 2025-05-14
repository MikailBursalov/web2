'use client'
import { ProductImages } from '@/components/root/product/ProductImages'
import { ProductTitle } from '@/components/root/product/ProductTitle'
import { ProductPricing } from '@/components/root/product/ProductPricing'
import { ProductRealtor } from '@/components/root/product/ProductRealtor'
import { ProductDescription } from '@/components/root/product/ProductDescription'
import { useEffect, useState } from 'react'

export default function ProductPage() {
  const [property, setProperty] = useState(null)
  useEffect(() => {
    const data = localStorage.getItem('selectedProperty')
    if (data) {
      setProperty(JSON.parse(data))
      console.log(JSON.parse(data))
    }
  }, [])
  if (!property) return <div>Загрузка...</div>
  return (
    <div className={'my-5'}>
      <section className={`max-w-screen-2xl mx-auto`}>
        <div className={`flex justify-between items-start gap-5`}>
          <div className={`w-2/3 bg-white py-4 px-8 rounded-xl`}>
            <ProductTitle
              title={property?.title}
              address={property?.location?.address}
              city={property?.location?.city}
            />
            <ProductImages images={property?.images} />
            <div className={`space-y-4 my-4`}>
              <h1 className={`text-2xl font-bold`}>Описание продукта</h1>
              <ProductDescription description={property?.description} />
            </div>
          </div>
          <div className={`w-1/3 space-y-5`}>
            <ProductPricing
              price={property?.price}
              realtorData={property?.owner}
            />
            <ProductRealtor owner={property?.owner} />
          </div>
        </div>
      </section>
    </div>
  )
}
