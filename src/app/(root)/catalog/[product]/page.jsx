import { ProductImages } from '@/components/root/product/ProductImages'
import { ProductTitle } from '@/components/root/product/ProductTitle'
import { ProductPricing } from '@/components/root/product/ProductPricing'
import { ProductRealtor } from '@/components/root/product/ProductRealtor'

export default function ProductPage() {
  return (
    <main>
      <section className={`max-w-screen-2xl mx-auto`}>
        <div className={`flex justify-between items-start gap-5`}>
          <div className={`w-3/4`}>
            <ProductTitle />
            <ProductImages />
          </div>
          <div className={`w-1/4 space-y-5`}>
            <ProductPricing />
            <ProductRealtor />
          </div>
        </div>
      </section>
    </main>
  )
}
