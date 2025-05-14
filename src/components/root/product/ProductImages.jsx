'use client'
import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import './productImagesStyles.css'

import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import Image from 'next/image'

const procustImagesData = [
  { image: '/product/1.jpg', id: 1 },
  { image: '/product/2.jpg', id: 2 },
  { image: '/product/3.jpg', id: 3 },
  { image: '/product/4.jpg', id: 4 },
  { image: '/product/5.jpg', id: 5 },
  { image: '/product/6.jpg', id: 6 },
  { image: '/product/7.jpg', id: 7 },
  { image: '/product/8.jpg', id: 8 },
  { image: '/product/9.jpg', id: 9 },
  { image: '/product/10.jpg', id: 10 },
  { image: '/product/11.jpg', id: 11 },
  { image: '/product/12.jpg', id: 12 },
  { image: '/product/13.jpg', id: 13 },
  { image: '/product/14.jpg', id: 14 },
  { image: '/product/15.jpg', id: 15 },
  { image: '/product/16.jpg', id: 16 },
  { image: '/product/17.jpg', id: 17 },
  { image: '/product/18.jpg', id: 18 },
]
export const ProductImages = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

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
          {images?.map((item, i) => (
            <SwiperSlide key={i} className="aspect-[4/3] w-full">
              <Image
                src={item || '/noImage.png'}
                width={100}
                height={100}
                sizes={'100vw'}
                loading={'lazy'}
                unoptimized
                className="object-cover w-full h-full rounded-md"
                alt={item.id}
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
          {images?.map((item, i) => (
            <SwiperSlide key={i} className="aspect-[1/1] w-full">
              <Image
                src={item || '/noImage.png'}
                width={100}
                height={100}
                sizes={'100vw'}
                loading={'lazy'}
                unoptimized
                className="object-cover w-full h-full rounded-md"
                alt={item.id}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
