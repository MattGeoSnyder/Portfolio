'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Contact() {
  function newTabOnClick(url: string) {
    window.open(url, "_blank");
  }
  function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
  }
  function downloadFile(fileUrl: string) {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = "Matthew_Snyder_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  
  return (
    <div id='contact' className='w-full'>
      <h1 className='font-bold text-2xl mb-2'>My Links</h1>
      <div className='flex h-12 justify-evenly items-stretch'>
        <FontAwesomeIcon className='cursor-pointer h-full' icon={faGithub} onClick={() => { newTabOnClick('https://github.com/MattGeoSnyder') }}/>
        <FontAwesomeIcon className='cursor-pointer h-full' icon={faLinkedin} onClick={() => { newTabOnClick('https://linkedin.com/in/mattgeosnyder') }}/>
        <FontAwesomeIcon className='cursor-pointer h-full' icon={faPhone} onClick={() => { copyToClipboard('412-477-1776') }}/>
        <FontAwesomeIcon className='cursor-pointer h-full' icon={faEnvelope} onClick={() => { newTabOnClick('mailto:mattgeosnyder@gmail.com') }}/>
        <FontAwesomeIcon className='cursor-pointer h-full' icon={faFilePdf} onClick={() => downloadFile('/Matthew_Snyder_Resume.pdf') }/>
      </div>
    </div>
  )
}