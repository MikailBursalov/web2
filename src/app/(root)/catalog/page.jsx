import { CatalogContent } from '@/components/root/CatalogContent'
import { CatalogFilter } from '@/components/root/CatalogFilter'

export default function CatalogPage() {
  return (
    <div className={`my-5`}>
      <div
        className={`max-w-screen-2xl mx-auto flex justify-between items-start gap-5`}
      >
        <div className={`w-1/5 px-2 `}>
          <CatalogFilter />
        </div>
        <div className={`w-4/5 px-2 `}>
          <CatalogContent />
        </div>
      </div>
    </div>
  )
}
