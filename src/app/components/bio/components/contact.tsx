import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Contact() {
  return (
    <div id='contact' className='w-full'>
      <h1>My Links</h1>
      <div className='flex h-12 justify-evenly'>
        <FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon icon={faLinkedin} />
        <FontAwesomeIcon icon={faPhone} />
        <FontAwesomeIcon icon={faEnvelope} />
        <FontAwesomeIcon icon={faFilePdf} />
      </div>
    </div>
  )
}