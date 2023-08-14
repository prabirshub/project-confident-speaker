import Link from 'next/link'

export default function NotFound() {
  return (
    <main className='max-w-10xl w-full'>
      <section className='flex flex-col justify-center items-center  min-h-screen'>
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href='/'>Return Home</Link>
      </section>
    </main>
  )
}
