import React, { ReactElement } from "react";
import { motion } from "framer-motion";
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid'

interface Props {}

export default function About({}: Props): ReactElement {
  return (
    <>
    <h3 className='mb-40 lg:mb-0 relative top-24 text-center uppercase tracking-[20px] text-2xl text-gray-500'>About</h3>
    <motion.div initial={{
        opacity:0
    }} whileInView={{
        opacity:1
    }} transition={{
        duration:1.5
    }} className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
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
        }} src="https://png.pngtree.com/png-clipart/20201009/ourlarge/pngtree-chibi-character-mask-hai-full-body-png-image_2359725.jpg" className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[250px] xl:h-[300px]'/>
        <div className='space-y-10 px-0 md:px-10 mt-20 lg:mt-0'>
            <h4 className='text-4xl font-semibold'>
                Here is a{" "}<span className='underline decoration-[#F7AB0A]/50'>little</span>{" "}background
            </h4>
            <p className='text-base'>As an undergraduate student of Computer Science, specializing in full-stack web development, I possess the skills to develop dynamic and user-friendly web applications. With a comprehensive understanding of both front-end and back-end development, I am proficient in building web applications from start to finish. Furthermore, I have the capability to adapt my skills to develop desktop and mobile applications as well. With a passion for programming, I can bring a strong work ethic, attention to detail, and the ability to work collaboratively with others.
            </p>
        </div>
    </motion.div>
    </>
  );
}
