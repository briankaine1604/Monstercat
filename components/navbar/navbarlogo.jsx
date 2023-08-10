import React from 'react'
import { FaTwitch,FaTwitter,FaTiktok,FaInstagram,FaDiscord,FaFacebook,FaInfinity} from 'react-icons/fa';
import {GiHamburgerMenu} from 'react-icons/gi'

const Navlogos = () => {
  return (
    <div className='text-white text-xl grid grid-rows-8 gap-5 fixed'>
        
        <GiHamburgerMenu className='mb-10'/>
        <FaTiktok/>
        <FaTwitter/>
        <FaInstagram/>
        <FaDiscord/>
        <FaFacebook/>
        <FaTwitch/>
        <FaInfinity/>
        
    </div>
  )
}

export default Navlogos