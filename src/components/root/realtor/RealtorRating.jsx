import Image from 'next/image'
import { DotIcon, StarIcon } from 'lucide-react'

export const RealtorRating = ({ rating = 2.4, reviews = 14 }) => {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating - fullStars >= 0.25 && rating - fullStars <= 0.75
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

  return (
    <div className={`w-1/6`}>
      <div className={`flex flex-col justify-center items-center`}>
        <div>
          <Image
            src={'/profilePhoto/1.jpg'}
            alt="Realtor Rating"
            className={`rounded-full size-32`}
            width={120}
            height={120}
          />
        </div>
        <div className="flex">
          {/* Полные звёзды */}
          {[...Array(fullStars)].map((_, i) => (
            <StarIcon
              key={`full-${i}`}
              className="text-orange-400 fill-orange-400 w-6 h-6"
            />
          ))}

          {/* Половинчатая звезда */}
          {hasHalfStar && (
            <div className="relative w-5 h-5">
              <StarIcon className="text-gray-300 fill-gray-300 w-5 h-5" />
              <div className="absolute top-0 left-0 overflow-hidden w-1/2 h-full">
                <StarIcon className="text-orange-400 fill-orange-400 w-6 h-6" />
              </div>
            </div>
          )}

          {/* Пустые звёзды */}
          {[...Array(emptyStars)].map((_, i) => (
            <StarIcon
              key={`empty-${i}`}
              className="text-gray-300 fill-gray-300 w-6 h-6"
            />
          ))}
        </div>

        <div className="flex items-center gap-1 mt-1">
          <span>{rating.toFixed(1)}</span>
          <DotIcon />
          <span>{reviews} отзывов</span>
        </div>

        <div className="mt-2">
          <div className="bg-green-500/70 flex items-center gap-1 p-1 rounded-3xl">
            <StarIcon
              fill={'white'}
              className="text-green-500 bg-green-500 p-0.5 rounded-full text-xl"
            />
            <span className={`text-xs text-white font-semibold`}>
              Супер арендатор
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
