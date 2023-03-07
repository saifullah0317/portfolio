import Head from 'next/head'
import About from '@/components/About'
import Header from '@/components/Header'
import Education from '@/components/Education'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] h-screen text-white snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/40'>
      <Head>
        <title>Portfolio</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>
      </Head>
      <div>
        <Header/>
        <section id='hero' className='snap-start'>
          <Hero/>
        </section>
        <section id='about' className='snap-center'>
          <About/>
        </section>
        <section id="education" className='snap-center'>
          <Education/>
        </section>
        <section id='skills' className='snap-start'>
          <Skills/>
        </section>
        <section id='projects' className='snap-start'>
          <Projects/>
        </section>
        <section id='contact' className='snap-start'>
          <ContactMe/>
        </section>
      </div>
    </div>
  )
}
