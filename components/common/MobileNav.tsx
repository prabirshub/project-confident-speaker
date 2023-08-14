import { navLinks } from '@/constants'
import { useState } from 'react'
import Link from 'next/link'

const MobileNav = () => {
  const [isOpen, setIsopen] = useState(false)

  const toggleMenu = () => {
    setIsopen(!isOpen)
  }

  return (
    <div>
      <div className='py-2'>
        <button
          onClick={toggleMenu}
          type='button'
          className='block text-zinc-900 hover:text-brandPink focus:text-brandPink focus:outline-none text-xl'
        >
          <svg className='h-6 w-6 fill-current' viewBox='0 0 24 24'>
            {isOpen ? (
              <path
                fill-rule='evenodd'
                d='M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z'
              />
            ) : (
              <path
                fill-rule='evenodd'
                d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
              />
            )}
          </svg>
        </button>
      </div>
      <div
        className={
          isOpen
            ? 'absolute left-0 top-[70px] w-screen h-[calc(100vh-6rem)] bg-white z-30 p-12'
            : 'hidden'
        }
      >
        <ul>
          {navLinks.map((link) => (
            <li key={link._id} onClick={() => setIsopen(!isOpen)}>
              <Link href={link.route}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default MobileNav
