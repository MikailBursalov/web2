'use client'
import { useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from 'lucide-react'

const currency = [
  { title: 'Сом', value: 'SOM', id: 1, icon: '⃀' },
  { title: 'USD', value: 'USD', id: 2, icon: '$' },
]

const paymentPeriod = [
  { title: 'Посуточно', value: 'daily', id: 1 },
  { title: 'Еженедельно', value: 'weekly', id: 2 },
  { title: 'Ежемесячно', value: 'monthly', id: 3 },
  { title: 'Ежегодно', value: 'yearly', id: 4 },
]

export const SelectPrice = ({
  setValue,
  selectedCurrency,
  selectedPaymentPeriod,
}) => {
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false)
  const [isPaymentPeriodOpen, setIsPaymentPeriodOpen] = useState(false)

  const currencyRef = useRef(null)
  const periodRef = useRef(null)

  const handleClickCurrency = (item) => {
    setValue((prev) => ({
      ...prev,
      price: { ...prev.price, currency: item.value },
    }))
    setIsCurrencyOpen(false)
  }

  const handleClickPaymentPeriod = (item) => {
    setValue((prev) => ({
      ...prev,
      price: { ...prev.price, paymentPeriod: item.value },
    }))
    setIsPaymentPeriodOpen(false)
  }

  // Закрытие валюты при клике вне
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (currencyRef.current && !currencyRef.current.contains(e.target)) {
        setIsCurrencyOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Закрытие периода оплаты при клике вне
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (periodRef.current && !periodRef.current.contains(e.target)) {
        setIsPaymentPeriodOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div>
      <div className={`flex justify-between items-center gap-2`}>
        <div className={`w-1/5`}>
          <label className={`text-gray-600 text-xs ml-1`}>Цена</label>
          <input
            type="text"
            placeholder={'цена'}
            className={`w-full px-3 py-1 border border-blue-500 rounded-md focus:outline outline-blue-500`}
          />
        </div>

        {/* Валюта */}
        <div className={`w-2/5`} ref={currencyRef}>
          <div className={`relative`}>
            <div>
              <label className={`text-gray-600 text-xs ml-1`}>Валюта</label>
              <div
                className={`w-full px-3 py-1 border border-blue-500 ${
                  isCurrencyOpen ? 'border-[1.4px]' : ''
                } rounded-md flex justify-between cursor-pointer`}
                onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
              >
                <span>{selectedCurrency || 'ничего не выбрано'}</span>
                <ChevronDownIcon
                  className={`transform transition-transform duration-300 ${
                    isCurrencyOpen
                      ? 'rotate-180 text-blue-500'
                      : 'rotate-0 text-blue-300'
                  }`}
                />
              </div>
            </div>
            <div
              className={`absolute z-10 left-0 right-0 mt-1 bg-white border border-blue-500 py-0.5 rounded-md shadow-md overflow-hidden transition-all duration-300 transform origin-top ${
                isCurrencyOpen
                  ? 'scale-y-100 opacity-100'
                  : 'scale-y-0 opacity-0 pointer-events-none'
              }`}
            >
              {currency.map((item) => (
                <div
                  key={item.id}
                  className={`border-b pb-1 md:hover:bg-gray-200 px-3 cursor-pointer`}
                  onClick={() => handleClickCurrency(item)}
                >
                  {item.title}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Период оплаты */}
        <div className={`w-2/5`}>
          <div className={`relative`} ref={periodRef}>
            <div>
              <label className={`text-gray-600 text-xs ml-1`}>
                Срок аренды
              </label>
              <div
                className={`w-full px-3 py-1 border border-blue-500 ${
                  isPaymentPeriodOpen ? 'border-[1.4px]' : ''
                } rounded-md flex justify-between cursor-pointer`}
                onClick={() => setIsPaymentPeriodOpen(!isPaymentPeriodOpen)}
              >
                <span>{selectedPaymentPeriod || 'ничего не выбрано'}</span>
                <ChevronDownIcon
                  className={`transform transition-transform duration-300 ${
                    isPaymentPeriodOpen
                      ? 'rotate-180 text-blue-500'
                      : 'rotate-0 text-blue-300'
                  }`}
                />
              </div>
            </div>
            <div
              className={`absolute z-10 left-0 right-0 mt-1 bg-white border border-blue-500 py-0.5 rounded-md shadow-md overflow-hidden transition-all duration-300 transform origin-top ${
                isPaymentPeriodOpen
                  ? 'scale-y-100 opacity-100'
                  : 'scale-y-0 opacity-0 pointer-events-none'
              }`}
            >
              {paymentPeriod.map((item) => (
                <div
                  key={item.id}
                  className={`border-b pb-1 md:hover:bg-gray-200 px-3 cursor-pointer`}
                  onClick={() => handleClickPaymentPeriod(item)}
                >
                  {item.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
