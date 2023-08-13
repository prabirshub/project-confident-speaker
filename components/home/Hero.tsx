const Hero = () => {
  return (
    <section className='mx-auto relative overflow-hidden'>
      <div className='w-screen h-screen relative'>
        <div className='abosolute top-0 left-0 bg-white/60 w-full h-full flex flex-col items-center justify-center '>
          <h1 className=' text-base sm:text-xl font-semibold text-zinc-900 uppercase leading-4 tracking-wider mb-6 -mt-12 sm:-mt-28'>
            Public Speaking Courses in{' '}
            <span className='text-brandPink'>Perth, Australia</span>
          </h1>
          <h2 className='text-3xl px-5 md:text-5xl lg:text-7xl font-bold lg:max-w-7xl text-center mb-8 uppercase'>
            Unlock Your Potential: Master the Art of Confident Public Speaking
          </h2>
          <div className='flex items-center justify-center gap-4'>
            <button className='bg-brandPink text-white px-4 py-2 text-lg uppercase tracking-wider rounded-md border-none hover:ring-2 hover:ring-brandYellow hover:bg-brandPink/90 transition'>
              hire us
            </button>
            <button className='px-4 py-2 text-lg uppercase tracking-wider rounded-md border-2 border-brandPink text-brandPink hover:ring-2 hover:ring-brandYellow hover:bg-brandPink hover:text-white transition'>
              discover our courses
            </button>
          </div>
          <video
            className='absolute -z-10 w-auto 
            min-w-full min-h-full max-w-none'
            autoPlay
            loop
            muted
          >
            <source src='/assets/promo-vid.mp4' type='video/mp4' />
          </video>
        </div>
      </div>
    </section>
  )
}
export default Hero
