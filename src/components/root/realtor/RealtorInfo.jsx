import { RealtorRating } from '@/components/root/realtor/RealtorRating'
import { RealtorTitle } from '@/components/root/realtor/RealtorTitle'
import { RealtorDescription } from '@/components/root/realtor/RealtorDescription'
import { Reviews } from '@/components/root/realtor/Reviews'

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
      <Reviews />
    </div>
  )
}
