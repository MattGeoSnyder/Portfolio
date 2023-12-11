'use client'
import { useState } from 'react';

import api from '@/app/components/icons/api';
import css from '@/app/components/icons/css';
import express from '@/app/components/icons/express';
import flask from '@/app/components/icons/flask';
import git from '@/app/components/icons/git';
import github from '@/app/components/icons/github';
import html from '@/app/components/icons/html';
import next from '@/app/components/icons/next';
import node from '@/app/components/icons/node';
import postgres from '@/app/components/icons/postgres';
import python from '@/app/components/icons/python';
import react from '@/app/components/icons/react';
import redux from '@/app/components/icons/redux';
import tailwind from '@/app/components/icons/tailwind';

export default function IconWrapper({ logo, title, className, children }: { logo?: string;title: string; className?: string; children: string | JSX.Element | JSX.Element[]; }) {
  function renderIcon(logo?: string) {
    switch (logo) {
      case 'api':
        return ( api() ); 
      case 'css':
        return ( css() );
      case 'express':
        return ( express() );
      case 'flask':
        return ( flask() );
      case 'git':
        return ( git() );
      case 'github': 
        return ( github() );
      case 'html':
        return ( html() );
      case 'next':
        return ( next() );
      case 'node':
        return ( node() );
      case 'postgres':
        return ( postgres() );
      case 'python':
        return ( python() );
      case 'react':
        return ( react() );
      case 'redux':
        return ( redux() );
      case 'tailwind':
        return ( tailwind() );
      default: 
        return children;
    }
  }
    const [hoverState, setHoverState] = useState<Boolean>(false);
  return (

    <div 
      className={`flex flex-col ${className ?? ''} h-full aspect-square relative hover:bottom-3 hover:h-[150%] transition-all duration-300`}
      onMouseOver={() => { setHoverState(true) }}
      onMouseLeave={() => { setHoverState(false) }}
    >
      <div className="flex justify-center flex-1">
        {renderIcon(logo)}   
      </div>    
      { hoverState && <p className="text-center">{title}</p> } 
    </div>
  )
}