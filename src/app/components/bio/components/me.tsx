import Contact from './contact'
import Image from 'next/image'

export default function Me() {
  return (
    <div className="flex flex-col items-center justify-evenly">
      <div className='relative rounded-full h-80 aspect-[3/4]'>
        <Image src='/profile.jpg' alt='Matthew-Snyder' fill/>
      </div>
      <Contact />
    </div>
  )
}