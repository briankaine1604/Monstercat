import Link from 'next/link'
import React from 'react'
import { FaTwitch,FaTwitter,FaTiktok,FaInstagram,FaDiscord,FaFacebook,FaHeadphones} from 'react-icons/fa';
import {AiOutlineCopyrightCircle} from 'react-icons/ai'
import {BsSpotify,BsYoutube} from 'react-icons/bs'
import {SiAudiomack,SiSoundcloud,SiApplemusic} from 'react-icons/si'


const Footer = () => {
  return (
    <footer className='my-28'>
        <div className='grid grid-cols-3 gap-8 border-y border-gray-400 didact-gothic py-10'>
            <div className='flex flex-col uppercase text-xl'>
                <Link href='#'>ABOUT INFINITY STUDIO</Link>
                <Link href='#'>CONTACT US</Link>
                <Link href='#'>CAREER</Link>
                <Link href='#'>NEWS</Link>
                <Link href='#'>PRESS</Link>
            </div>
            <div className='flex flex-col uppercase text-xl'>
                <Link href="#">TERMS OF SERVICE</Link>
                <Link href="#">PRIVACY POLICY</Link>
            </div>
            <div className=' text-gray-400'>
                <span className='uppercase text-xl'>MONSTER CAT NEWS</span>
                <div>Do not miss a thing stay up to date</div>
                <span><form action="input" placeholder='Enter email'></form></span>
            </div>
        </div>
        <div className='flex justify-between mt-5'>
            <span className='flex items-center'>2023 <AiOutlineCopyrightCircle className='mx-2'/> Aria wave, All rights Reserved</span>
            <span className='grid grid-cols-12 gap-5 text-xl'>
            <FaTiktok/>
            <FaTwitter/>
            <FaInstagram/>
            <FaDiscord/>
            <FaFacebook/>
            <FaTwitch/>
            <BsYoutube/>
            <BsSpotify/>
            <SiApplemusic/>
            <SiSoundcloud/>
            <SiAudiomack/>
            <FaHeadphones/>
            </span>
        </div>
        <div className='text-xs justify-center text-center text-gray-400 mt-20 '>
            <p>We humbly recognize and express our gratitude for the traditional, ancestral, 
            and unceded lands of the Coast Salish peoples. 
            It is upon this cherished land that the foundation of Aria Wave's Vancouver headquarters proudly resides.</p>
            <p>These lands are home to diverse cultures and communities, and they provide the backdrop for the lives and work of our LA team, 
            who are dedicated to the mission of Aria Wave.</p>
            </div>
    </footer>
  )
}

export default Footer