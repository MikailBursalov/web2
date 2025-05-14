'use client'
import { AlertCircle, Clock4, HeartIcon, Phone } from 'lucide-react'
import { Skeleton } from '@/components/ui/skeleton'
import { useState } from 'react'
import { clsx } from 'clsx'

const getPeriodLabel = (period) => {
  switch (period) {
    case 'daily':
      return '/день'
    case 'weekly':
      return '/неделя'
    case 'monthly':
      return '/мес'
    case 'yearly':
      return '/год'
    default:
      return ''
  }
}

const getCurrencySymbol = (currency) => {
  switch (currency) {
    case 'USD':
      return '$'
    case 'SOM':
      return 'C'
    default:
      return currency || ''
  }
}

export const ProductPricing = ({ price, realtorData, className }) => {
  const [showContact, setShowContact] = useState(false)

  const formattedPrice = `${price?.amount ?? '-'} ${getCurrencySymbol(price?.currency)}${getPeriodLabel(price?.paymentPeriod)}`
  const ownerPhone = realtorData?.phone || null
  const ownerEmail = realtorData?.email || 'Email не указан'
  const ownerName = realtorData?.name || 'Имя не указано'

  return (
    <div className={clsx('', className)}>
      <div className="bg-white p-3 w-full h-auto rounded-xl space-y-3 shadow-[0_2px_16px_rgba(0,0,0,0.2)]">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-2xl">{formattedPrice}</h1>
          <HeartIcon className="size-7 text-red-500" />
        </div>

        <div className="w-full h-20">
          <Skeleton className="w-full h-full" />
        </div>

        <div className="w-full space-y-2">
          {[
            ['Цена', formattedPrice],
            ['Возможность рассрочки', 'есть'],
            ['Оплата', 'в начале месяца'],
          ].map(([label, value], i) => (
            <div
              key={i}
              className="flex items-center justify-between text-sm text-neutral-700"
            >
              <span>{label}</span>
              <div className="flex-1 border-b border-dashed mx-2" />
              <span>{value}</span>
            </div>
          ))}
        </div>

        <div className="mt-5 space-y-4">
          {!showContact ? (
            <button
              onClick={() => setShowContact(true)}
              className="bg-blue-500 hover:bg-blue-600 transition rounded-xl w-full py-2 text-white text-lg font-semibold"
            >
              Контакты владельца
            </button>
          ) : (
            <div className="bg-gray-100 rounded-xl p-4 space-y-3 text-sm text-neutral-800">
              <div className="flex justify-between items-center">
                <span className="font-bold text-base">
                  {ownerPhone || 'Номер не указан'}
                </span>
                <img src="/qr.png" alt="QR" className="w-6 h-6" />
              </div>
              <div className="flex items-start gap-2">
                <Clock4 className="w-4 h-4 mt-1" />
                <span>Специалист работает с 12:00 по 0:00.</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1" />
                <span>Номер только для звонков, сообщения не дойдут.</span>
              </div>
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 mt-1" />
                <span>
                  Если захотите оставить жалобу,{' '}
                  <a href="#" className="text-blue-500 underline">
                    напишите нам
                  </a>
                </span>
              </div>
              <div className="border-t pt-2 mt-2 text-xs text-neutral-500">
                Владелец: {ownerName} ({ownerEmail})
              </div>
            </div>
          )}
          <button className="bg-blue-100 md:hover:bg-blue-400 md:hover:text-white duration-300 rounded-xl w-full py-2 text-blue-500 text-xl">
            Позвонить владельцу
          </button>
        </div>
      </div>
    </div>
  )
}
