import { RealtorRating } from '@/components/root/realtors/RealtorRating'
import { RealtorTitle } from '@/components/root/realtors/RealtorTitle'
import { RealtorDescription } from '@/components/root/realtors/RealtorDescription'
import { Reviews } from '@/components/root/realtors/Reviews'

export const RealtorInfo = () => {
  return (
    <div>
      <div className="flex gap-2">
        <RealtorRating />
        <RealtorTitle />
      </div>
      <div>
        <RealtorDescription />
      </div>
      <div>
        <Reviews />
      </div>
    </div>
  )
}
