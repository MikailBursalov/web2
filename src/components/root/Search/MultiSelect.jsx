'use client'
import { useState, useRef, useEffect } from 'react'
import { CheckIcon, ChevronDownIcon } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const options = [
  'Cat',
  'Dog',
  'Elephant',
  'Lion',
  'Tiger',
  'Giraffe',
  'Dolphin',
  'Penguin',
]

export default function MultiSelect({ defaultTitle }) {
  const [selected, setSelected] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const selectRef = useRef(null)

  // Переключение элемента в списке
  const toggleSelection = (option) => {
    setSelected((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    )
  }

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
    <div className="relative w-full" ref={selectRef}>
      {/* Поле выбора */}
      <div
        className="w-full rounded-md  text-black cursor-pointer flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selected.length > 0 ? selected.join(', ') : defaultTitle}</span>
        <ChevronDownIcon
          className={`text-gray-400 transform transition-transform duration-500 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        />
      </div>

      {/* Выпадающий список */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }} // Начальное состояние (скрыто и выше)
            animate={{ opacity: 1, y: 0 }} // Анимация появления
            exit={{ opacity: 0, y: -10 }} // Анимация исчезновения
            transition={{ duration: 0.3 }} // Длительность анимации
            className="absolute top-8 -left-2 w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg p-3 z-50"
          >
            {options.map((option) => (
              <li
                key={option}
                onClick={() => toggleSelection(option)}
                className={`p-2 cursor-pointer rounded-sm md:hover:bg-blue-200 flex justify-between ${
                  selected.includes(option) ? '' : ''
                }`}
              >
                {option}
                {selected.includes(option) && <CheckIcon />}
              </li>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
