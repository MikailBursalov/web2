import { MapPin } from 'lucide-react'

export const ProductTitle = ({ title, address, city }) => {
  return (
    <div>
      <div className={`space-y-4 my-4  flex justify-between items-center`}>
        <h1 className={`text-4xl font-semibold`}>{title}</h1>
        <h4 className={`flex justify-start gap-2 items-center text-gray-500`}>
          <MapPin />{' '}
          <span>
            {address}, {city}
          </span>
        </h4>
      </div>
    </div>
  )
}
