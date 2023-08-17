"use client"
import Link from 'next/link';

import { FaTwitch,FaTwitter,FaTiktok,FaInstagram,FaDiscord,FaFacebook,FaHeadphones} from 'react-icons/fa';
import Navbarburger from './navbarburger';



const Navlogos = () => {


  
  return (
    <div className='text-white text-xl grid grid-rows-8 gap-5 fixed'>
        
        <Navbarburger/>
        <Link href="#"><FaTiktok className='icon-effect'/></Link>
        <Link href="#"><FaTwitter className='icon-effect'/></Link>
        <Link href="#"><FaInstagram className='icon-effect'/></Link>
        <Link href="#"><FaDiscord className='icon-effect'/></Link>
        <Link href="#"><FaFacebook className='icon-effect'/></Link>
        <Link href="#"><FaTwitch className='icon-effect'/></Link>
        <Link href="#"><FaHeadphones className='icon-effect'/></Link>
        
    </div>
  )
}

export default Navlogos