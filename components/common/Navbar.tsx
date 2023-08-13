'use client'

import { useState } from 'react'
import { navLinks } from '@/constants'
import Link from 'next/link'

const Navbar = () => {
  const [active, setActive] = useState('Home')
  return (
    <div className='flex items-center gap-5 justify-end px-5 '>
      <ul className='flex justify-center items-center gap-5 flex-wrap lg:flex-nowrap'>
        {navLinks.map((link) => (
          <li
            key={link._id}
            className='text-sm text-zinc-700 hover:text-brandPink transition font-medium uppercase'
          >
            <Link href={link.route} className='group relative'>
              {link.label}
              <span className=' absolute w-full h-[2px] bg-brandPink scale-0 group-hover:scale-100 -bottom-[2px] left-0 duration-500'></span>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        className='py-2 px-3 bg-brandPink text-white rounded-md text-sm font-medium tracking-wide uppercase hover:bg-pink-600 hover:ring-2 hover:ring-brandYellow hover:shadow-md duration-300'
        href='/contact'
      >
        {' '}
        Enquire now
      </Link>
    </div>
  )
}
export default Navbar
