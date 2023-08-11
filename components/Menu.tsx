'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CartIcon from './CartIcon'

const Menu = () => {
  const [open, setOpen] = React.useState(false)

  const user = false

  const links = [
    { id: 1, title: 'Homepage', url: '/' },
    { id: 2, title: 'Menu', url: '/menu' },
    { id: 3, title: 'Working Hours', url: '/' },
    { id: 4, title: 'Contact', url: '/' },
  ]

  return (
    <div className='cursor-pointer'>
      {!open ? (
        <Image
          src='/open.png'
          width={20}
          height={20}
          alt=''
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src='/close.png'
          width={20}
          height={20}
          alt=''
          onClick={() => setOpen(false)}
        />
      )}

      {open && (
        <div className='flex flex-col items-center justify-center text-3xl gap-8 w-full bg-red-500 text-white absolute left-0 top-24 h-[calc(100vh-6rem)] z-10'>
          {links.map((item) => (
            <Link key={item.id} href={item.url} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}

          {!user ? (
            <Link href='/login' onClick={() => setOpen(false)}>
              Login
            </Link>
          ) : (
            <Link href='/orders' onClick={() => setOpen(false)}>
              Orders
            </Link>
          )}
          <Link href='/cart' onClick={() => setOpen(false)}>
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  )
}

export default Menu
