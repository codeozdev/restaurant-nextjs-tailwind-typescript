import React from 'react'
import { pizzas } from '@/data'
import Link from 'next/link'
import Image from 'next/image'

const CategoryPage = () => {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 text-red-500'>
      {pizzas.map((pizza) => (
        <Link
          href={`/product/${pizza.id}`}
          key={pizza.id}
          className='w-full h-[60vh] border-r-2 border-b-2 border-red-500 p-4 flex flex-col justify-between group odd:bg-fuchsia-50'>
          {/* IMAGE CONTAINER */}
          {pizza.img && (
            <div className='relative h-[80%]'>
              <Image
                src={pizza.img}
                alt=''
                fill
                className='object-contain'></Image>
            </div>
          )}
          {/* TEXT CONTAINER */}
          <div className='flex justify-between items-center font-bold'>
            <h1 className='text-2xl uppercase p-2'>{pizza.title}</h1>
            <h2 className='group-hover:hidden text-xl'>${pizza.price}</h2>
            <button className='hidden uppercase bg-red-500 group-hover:block text-white p-2 rounded-md'>
              Add to Cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default CategoryPage

//buradan product klasorune gidiyoruz
