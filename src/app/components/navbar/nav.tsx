import logo from '../../../../public/MGSLogo.svg';
import Contact from '@/app/components/bio/components/contact';

export default function Nav() {
  return (
    <div id='navbar' className='w-full h-24 p-5 flex justify-between'>
      <img src={`${logo.src}`} className='h-12'/>
    <div className='flex justify-evenly lg:w-1/2 items-end'>
        <a href=''>Projects</a>
        <a href=''>Skills</a>
        <a href=''>Contact</a>
      </div>
      <Contact />
    </div>      
  )
}