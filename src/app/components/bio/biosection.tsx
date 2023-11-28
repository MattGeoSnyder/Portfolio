import About from './components/about'
import Me from './components/me'

export default function BioPage() {
  return (
    <section id='bio-page' className="w-full h-full grid lg:grid-cols-2 py-5">
      <Me /> 
      <About></About>      
    </section>
  )
}