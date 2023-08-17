"use client"
import {BsSpotify,BsYoutube} from 'react-icons/bs'
import {SiAudiomack,SiSoundcloud,SiApplemusic} from 'react-icons/si'
import Tracklist from './tracklist'
import OtherReleases from './others'
import Footer from './footer'
import Link from 'next/link';

const Section = () => {
  return (
    <div className=' text-white text-justify flex-col '>
      <div className='text-5xl font-semibold tracking-widest'>STREAM IT YOUR WAY</div>
      <div className='w-1/2 grid grid-cols-5 text-xl border-white justify-center pt-2 mt-4 mb-8'>
        <div className='sectionstyle'><Link href="#"><BsSpotify className='icon-effect'/></Link></div>
        <div className='sectionstyle'><Link href="#"><BsYoutube className='icon-effect'/></Link></div>
        <div className='sectionstyle'><Link href="#"><SiAudiomack className='icon-effect'/></Link></div>
        <div className='sectionstyle'><Link href="#"><SiSoundcloud className='icon-effect'/></Link></div>
        <div className='sectionstyle'><Link href="#"><SiApplemusic className='icon-effect'/></Link></div>
      </div>
      <Tracklist/>
      <OtherReleases/>
      <Footer/>
    </div>
  )
}

export default Section