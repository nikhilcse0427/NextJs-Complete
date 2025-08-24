import Image from 'next/image'
import img from 'public/heroPage.jpg'

const HeroPage = () => {
  return (
    <div className='relative h-screen flex justify-center'>
      <div className='absolute inset-0 -z-10'>
        <Image
          src={img}
          fill
          alt='Hero image'
          style={{ objectFit: 'cover' }} />
      </div>
      <div className="absolute z-10 mt-20 flex flex-col items-center">
        <p className="text-white font-extrabold text-6xl">
          Welcome to our Showroom
        </p>
        <p className="text-white text-2xl mt-4">
          Where Dreams Come True
        </p>
      </div>
    </div>
  )
}

export default HeroPage
