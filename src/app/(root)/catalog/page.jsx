import { CatalogContent } from '@/components/root/CatalogContent'
import { CatalogFilter } from '@/components/root/CatalogFilter'

export default function CatalogPage() {
  return (
    <div>
      <div>
        <CatalogFilter />
      </div>
      <div>
        <CatalogContent />
      </div>
    </div>
  )
}
