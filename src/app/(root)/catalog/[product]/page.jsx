import { ProductImages } from '@/components/root/product/ProductImages'
import { ProductTitle } from '@/components/root/product/ProductTitle'
import { ProductPricing } from '@/components/root/product/ProductPricing'
import { ProductRealtor } from '@/components/root/product/ProductRealtor'
import { ProductDescription } from '@/components/root/product/ProductDescription'

export default function ProductPage() {
  return (
    <div className={'my-5'}>
      <section className={`max-w-screen-2xl mx-auto`}>
        <div className={`flex justify-between items-start gap-5`}>
          <div className={`w-2/3 bg-white py-4 px-8 rounded-xl`}>
            <ProductTitle />
            <ProductImages />
            <div className={`space-y-4 my-4`}>
              <h1 className={`text-2xl font-bold`}>Описание продукта</h1>
              <ProductDescription />
            </div>
          </div>
          <div className={`w-1/3 space-y-5`}>
            <ProductPricing />
            <ProductRealtor />
          </div>
        </div>
      </section>
    </div>
  )
}
