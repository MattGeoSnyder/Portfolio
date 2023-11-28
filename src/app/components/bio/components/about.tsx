import Next from '@/app/components/icons/next';
import IconWrapper from '../../icons/iconWrapper';
import  IconBar from '@/app/components/icons/iconBar';
import HTML from '@/app/components/icons/html';
import CSS from '@/app/components/icons/css';
import Tailwind from '@/app/components/icons/tailwind';
import React from '@/app/components/icons/react';
import Redux from '@/app/components/icons/redux';

export default function About() {
  return (
    <div className="w-full">
      <h1>About Me</h1>
      <div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, at consequuntur! Sapiente eveniet expedita esse soluta maiores dolore ipsam vel iure neque totam, est consequatur, officia quod. Aspernatur, expedita nostrum.
        </p>
      </div>
      <IconBar title='Front End'>    
        <IconWrapper title='HTML 5'>
          <HTML />
        </IconWrapper>
        <IconWrapper title='CSS'>
          <CSS />
        </IconWrapper>
        <IconWrapper title='React.js'>
          <React />
        </IconWrapper>
        <IconWrapper title='Redux.js'>
          <Redux />
        </IconWrapper>
        <IconWrapper title='Tailwind'>
          <Tailwind />
        </IconWrapper>
      </IconBar>
    </div>
  )
}