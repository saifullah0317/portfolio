import React, { ReactElement } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface Props {
    
}

export default function Projects({}: Props): ReactElement {
    const projects=[{
        subject:'Email Cryptography',
        des:'This system is a secure way to send and receive emails, protecting sensitive information from being intercepted by unauthorized parties. Using public key cryptography, the email is encrypted before sending, and only the intended recipient with the corresponding private key can decrypt and read the message.',
        link:'https://github.com/saifullah0317/MessageCryptography'
    },{
        subject:'Fund-raiser Decentralised App',
        des:'A blockchain-based decentralised app that can be used for fund raising enabled by a smart contract. Users can create their own campaign or donate to others from their wallet (like metamask).',
        link:'https://github.com/saifullah0317/FundRaiserDapp'
    },{
        subject:'Booking App',
        des:'This is a simple hotel rooms booking app with both the stakeholders hotel managers and customers',
        link:'https://github.com/saifullah0317/bookingapp.github.io'
    },{
        subject:'News App',
        des:'An app made to display news about anything the user wants. Searched news are fetched using fechNews API. All kind of updates can be shown like weather, sports, based on any area, country.',
        link:'https://github.com/saifullah0317/newsapp.github.io'
    },{
        subject:'University CLO based Evaluation System',
        des:"In universities commonly CLO based learning and CLO based evaluation is made for the courses offered. It's a desktop app that automates the CLO based evaluation system in which students can be evaluated using CLO attainment level they achieved.",
        link:'https://gitlab.com/saifullah0317/db2020-cs-102'
    },{
        subject:'Rescue Reservation System',
        des:"It's a desktop application that can be used in a typical rescue center for managing ambulances calls, departures, recieving and all the needed information. Based on that information different calculations can also be made like estimation of fast services.",
        link:' https://gitlab.com/saifullah0317/DSA2021G17'
    },{
        subject:'Vehicle Bite',
        des:'An application that scrapes information of about one million cars from different internet webs and that information is efficiently used to suggest vehicles to our customers based on their priorities. Handling of such a large data is made optimized by using different data structures and algorithms optimizingly.',
        link:'https://github.com/saifullah0317/FundRaiserDapp'
    },{
        subject:'NPM package: Number to Words',
        des:'A simple program that converts any number is converted to English words upto unlimited. This functionality is published on NPM and th main purpose is to provide this functionality to the users (developers) so that it can be used in their code.',
        link:'https://www.npmjs.com/package/number-to-english-words'
    }]
    return (
        <motion.div initial={{
            opacity:0
        }} whileInView={{
            opacity:1
        }} transition={{
            duration:1.5 
        }} className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Projects
            </h3>       
            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/40'>
                {projects.map((project)=>(
                    <>
                    
                    <div className='mt-16 lg:mt-20 w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                        {/* <img src="../public/projects/crypt.png" alt="" /> */}
                        {/* <Image src={crypt} alt='/'/> */}
                        <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                            <h4 className='text-4xl font-semibold text-center underline decoration-[#F7AB0A]/50'>
                                {project.subject}
                            </h4>
                            <p className='text-lg text-center md:text-left'>
                            {project.des}
                            </p>
                            <p className='text-lg text-center md:text-left'>
                            Link to the project:&emsp;
                                <i>
                                    <Link href={project.link}>{project.link}</Link>
                                </i>
                            </p>
                        </div>
                    </div>
                    </>
                ))}
            </div>     
            <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12' />
        </motion.div>
    )
}
