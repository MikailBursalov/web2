import Image from 'next/image'
import { StarIcon } from 'lucide-react'
import { clsx } from 'clsx'

export const ProductRealtor = ({ className }) => {
  return (
    <div className={clsx('', className)}>
      <div className="w-full bg-white">
        <div>
          <div className={`size-20`}>
            <Image
              src={'/realtors/boy-ava2.jpg'}
              alt={'avatar'}
              width={50}
              height={50}
              unoptimized
              loading={'lazy'}
              sizes={'100vw'}
              className={`object-cover rounded-full w-full h-full`}
            />
          </div>
          <div>
            <span>Арендатор</span>
            <h1>Виктор Мельнин</h1>
            <div>
              <span>4.8</span>
              <span>
                <StarIcon className="size-4 text-yellow-400" />
              </span>
              <span>137 отзывов</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
