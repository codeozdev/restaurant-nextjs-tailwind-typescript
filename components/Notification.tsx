import Link from 'next/link'
import React from 'react'

const Notification = () => {
  return (
    <Link href='/orders' className='h-12 bg-red-500 text-white flex justify-center items-center px-4 text-center text-sm md:text-base cursor-pointer'>
      Free delivery for all oders over $50. Order your food now!
    </Link>
  )
}

export default Notification
