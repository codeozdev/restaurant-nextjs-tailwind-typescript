'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const data = [
  {
    id: 1,
    title: 'always fresh & always crispy & always hot',
    image: '/slide1.png',
  },
  {
    id: 2,
    title: 'we deliver your order wherever you are in NY',
    image: '/slide2.png',
  },
  {
    id: 3,
    title: 'the best pizza to share with your family',
    image: '/slide3.jpg',
  },
]

const Slider = () => {
  const [currentSlide, setCurrentSide] = React.useState(0)

  //slayt islemi
  useEffect(() => {
    const interval = setInterval(
      () => setCurrentSide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      2000
    )
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50'>
      {/* TEXT CONTAINER */}
      <div className='flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold '>
        <h1 className='text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:m-7'>
          {data[currentSlide].title}
        </h1>
        <button className='bg-red-500 text-white py-4 px-8'>Order Now</button>
      </div>

      {/* IMAGE CONTAINER */}
      <div className='relative w-full flex-1'>
        <Image
          src={data[currentSlide].image}
          fill
          alt=''
          className='object-cover'
        />
      </div>
    </div>
  )
}

export default Slider

//setCurrentSide((prev) => (prev === data.length - 1 ? 0 : prev + 1)): Bu satır, currentSide durumunu önceki değeri (prev) kullanarak günceller. Eğer currentSide, data dizisinin son dizinine eşitse, slayt gösterisini döngüsel olarak başa sarar; aksi halde 1 ekleyerek bir sonraki slaytı gösterir.
