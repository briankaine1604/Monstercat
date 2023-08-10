import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <div className="w-14 h-14 fixed  mx-auto ">
       <Image
       fill={true}
       style={{objectFit:"cover"}}
       src="/images/labs3.png"
       alt="logo"
       
       
       />
       </div>
  )
}

export default Logo