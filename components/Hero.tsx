import React, { ReactElement } from 'react'
import Link from 'next/link'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import Circles from './Circles'

interface Props {
    
}

export default function Hero({}: Props): ReactElement {
    const [text,count]=useTypewriter({
        words:[
            "Hi, the name's Saif Ullah",
            "<Fullstack web developer/>",
            "<proficient in many languages and frameworks/>",
            "<possess strong problem solving skills/>"
        ],
        loop:true,
        delaySpeed:2000
    })
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <Circles/>
        <img className='relative rounded-full h-32 w-32 mx-auto object-cover' src="https://png.pngtree.com/png-clipart/20201009/ourlarge/pngtree-chibi-character-mask-hai-full-body-png-image_2359725.jpg" alt="" />
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Developer</h2>
            <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='#F7AB0A'/>
            </h1>
            <div className='pt-5'>
                <Link href="#about"><button className='heroButton'>About</button></Link>
                <Link href="#education"><button className='heroButton'>Education</button></Link>
                <Link href="#skills"><button className='heroButton'>Skills</button></Link>
                <Link href="#projects"><button className='heroButton'>Projects</button></Link>
                <Link href="https://docs.google.com/document/d/1k_MIxeXv1ZH0D1v1O3EpoZdBPhYC6MJ421w9SPV9syM/edit?usp=sharing"><button className='heroButton'>Resume</button></Link>
            </div>
        </div>
        </div>
    )
}
