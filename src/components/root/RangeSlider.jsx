'use client'
import React, { useState, useEffect, useRef } from 'react'

export const RangeSlider = ({
  min = 0,
  max = 1000,
  step = 50,
  defaultMin = 50,
  defaultMax = 800,
  onChange,
}) => {
  const [minValue, setMinValue] = useState(defaultMin)
  const [maxValue, setMaxValue] = useState(defaultMax)
  const rangeRef = useRef(null)

  useEffect(() => {
    if (rangeRef.current) {
      const minPercent = ((minValue - min) / (max - min)) * 100
      const maxPercent = ((maxValue - min) / (max - min)) * 100
      rangeRef.current.style.left = `${minPercent}%`
      rangeRef.current.style.width = `${maxPercent - minPercent}%`
    }
  }, [minValue, maxValue, min, max])

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxValue - step)
    setMinValue(value)
    onChange && onChange(value, maxValue)
  }

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minValue + step)
    setMaxValue(value)
    onChange && onChange(minValue, value)
  }

  return (
    <div className="relative w-full p-4">
      <label className="block text-sm font-medium text-white mb-2">
        Price Range
      </label>
      <div className="relative h-10 flex items-center">
        {/* Линия фона */}
        <div className="absolute left-0 right-0 h-2 bg-gray-700 rounded"></div>

        {/* Линия активного диапазона */}
        <div ref={rangeRef} className="absolute h-2 bg-blue-500 rounded"></div>

        {/* Ползунок MIN */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={minValue}
          onChange={handleMinChange}
          className="absolute w-full appearance-none bg-transparent pointer-events-auto z-10"
          style={{
            zIndex: minValue > max - 10 ? 5 : 3,
            WebkitAppearance: 'none',
          }}
        />

        {/* Ползунок MAX */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={maxValue}
          onChange={handleMaxChange}
          className="absolute w-full appearance-none bg-transparent pointer-events-auto z-20"
          style={{
            zIndex: 4,
            WebkitAppearance: 'none',
          }}
        />

        {/* Кружки (ползунки) */}
        <div
          className="absolute w-6 h-6 bg-blue-500 rounded-full border-2 border-white"
          style={{
            left: `${((minValue - min) / (max - min)) * 100}%`,
            transform: 'translate(-50%, -50%)',
          }}
        ></div>

        <div
          className="absolute w-6 h-6 bg-blue-500 rounded-full border-2 border-white"
          style={{
            left: `${((maxValue - min) / (max - min)) * 100}%`,
            transform: 'translate(-50%, -50%)',
          }}
        ></div>

        {/* Метки значений */}
        <div
          className="absolute -bottom-6 text-white text-sm"
          style={{ left: `${((minValue - min) / (max - min)) * 100}%` }}
        >
          ${minValue.toFixed(2)}
        </div>
        <div
          className="absolute -bottom-6 text-white text-sm"
          style={{ left: `${((maxValue - min) / (max - min)) * 100}%` }}
        >
          ${maxValue.toFixed(2)}
        </div>
      </div>
    </div>
  )
}
