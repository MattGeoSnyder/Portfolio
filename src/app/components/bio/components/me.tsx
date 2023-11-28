import Contact from './contact'
import Image from 'next/image'

export default function Me() {
  return (
    <div className="flex flex-col items-center justify-evenly">
      <div className='relative h-80 aspect-square'>
        <Image src='/profile.jpg' alt='Matthew-Snyder' fill className='object-cover object-top rounded-full'/>
      </div>
      <Contact />
    </div>
  )
}