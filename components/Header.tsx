import React, { ReactElement } from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion"

interface Props {
    
}

export default function Header({}: Props): ReactElement {
    return (
        <header className='sticky top-0 p-5 flex justify-between max-w-7xl mx-auto'>
            <motion.div initial={{x:-500,opacity:0,scale:0.5}} animate={{x:0,opacity:1,scale:1}} transition={{duration:1.5}} className='flex flex-row items-center'>
                <SocialIcon fgColor='grey' bgColor='transparent' url="https://twitter.com/SaifUll74373340" />
                <SocialIcon fgColor='grey' bgColor='transparent' url="https://www.facebook.com/SaifUllah03024" />
                <SocialIcon fgColor='grey' bgColor='transparent' url="https://www.youtube.com/channel/UCXkvj-EylF5Q_1MvBt9DoYA" />
                <SocialIcon fgColor='grey' bgColor='transparent' url="https://github.com/saifullah0317" />
                <SocialIcon fgColor='grey' bgColor='transparent' url="https://gitlab.com/saifullah0317" />
            </motion.div>
            <motion.div initial={{x:500,opacity:0,scale:0.5}} animate={{x:0,opacity:1,scale:1}} transition={{duration:1.5}} className='flex flex-row items-center'>
                <SocialIcon className='cursor-pointer' network='email' fgColor='grey' bgColor='transparent' url='#contact'/>
            </motion.div>
        </header>
    )
}
