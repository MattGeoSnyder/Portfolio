import Image from 'next/image'
import Nav from './components/navbar/nav'
import BioPage from './components/bio/biosection'
import Hero from '@/app/components/hero/hero'
import { Projects } from './components/projects/projects'

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <BioPage />
    </>
  )
}
