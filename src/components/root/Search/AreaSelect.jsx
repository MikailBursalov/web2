'use client'
import { useState, useRef, useEffect } from 'react'
import { ChevronDownIcon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function AreaSelect() {
  const [isOpen, setIsOpen] = useState(false)
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const selectRef = useRef(null)

  // Закрытие списка при клике вне
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative w-full max-w-xs" ref={selectRef}>
      {/* Заголовок (кликабельный) */}
      <div
        className="w-full text-black cursor-pointer flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>Площадь</span>
        <ChevronDownIcon
          className={`text-gray-400 transform transition-transform duration-500 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        />
      </div>

      {/* Анимация выпадения */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }} // Начальное состояние (скрыто и выше)
            animate={{ opacity: 1, y: 0 }} // Анимация появления
            exit={{ opacity: 0, y: -10 }} // Анимация исчезновения
            transition={{ duration: 0.3 }} // Длительность анимации
            className="absolute top-8 -left-2 w-80 mt-2 bg-white border border-gray-300 rounded-md shadow-lg p-3 z-50"
          >
            <div className="relative flex justify-between gap-2 items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="от"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="w-full p-2 border rounded-md pr-9"
                />
                <span className="absolute top-1/2 -translate-y-1/2 right-3 text-gray-500">
                  м<sup>2</sup>
                </span>
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="до"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="w-full p-2 border rounded-md pr-9"
                />
                <span className="absolute top-1/2 -translate-y-1/2 right-3 text-gray-500">
                  м<sup>2</sup>
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
