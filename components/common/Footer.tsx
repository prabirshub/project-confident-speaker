import Link from 'next/link'
import Logo from './Logo'
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi'
import { BiMap } from 'react-icons/bi'

const Footer = () => {
  return (
    <footer className='bg-white'>
      <div className='mx-auto max-w-10xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
          <div>
            <div className='flex justify-start'>
              <Logo />
            </div>

            <p className='mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left'>
              Confident Speakers Academy is a premier platform for public
              speaking training. It helps native and non-native English speakers
              overcome their fear and anxiety
            </p>

            <ul className='mt-8 flex justify-center gap-6 sm:justify-start md:gap-8'>
              <li>
                <Link
                  href='/'
                  rel='noreferrer'
                  target='_blank'
                  className='text-brandPink transition hover:text-brandPink/75'
                >
                  <span className='sr-only'>Facebook</span>
                  <BsFacebook className='text-xl' />
                </Link>
              </li>

              <li>
                <Link
                  href='/'
                  rel='noreferrer'
                  target='_blank'
                  className='text-brandPink transition hover:text-brandPink/75'
                >
                  <span className='sr-only'>Instagram</span>
                  <BsInstagram className='text-xl' />
                </Link>
              </li>

              <li>
                <Link
                  href='/'
                  rel='noreferrer'
                  target='_blank'
                  className='text-brandPink transition hover:text-brandPink/75'
                >
                  <span className='sr-only'>Linkedin</span>
                  <BsLinkedin className='text-xl' />
                </Link>
              </li>
            </ul>
          </div>

          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2'>
            <div className='text-center sm:text-left'>
              <p className='text-lg font-medium text-gray-900'>About Us</p>

              <ul className='mt-8 space-y-4 text-sm'>
                <li>
                  <Link
                    className='text-gray-700 transition hover:text-gray-700/75'
                    href='/'
                  >
                    Company History
                  </Link>
                </li>

                <li>
                  <a
                    className='text-gray-700 transition hover:text-gray-700/75'
                    href='/'
                  >
                    Meet the Team
                  </a>
                </li>

                <li>
                  <Link
                    className='text-gray-700 transition hover:text-gray-700/75'
                    href='/'
                  >
                    Employee Handbook
                  </Link>
                </li>

                <li>
                  <a
                    className='text-gray-700 transition hover:text-gray-700/75'
                    href='/'
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div className='text-center sm:text-left'>
              <p className='text-lg font-medium text-gray-900'>Our Services</p>

              <ul className='mt-8 space-y-4 text-sm'>
                <li>
                  <Link
                    className='text-gray-700 transition hover:text-gray-700/75'
                    href='/'
                  >
                    Web Development
                  </Link>
                </li>

                <li>
                  <Link
                    className='text-gray-700 transition hover:text-gray-700/75'
                    href='/'
                  >
                    Web Design
                  </Link>
                </li>

                <li>
                  <Link
                    className='text-gray-700 transition hover:text-gray-700/75'
                    href='/'
                  >
                    Marketing
                  </Link>
                </li>

                <li>
                  <Link
                    className='text-gray-700 transition hover:text-gray-700/75'
                    href='/'
                  >
                    Google Ads
                  </Link>
                </li>
              </ul>
            </div>

            <div className='text-center sm:text-left'>
              <p className='text-lg font-medium text-gray-900'>Helpful Links</p>

              <ul className='mt-8 space-y-4 text-sm'>
                <li>
                  <Link
                    className='text-gray-700 transition hover:text-gray-700/75'
                    href='/'
                  >
                    FAQs
                  </Link>
                </li>

                <li>
                  <Link
                    className='text-gray-700 transition hover:text-gray-700/75'
                    href='/'
                  >
                    Support
                  </Link>
                </li>

                <li>
                  <Link
                    className='group flex justify-center gap-1.5 sm:justify-start rtl:sm:justify-end'
                    href='/'
                  >
                    <span className='text-gray-700 transition group-hover:text-gray-700/75'>
                      Live Chat
                    </span>

                    <span className='relative flex h-2 w-2'>
                      <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-brandPink/75 opacity-75'></span>
                      <span className='relative inline-flex h-2 w-2 rounded-full bg-brandPink'></span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className='text-center sm:text-left'>
              <p className='text-lg font-medium text-gray-900'>Contact Us</p>

              <ul className='mt-8 space-y-4 text-sm'>
                <li>
                  <Link
                    className='flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end'
                    href='/'
                  >
                    <HiOutlineMail className='text-xl text-brandPink' />
                    <span className='sm:flex-1 text-gray-700'>
                      john@doe.com
                    </span>
                  </Link>
                </li>

                <li>
                  <Link
                    className='flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end'
                    href='/'
                  >
                    <HiOutlinePhone className='text-xl text-brandPink' />

                    <span className='text-gray-700 sm:flex-1'>0123456789</span>
                  </Link>
                </li>

                <li className='flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end'>
                  <BiMap className='text-xl text-brandPink' />

                  <address className='-mt-0.5 sm:flex-1 not-italic text-gray-700'>
                    213 Lane, London, United Kingdom
                  </address>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='mt-12 border-t border-gray-100 pt-6'>
          <div className='text-center sm:flex sm:justify-between sm:text-left'>
            <p className='text-sm text-gray-500'>
              <span className='block sm:inline'>All rights reserved. </span>
              Designed and developed by
              <span>&middot;</span>
              <Link
                className='inline-block text-brandPink underline transition hover:text-brandPink/75'
                href='/'
              >
                fivexfast
              </Link>
            </p>

            <p className='mt-4 text-sm text-gray-500 sm:order-first sm:mt-0'>
              &copy; {new Date().getFullYear()} Confident Spekers Academy
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
