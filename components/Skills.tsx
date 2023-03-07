import React, { ReactElement } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'


import Html1 from '../public/logos/Html.svg'
import Css1 from '../public/logos/Css.svg'
import Js from '../public/logos/Javascript.svg'
import Ts from '../public/logos/Typescript.svg'
import React1 from '../public/logos/React.svg'
import Next1 from '../public/logos/Nextjs.svg'
import Material from '../public/logos/Materialui.svg'
import Tailwind from '../public/logos/Tailwindcss.svg'
import Express1 from '../public/logos/Express.svg'
import Node from '../public/logos/Nodejs.svg'
import Csharp from '../public/logos/Csharp.svg'
import dotnet from '../public/logos/Dotnetcore.svg'
import git1 from '../public/logos/Git.svg'
import github from '../public/logos/Github.svg'
import gitlab from '../public/logos/Gitlab.svg'
import latex from '../public/logos/Latex.svg'
import mongodb from '../public/logos/Mongodb.svg'
import mysql from '../public/logos/Mysql.svg'
import numpy from '../public/logos/Numpy.svg'
import pandas from '../public/logos/Pandas.svg'
import python from '../public/logos/Python.svg'
import php from '../public/logos/Php.svg'
import laravel from '../public/logos/Laravel.svg'

interface Props {
    
}

export default function Skills({}: Props): ReactElement {
    return (
        <motion.div initial={{
            opacity:0
        }} whileInView={{
            opacity:1
        }} transition={{
            duration:1.5
        }} className='flex relative flex-col text-center md:text-left xl:flex-row max-w-2000px xl:px-10 min-h-screen h-[1100px] lg:h-[700px] justify-center xl:space-y-0 mx-auto items-center'>


            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>
                
            <div className='grid grid-cols-3 lg:grid-cols-7 gap-5 mx-5'>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src={Html1} alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>HTML</h3>
                </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src={Css1} alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>CSS</h3>
                </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src={Js} alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>JavaScript</h3>
                </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src={React1} alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>React</h3>
                </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src={Next1} alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>Next.js</h3>
                </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src={Material} alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>Material UI</h3>
                </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src={Tailwind} alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>Tailwind CSS</h3>
                </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src={Node} alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>Node.js</h3>
                </div>
                </div>
            </div><div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src={Express1} alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>Express.js</h3>
                </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src={php} alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>PHP</h3>
                </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src={laravel} alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>Laravel</h3>
                </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src={mongodb} alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>MongoDB</h3>
                </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src={mysql} alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>MySQL</h3>
                </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src={Csharp} alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>c#</h3>
                </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src={dotnet} alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>.NET Core</h3>
                </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src={python} alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>Python</h3>
                </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src={pandas} alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>Pandas</h3>
                </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src={numpy} alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>NumPy</h3>
                </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src={git1} alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>Git</h3>
                </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src={github} alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>Github</h3>
                </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src={gitlab} alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>Gitlab</h3>
                </div>
                </div>
            </div>
            </div>
        </motion.div>
    )
}
