import Next from '@/app/components/icons/next';
import IconWrapper from '../../icons/iconWrapper';
import  IconBar from '@/app/components/icons/iconBar';
import HTML from '@/app/components/icons/html';
import CSS from '@/app/components/icons/css';
import Tailwind from '@/app/components/icons/tailwind';
import React from '@/app/components/icons/react';
import Redux from '@/app/components/icons/redux';
import Node from '@/app/components/icons/node';
import Postgres from '@/app/components/icons/postgres';
import Python from '@/app/components/icons/python';
import Flask from '@/app/components/icons/flask';
import Express from '@/app/components/icons/express';
import Git from '../../icons/git';
import GitHub from '../../icons/github';
import API from '@/app/components/icons/express'

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
        <IconWrapper title='Flask'>
          <Flask />
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
      <IconBar title='Back End'>    
        <IconWrapper title='Node.js'>
          <Node />
        </IconWrapper>
        <IconWrapper title='PostgreSQL'>
          <Postgres />
        </IconWrapper>
        <IconWrapper title='Python'>
          <Python />
        </IconWrapper>
        <IconWrapper title='Express.js'>
          <Express />
        </IconWrapper>
      </IconBar>
      <IconBar title='Other'>    
        <IconWrapper title='Next.js'>
          <Next />
        </IconWrapper>
        <IconWrapper title='Git'>
          <Git />
        </IconWrapper>
        <IconWrapper title='GitHub'>
          <GitHub />
        </IconWrapper>
        <IconWrapper title='REST APIs'>
          <API />
        </IconWrapper>
      </IconBar>
    </div>
  )
}