import Link from 'next/link'
import Image from 'next/image'
import SectionHeading from '../common/SectionHeading'

const Whyus = () => {
  return (
    <section className='max-w-10xl mx-auto'>
      <div className='flex flex-col md:flex-row md:gap-20 justify-between antialiased border-2 border-red-500'>
        <div className='mx-auto p-4 sm:px-10 h-full'>
          {/* Blog Post */}
          <article className='max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16'>
            <Link className='relative block group' href='#0'>
              <div
                className='absolute inset-0 bg-brandPink hidden md:block transform md:translate-y-2 md:translate-x-6 xl:translate-y-6 xl:translate-x-10 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none rounded-md'
                aria-hidden='true'
              ></div>
              <figure className='relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out'>
                <Image
                  className='absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out rounded-md'
                  src='/assets/1.jpg'
                  width={540}
                  height={303}
                  alt='Blog post'
                />
              </figure>
            </Link>

            <div>
              <header>
                <div className='mb-3 pt-10'>
                  <ul className='flex flex-wrap text-xs font-medium -m-1'>
                    <li className='m-1'>
                      <a
                        className='inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out'
                        href='#0'
                      >
                        Product
                      </a>
                    </li>
                    <li className='m-1'>
                      <a
                        className='inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out'
                        href='#0'
                      >
                        Engineering
                      </a>
                    </li>
                  </ul>
                </div>
                <SectionHeading>
                  Desigining a functional workfplow at home
                </SectionHeading>
              </header>
              <p className='text-lg text-gray-400 flex-grow'>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
export default Whyus
