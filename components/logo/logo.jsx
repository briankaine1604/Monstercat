import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <div className="w-10 h-10 fixed  mx-auto ">
       <Image
       fill={true}
       style={{objectFit:"cover"}}
       src="/images/ariawave.png"
       alt="logo"
       
       
       />
       </div>
  )
}

export default Logo