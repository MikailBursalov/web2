import { SearchSection } from '@/components/root/SearchSection'
import { SuggestedListings } from '@/components/root/SuggestedListings'
import { PopularADS } from '@/components/root/PopularADS'
import { OffersOnRegions } from '@/components/root/OffersOnRegions'

export default function Home() {
  return (
    <div>
      <SearchSection />
      <SuggestedListings />
      <PopularADS />
      <OffersOnRegions />
    </div>
  )
}
