import Image from 'next/image'

const Logo = () => {
  return (
    <div className=''>
      <Image
        src='/logo-dark.svg'
        alt='logo'
        width={205}
        height={50}
        className='w-40 h-10 md:w-52 md:h-12'
      />
    </div>
  )
}
export default Logo
