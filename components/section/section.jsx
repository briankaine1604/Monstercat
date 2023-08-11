"use client"
import {BsSpotify,BsYoutube} from 'react-icons/bs'
import {SiAudiomack,SiSoundcloud,SiApplemusic} from 'react-icons/si'
import Tracklist from './tracklist'
import OtherReleases from './others'
import Footer from './footer'

const Section = () => {
  return (
    <div className=' text-white text-justify flex-col '>
      <div className='text-5xl font-semibold tracking-widest'>STREAM IT YOUR WAY</div>
      <div className='w-1/2 grid grid-cols-5 text-xl border-white justify-center pt-2 mt-4 mb-8'>
        <div className='sectionstyle'><BsSpotify className=''/></div>
        <div className='sectionstyle'><BsYoutube/></div>
        <div className='sectionstyle'><SiAudiomack/></div>
        <div className='sectionstyle'><SiSoundcloud/></div>
        <div className='sectionstyle'><SiApplemusic/></div>
      </div>
      <Tracklist/>
      <OtherReleases/>
      <Footer/>
    </div>
  )
}

export default Section