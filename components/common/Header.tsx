'use client'
import Navbar from './Navbar'
import MobileNav from './MobileNav'
import TogglButton from './ToggleButton'
import Logo from './Logo'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <header className='relative z-[999]'>
      <motion.div
        className='fixed border border-white border-opacity-50 left-1/2 -translate-x-1/2 h-[4.5rem] w-full bg-white bg-opacity-60 backdrop-blur-[0.5rem] shadow-lg shadow-black/[0.03] sm:-h[3.25rem]'
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
      >
        <div className='flex items-center justify-between w-full h-full max-w-10xl mx-auto px-4'>
          <div className='flex justify-start items-center'>
            <Logo />
          </div>
          <nav className='flex items-center justify-center gap-2'>
            <div className='hidden lg:block'>
              <Navbar />
            </div>
            <div className='lg:hidden'>
              <MobileNav />
            </div>
            <div>
              {/* toggle button */}
              <TogglButton />
            </div>
          </nav>
        </div>
      </motion.div>
    </header>
  )
}
export default Header
