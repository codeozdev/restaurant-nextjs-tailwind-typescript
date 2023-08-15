import React from 'react'
import { menu } from '@/data'
import Link from 'next/link'

const MenuPage = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center'>
      {menu.map((item) => (
        <Link
          href={`/menu/${item.slug}`}
          key={item.id}
          style={{ backgroundImage: `url(${item.img})` }}
          className='w-full h-1/3 bg-cover p-8 md:h-1/2'>
          <div className={`text-${item.color} w-1/2`}>
            <h1 className='uppercase font-bold text-3xl'>{item.title}</h1>
            <p className='text-sm my-8'>{item.desc}</p>
            <button
              className={`hidden 2xl:block bg-${item.color}
              } 
              text-${
                item.color === 'black' ? 'white' : 'red-500'
              } py-2 px-4 rounded-md`}>
              Explore
            </button>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default MenuPage

//button bg-color duzgun calismiyor fakat bir sorun yok gorunuyor
