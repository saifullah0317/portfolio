import React, { ReactElement } from 'react'
import { motion } from 'framer-motion'

interface Props {
    
}

function Circles({}: Props): ReactElement {
    return (
        <motion.div initial={{
            opacity:0
        }} animate={{
            scale:[1,2,2,3,1],
            opacity:[0.1,0.2,0.4,0.0,0.1,1.0 ],
            borderRadius:["20%","20%","50%","80%","20%"],
        }} transition={{
            duration:2.5,
        }} className='relative flex justify-center items-center'>
            <div className='absolute border border-[#333333] rounded-full h-[200px] w-[200px] animate-ping mt-52'/>
            <div className='rounded-full border border-[#333333] h-[300px] w-[300px] absolute mt-52 animate-pulse'/>
            <div className='rounded-full border border-[#333333] h-[500px] w-[500px] absolute mt-52 animate-pulse'/>
            <div className='rounded-full border border-[#F7AB0A] opacity-20 lg:h-[650px] lg:w-[650px] h-[300px] w-[300px] absolute animate-pulse mt-52'/>
            <div className='rounded-full border border-[#333333] h-[800px] w-[800px] absolute mt-52 animate-pulse'/>
        </motion.div>
    )
}

export default Circles
