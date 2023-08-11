import Link from 'next/link'
import React from 'react'


const Footer = () => {
  return (
    <footer>
        <div className='grid grid-cols-3 gap-8 border mt-8'>
            <div className='border flex flex-col'>
                <Link href='#'>ABOUT INFINITY STUDIO</Link>
                <Link href='#'>CONTACT US</Link>
                <Link href='#'>CAREER</Link>
                <Link href='#'>NEWS</Link>
                <Link href='#'>PRESS</Link>
            </div>
            <div className='border flex flex-col'>
                <Link href="#">TERMS OF SERVICE</Link>
                <Link href="#">PRIVACY POLICY</Link>
            </div>
            <div className='border'>
                <span>MONSTER CAT NEWS</span>
                <div>Do not miss a thing stay up to date</div>
                <span><form action="input" placeholder='Enter email'></form></span>
            </div>
        </div>
        <div></div>
        <div></div>
    </footer>
  )
}

export default Footer