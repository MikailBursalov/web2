'use client'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import './productImagesStyles.css'

import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import Image from 'next/image'

export const ProductImages = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  // Если images пустой или не массив — генерируем 5 заглушек
  const safeImages =
    Array.isArray(images) && images.length > 0
      ? images
      : Array.from({ length: 5 }, () => '/noImage.png')

  return (
    <div>
      <div>
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {safeImages.map((item, i) => (
            <SwiperSlide key={i} className="aspect-[4/3] w-full">
              <Image
                src={item}
                width={100}
                height={100}
                sizes="100vw"
                loading="lazy"
                unoptimized
                className="object-cover w-full h-full rounded-md"
                alt={`image-${i}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={7}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {safeImages.map((item, i) => (
            <SwiperSlide key={i} className="aspect-[1/1] w-full">
              <Image
                src={item}
                width={100}
                height={100}
                sizes="100vw"
                loading="lazy"
                unoptimized
                className="object-cover w-full h-full rounded-md"
                alt={`thumb-${i}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
