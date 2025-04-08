'use client'
import { ChevronDownIcon, CheckIcon } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const extraData = [
  { title: 'Wi-Fi', value: 'wifi', id: 1 },
  { title: 'Парковка', value: 'parking', id: 2 },
  { title: 'С мебелью', value: 'furniture', id: 3 },
]

export const AreaAndAmenities = ({ setValue, selectedTitle }) => {
  const [isAmenitiesOpen, setIsAmenitiesOpen] = useState(false)
  const dropdownRef = useRef(null)

  const toggleAmenity = (item) => {
    setValue((prev) => {
      const alreadySelected = prev.amenities.includes(item.value)
      const newAmenities = alreadySelected
        ? prev.amenities.filter((a) => a !== item.value)
        : [...prev.amenities, item.value]

      return { ...prev, amenities: newAmenities }
    })
  }

  const AreaChange = (e) => {
    setValue((prev) => {
      return { ...prev, area: e.target.value }
    })
  }

  const BedroomsChange = (e) => {
    setValue((prev) => {
      return { ...prev, bedrooms: e.target.value }
    })
  }

  const BathroomsChange = (e) => {
    setValue((prev) => {
      return { ...prev, bathrooms: e.target.value }
    })
  }

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsAmenitiesOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  // Названия выбранных удобств
  const selectedItems = extraData
    .filter((item) => selectedTitle.amenities.includes(item.value))
    .map((item) => item.title)

  return (
    <div>
      <div className={`flex justify-between items-center gap-2`}>
        <div className={`w-[15%]`}>
          <label className={`text-gray-600 text-xs ml-1`}>Площадь</label>
          <div className={`flex items-center gap-2 relative`}>
            <input
              type="text"
              placeholder={`area`}
              value={selectedTitle.area || ''}
              onChange={(e) => AreaChange(e)}
              className={'border border-blue-500 w-full rounded-md px-2 py-1'}
            />
            <span className={`text-md absolute right-1`}>
              м<sup>2</sup>
            </span>
          </div>
        </div>
        <div className={`w-[15%]`}>
          <label className={`text-gray-600 text-xs ml-1`}>Спальни</label>
          <input
            type="text"
            value={selectedTitle.bedrooms || ''}
            onChange={(e) => BedroomsChange(e)}
            placeholder={`bedrooms`}
            className={'border border-blue-500 w-full rounded-md px-2 py-1'}
          />
        </div>
        <div className={`w-[15%]`}>
          <label className={`text-gray-600 text-xs ml-1`}>Ванны</label>
          <input
            type="text"
            value={selectedTitle.bathrooms || ''}
            onChange={(e) => BathroomsChange(e)}
            placeholder={`bathrooms`}
            className={'border border-blue-500 w-full rounded-md px-2 py-1'}
          />
        </div>
        <div className={`w-[55%]`}>
          <label className={`text-gray-600 text-xs ml-1`}>Дополнительно</label>
          <div ref={dropdownRef}>
            <div className={`relative`}>
              <div
                className={`w-full px-3 py-1 border border-blue-500 ${isAmenitiesOpen ? 'border-[1.4px]' : ''} rounded-md flex justify-between cursor-pointer`}
                onClick={() => setIsAmenitiesOpen(!isAmenitiesOpen)}
              >
                <span className="truncate max-w-[85%]">
                  {selectedItems.length > 0
                    ? selectedItems.join(', ')
                    : 'ничего не выбрано'}
                </span>
                <ChevronDownIcon
                  className={`transform transition-transform duration-300 ${
                    isAmenitiesOpen
                      ? 'rotate-180 text-blue-500'
                      : 'rotate-0 text-blue-300'
                  }`}
                />
              </div>
              <div
                className={`absolute z-10 left-0 right-0 mt-1 bg-white border border-blue-500 py-0.5 rounded-md shadow-md overflow-hidden transition-all duration-300 transform origin-top ${
                  isAmenitiesOpen
                    ? 'scale-y-100 opacity-100'
                    : 'scale-y-0 opacity-0 pointer-events-none'
                }`}
              >
                {extraData.map((item) => {
                  const isSelected = selectedTitle.amenities.includes(
                    item.value
                  )
                  return (
                    <div
                      key={item.id}
                      className={`flex items-center justify-between border-b pb-1 md:hover:bg-gray-200 px-3 py-1 cursor-pointer`}
                      onClick={() => toggleAmenity(item)}
                    >
                      <span>{item.title}</span>
                      {isSelected && (
                        <CheckIcon className="w-4 h-4 text-blue-500" />
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
