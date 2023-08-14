import { MdTranscribe } from 'react-icons/md'

const Whyus = () => {
  return (
    <section className='relative mx-auto max-w-10xl lg:py-8 mb-28 px-4'>
      <div className='flex flex-col px-4 lg:flex-row lg:gap-40'>
        <div className='flex flex-col w-full justify-center '>
          <div className='p-1 bg-brandPink self-start mb-2 md:mb-4'>
            <h3 className='uppercase text-white text-xs'>about us</h3>
          </div>
          <h2 className='text-xl sm:text-3xl md:text-4xl capitalize font-semibold mb-6 md:mb-10'>
            Why Confident speakers academy
          </h2>
          <p className='text-zinc-600 leading-6 md:mb-12'>
            Reference site about Lorem Ipsum, giving information on its origins,
            as well as a random Lipsum generator. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident
          </p>
          <div className='grid grid-cols-1 lg:grid-cols-2 md:gap-12'>
            {/* Card 1 */}
            <div className='flex justify-start gap-4 mt-8'>
              <div>
                <MdTranscribe className='text-6xl' />
              </div>
              <div>
                <h3 className='uppercase font-semibold text-sm mb-4 tracking-wide'>
                  Consulting training
                </h3>
                <p className='text-zinc-600 leading-6'>
                  Reference site about Lorem Ipsum, giving information on its
                  origins, as well as a random Lipsum genera.
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className='flex justify-start gap-4 mt-8'>
              <div>
                <MdTranscribe className='text-6xl' />
              </div>
              <div>
                <h3 className='uppercase font-semibold text-sm mb-4 tracking-wide'>
                  Advisor Training Program
                </h3>
                <p className='text-zinc-600 leading-6'>
                  Reference site about Lorem Ipsum, giving information on its
                  origins, as well as a random Lipsum genera.
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className='flex justify-start gap-4 mt-8'>
              <div>
                <MdTranscribe className='text-6xl' />
              </div>
              <div>
                <h3 className='uppercase font-semibold text-sm mb-4 tracking-wide'>
                  Consulting training
                </h3>
                <p className='text-zinc-600 leading-6'>
                  Reference site about Lorem Ipsum, giving information on its
                  origins, as well as a random Lipsum genera.
                </p>
              </div>
            </div>
            {/* Card 4 */}
            <div className='flex justify-start gap-4 mt-8'>
              <div>
                <MdTranscribe className='text-6xl' />
              </div>
              <div>
                <h3 className='uppercase font-semibold text-sm mb-4 tracking-wide'>
                  Consulting training
                </h3>
                <p className='text-zinc-600 leading-6'>
                  Reference site about Lorem Ipsum, giving information on its
                  origins, as well as a random Lipsum genera.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='container max-w-md mx-auto lg:w-1/2 mt-12 lg:mt-0'>
          <div className='w-full flex items-center justify-center p-8 bg-brandPink/60'>
            <p className='text-center tracking-wider font-semibold md:text-xl md:leading-8 text-white'>
              We provide the best services on the market for your business plan
              and your life.
            </p>
          </div>
          <div>
            <div className='container mx-auto py-8'>
              <form className='w-full max-w-md mx-auto bg-white p-8 rounded-md shadow-md'>
                <div className='mb-4'>
                  <select
                    className='w-full rounded-lg shadow-sm border-zinc-300 focus:border-brandPink focus:outline-none focus:ring-1 focus:ring-brandPink'
                    id='training-type'
                    name='training-type'
                  >
                    <option value='' disabled selected>
                      Please Select
                    </option>
                    <option value='co-training'>Corporate Training</option>
                    <option value='ind-training'>Individual Training</option>
                  </select>
                </div>
                <div className='mb-4'>
                  <input
                    className='w-full rounded-lg shadow-sm border-zinc-300 focus:border-brandPink focus:outline-none focus:ring-1 focus:ring-brandPink'
                    type='text'
                    id='name'
                    name='name'
                    placeholder='Name *'
                  />
                </div>
                <div className='mb-4'>
                  <input
                    className='w-full rounded-lg shadow-sm border-zinc-300 focus:border-brandPink focus:outline-none focus:ring-1 focus:ring-brandPink'
                    type='email'
                    id='email'
                    name='email'
                    placeholder='Email *'
                  />
                </div>
                <div className='mb-4'>
                  <input
                    className='w-full rounded-lg shadow-sm border-zinc-300 focus:border-brandPink focus:outline-none focus:ring-1 focus:ring-brandPink'
                    type='number'
                    id='phone'
                    name='phone'
                    placeholder='Phone'
                  />
                </div>

                <button
                  className='w-full bg-brandPink/75 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-brandPink transition duration-300 uppercase'
                  type='submit'
                >
                  Send a request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Whyus
