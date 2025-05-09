'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronDownIcon } from 'lucide-react'

const data = [
  {
    title: 'Частный дом',
    value: 'house',
    id: 1,
  },
  {
    title: 'Многоэтажный дом',
    value: 'apartment',
    id: 2,
  },
]

export const ApartmentType = ({ setValue, selectedTitle }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState(null)
  const dropdownRef = useRef(null)

  const handleClick = (item) => {
    setValue((prev) => {
      return { ...prev, propertyType: item.value }
    })
    setSelectedValue(item.title)
    setIsOpen(false)
  }

  // Закрытие при клике вне
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  return (
    <div ref={dropdownRef} className={`w-1/3`}>
      <div className={`relative`}>
        <div>
          <label className={`text-gray-600 text-xs ml-1`}>Тип дома</label>
          <div
            className={`w-full px-3 py-1 border border-blue-500 ${isOpen ? 'border-[1.4px]' : ''} rounded-md flex justify-between cursor-pointer`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={``}>
              {selectedTitle ? selectedValue : 'ничего не выбрано'}
            </span>
            <ChevronDownIcon
              className={` transform transition-transform duration-300 ${
                isOpen ? 'rotate-180 text-blue-500' : 'rotate-0 text-blue-300'
              }`}
            />
          </div>
        </div>
        <div
          className={`absolute z-10 left-0 right-0 mt-1 bg-white border border-blue-500 py-0.5 rounded-md shadow-md overflow-hidden transition-all duration-300 transform origin-top ${
            isOpen
              ? 'scale-y-100 opacity-100'
              : 'scale-y-0 opacity-0 pointer-events-none'
          }`}
        >
          {data?.map((item) => (
            <div
              key={item.id}
              className={`border-b pb-1 md:hover:bg-gray-200 px-3 cursor-pointer`}
              onClick={() => handleClick(item)}
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
