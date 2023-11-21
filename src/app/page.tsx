import Image from 'next/image'
import Nav from './components/navbar/nav'
import BioPage from './components/bio/biosection'

export default function Home() {
  return (
    <div className='flex flex-col bg-indigo-400 w-full h-full'>
      <Nav />
      <div className='flex-col grow p-5'>
        <BioPage />
      </div>
    </div>
  )
}
