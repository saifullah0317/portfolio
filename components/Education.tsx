import React, { ReactElement } from 'react'
import { motion } from 'framer-motion'

interface Props {
    
}

export default function Education({}: Props): ReactElement {
    return (
        <>
        <h3 className='relative top-24 text-center uppercase tracking-[20px] text-2xl text-gray-500'>Education</h3>
        <motion.div initial={{
            opacity:0
        }} whileInView={{
            opacity:1
        }} transition={{
            duration:1.5
        }} className='mt-20 lg:mt-0 flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <motion.img initial={{
                x:-200,
                opacity:0
            }} transition={{
                duration:1.2
            }} whileInView={{
                opacity:1,
                x:0,
            }} viewport={{
                once:true
            }} src="https://i0.wp.com/academiamag.com/wp-content/uploads/2021/06/uet-lkaxclasxc-a.jpg?fit=1920%2C1280&ssl=1" className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[250px] xl:h-[300px]'/>
            <div className='space-y-10 px-0 md:px-10 mt-20 lg:mt-0'>
                <h4 className='text-4xl font-semibold underline decoration-[#F7AB0A]/50'>
                    Undergraduate
                </h4>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>2020-2024</h2>
                <p className='text-base ml-5 lg:ml-0 md:ml-0'>
                    <i>University of Engineering and Technology, Lahore, Pakistan.</i> <br />
                    <a href="https://en.wikipedia.org/wiki/University_of_Engineering_and_Technology,_Lahore"><span style={{color:'#F7AB0A'}}>https://en.wikipedia.org/wiki/University_of_Engineering_and_Technology,_Lahore</span></a>
                </p>
                <span></span>

            </div>
        </motion.div>
        </>
    )
}
