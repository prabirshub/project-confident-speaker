type SectionHeadingProps = {
  children: React.ReactNode
}

const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <h2 className='text-2xl lg:text-3xl font-bold leading-tight mb-2'>
      {children}
    </h2>
  )
}
export default SectionHeading
