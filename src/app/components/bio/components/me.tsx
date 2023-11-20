import Contact from './contact'
import Image from 'next/image'

export default function Me() {
  return (
    <div className="flex flex-col items-center">
      <Image src='/profile.jpg' alt='Matthew-Snyder' width={500} height={500}/>
      <Contact />
    </div>
  )
}