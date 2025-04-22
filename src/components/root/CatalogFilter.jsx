'use client'
import React, { useState, useEffect } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Slider } from '@mui/material'

function valuetext(value) {
  return `${value}°C`
}
export const CatalogFilter = () => {
  const [value, setValue] = useState([20, 37])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <div className={`bg-white rounded-md h-full p-4`}>
      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger>Тип аренды</AccordionTrigger>
          <AccordionContent>Фильтр 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Срок аренды</AccordionTrigger>
          <AccordionContent className={``}>
            <div className={`flex justify-between items-center gap-5`}>
              <input
                type="text"
                placeholder={'от'}
                className={`border border-blue-200 rounded-xl px-3 py-1 w-full text-blue-400 focus:outline-blue-400`}
              />
              <input
                type="text"
                placeholder={'до'}
                className={`border border-blue-200 rounded-xl px-3 py-1 w-full text-blue-400 focus:outline-blue-400`}
              />
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Тип недвижимости</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Цена</AccordionTrigger>
          <AccordionContent>
            <div className={`flex justify-between items-center gap-5`}>
              <input
                type="text"
                placeholder={'от'}
                className={`border border-blue-200 rounded-xl px-3 py-1 w-full text-blue-400 focus:outline-blue-400`}
              />
              <input
                type="text"
                placeholder={'до'}
                className={`border border-blue-200 rounded-xl px-3 py-1 w-full text-blue-400 focus:outline-blue-400`}
              />
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Комнатность</AccordionTrigger>
          <AccordionContent>
            <div>
              {[
                '1-комнатная',
                '2-комнатная',
                '3-комнатная',
                '4-комнатная',
                '5-комнатная',
                '1-комнатная + студия',
              ].map((label, index) => (
                <div
                  key={index}
                  className="flex justify-start items-center gap-5 group"
                >
                  <input type="checkbox" id={`room-${index}`} />
                  <label
                    htmlFor={`room-${index}`}
                    className="cursor-pointer md:group-hover:border-b border-black duration-1 00"
                  >
                    {label}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
