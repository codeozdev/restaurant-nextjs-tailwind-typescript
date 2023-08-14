'use client'

import React, { useEffect, useState } from 'react'

interface Props {
  price: number
  id: number
  options?: { title: string; additionalPrice: number }[]
}

const Price = ({ price, id, options }: Props) => {
  const [total, setTotal] = useState(price)
  const [quantitiy, setQuantitiy] = useState(1)
  const [selected, setSelected] = useState(0)

  useEffect(() => {
    setTotal(
      quantitiy * (options ? price + options[selected].additionalPrice : price) // eğer medium veya large secerse fiyati 4 veya 6 dolar artar yoksa sabit fiyat
    )
  }, [quantitiy, selected, options, price])

  return (
    <div className='flex flex-col gap-4'>
      <h2 className='text-2xl font-bold'>${total.toFixed(2)}</h2>
      {/* OPTIONS CONTAINER */}
      <div className='flex gap-4'>
        {options?.map((item, index) => (
          <button
            key={item.title}
            className='min-w-[6rem] p-2 ring-1 ring-red-400 rounded-md'
            style={{
              background: selected === index ? 'rgb(248 113 113' : 'white',
              color: selected === index ? 'white' : 'black',
            }}
            onClick={() => setSelected(index)}>
            {item.title}
          </button>
        ))}
      </div>
      {/* QUANTITY AND BUTTON CONTAINER */}
      <div className='flex justify-between items-center'>
        <div className='flex justify-between w-full p-3 ring-1 ring-red-500'>
          <span>Quantity</span>
          <div className='flex gap-4 text-center'>
            <button
              //min miktar 1
              onClick={() => setQuantitiy((prev) => (prev > 1 ? prev - 1 : 1))}>
              {'<'}
            </button>
            <span>{quantitiy}</span>
            <button
              //max miktar 9
              onClick={() => setQuantitiy((prev) => (prev < 9 ? prev + 1 : 9))}>
              {'>'}
            </button>
          </div>
        </div>
        {/* CART BUTTON */}
        <div>
          <button className='uppercase w-56 bg-red-500 text-white p-3 ring-1 ring-red-500'>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
export default Price

//product id sayfasinda kullandik
