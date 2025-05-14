import Image from 'next/image'
import { DotIcon, StarIcon } from 'lucide-react'
import { clsx } from 'clsx'

export const ProductRealtor = ({ owner, className }) => {
  return (
    <div className={clsx('', className)}>
      <div className="bg-white p-3 w-full h-auto rounded-xl space-y-3 shadow-[0_2px_16px_rgba(0,0,0,0.2)]">
        <div className="flex items-center justify-center flex-col">
          <div className={`size-28`}>
            <Image
              src={'/realtor/boy-ava2.jpg'}
              alt={'avatar'}
              width={50}
              height={50}
              unoptimized
              loading={'lazy'}
              sizes={'100vw'}
              className={`object-cover rounded-full w-full h-full`}
            />
          </div>
          <div className={`text-center`}>
            <span className={'text-gray-500'}>Арендатор</span>
            <h1 className={`text-xl`}>{owner.name}</h1>
            <div className={`flex items-center justify-center text-lg`}>
              <span className={'text-yellow-400'}>4.8</span>
              <span className={`ml-1`}>
                <StarIcon className="size-4 text-yellow-400 " fill={'gold'} />
              </span>
              <DotIcon />
              <span>137 отзывов</span>
            </div>
          </div>
          <div className={`w-full my-5`}>
            <div
              className={`bg-gray-300 rounded-xl py-2 w-full flex justify-between items-center`}
            >
              <div className={`pl-3 text-center flex gap-4`}>
                <h5>публикаций</h5>
                <p className={`font-bold`}>22</p>
              </div>
              <div className={`pr-3 text-center`}>
                <a
                  className={`md:hover:underline md:hover:text-blue-500 duration-300`}
                  href={`/realtors/1`}
                >
                  Посмотреть профиль
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
