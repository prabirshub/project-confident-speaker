const OurCourses = () => {
  return (
    <section className='relative mx-auto max-w-10xl lg:py-8 mb-28 px-4'>
      <div className='flex flex-col w-full justify-center text-center'>
        <div className='p-1 bg-brandPink mb-2 md:mb-4 self-center'>
          <h3 className='uppercase text-white text-xs'>courses</h3>
        </div>
        <h2 className='text-xl sm:text-3xl md:text-4xl capitalize font-semibold mb-6 md:mb-10'>
          Training programs
        </h2>

        <div className='max-w-10xl mx-auto px-4 sm:px-6 lg:px-4 mb-12'>
          <article>
            <section className='mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8'>
              <article className='relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out bg-[url("/assets/1.jpg")]'>
                <div className='absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out'></div>
                <div className='relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center'>
                  <h3 className='text-center capitalize'>
                    <a
                      className='text-white text-2xl font-bold text-center'
                      href='#'
                    >
                      <span className='absolute inset-0'></span>
                      Become a confident leader
                    </a>
                  </h3>
                </div>
              </article>
              <article className='relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out bg-[url("/assets/1.jpg")]'>
                <div className='absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out'></div>
                <div className='relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center'>
                  <h3 className='text-center capitalize'>
                    <a
                      className='text-white text-2xl font-bold text-center'
                      href='#'
                    >
                      <span className='absolute inset-0'></span>
                      Get paid to speak
                    </a>
                  </h3>
                </div>
              </article>
              <article className='relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out bg-[url("/assets/1.jpg")]'>
                <div className='absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out'></div>
                <div className='relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center'>
                  <h3 className='text-center capitalize'>
                    <a
                      className='text-white text-2xl font-bold text-center'
                      href='#'
                    >
                      <span className='absolute inset-0'></span>
                      off the cuff speaking program
                    </a>
                  </h3>
                </div>
              </article>
              <article className='relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out bg-[url("/assets/1.jpg")]'>
                <div className='absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out'></div>
                <div className='relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center'>
                  <h3 className='text-center capitalize'>
                    <a
                      className='text-white text-2xl font-bold text-center'
                      href='#'
                    >
                      <span className='absolute inset-0'></span>
                      Time management skills
                    </a>
                  </h3>
                </div>
              </article>
              <article className='relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out bg-[url("/assets/1.jpg")]'>
                <div className='absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out'></div>
                <div className='relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center'>
                  <h3 className='text-center capitalize'>
                    <a
                      className='text-white text-2xl font-bold text-center'
                      href='#'
                    >
                      <span className='absolute inset-0'></span>
                      how to end procrastination
                    </a>
                  </h3>
                </div>
              </article>
              <article className='relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out bg-[url("/assets/1.jpg")]'>
                <div className='absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out'></div>
                <div className='relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center'>
                  <h3 className='text-center capitalize'>
                    <a
                      className='text-white text-2xl font-bold text-center'
                      href='#'
                    >
                      <span className='absolute inset-0'></span>
                      interview skills mastery
                    </a>
                  </h3>
                </div>
              </article>
            </section>
          </article>
        </div>
      </div>
    </section>
  )
}
export default OurCourses
