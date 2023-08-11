"use client"
import Image from "next/image"
import {CiPlay1} from  'react-icons/ci'
import {BsShare} from  'react-icons/bs'
import Section from "@components/section/section"

const Page = () => {
  return (
    <div className="flex flex-col ">
    <div className="grid grid-cols-2 didact-gothic">
       <div className="w-[400] h-[400]  relative mx-auto ">
       <Image
       fill={true}
       style={{objectFit:"cover"}}
       src="/images/offset.png"
       alt="album cover"
       loading="lazy"
       className="object-right"
       />
       </div>
       <div  className="w-10/12 h-[400] mx-auto flex flex-col justify-center">
        <div className="level gothic-a1 font-light tracking-widest text-5xl">MIXTAPE</div>
        <div className="text-white didact-gothic font-extrabold  text-3xl tracking-tight mb-10">OFFSET</div>
       
        <div className="w-full h-16 grid grid-cols-5 gap-3 gothic-a1 text-lg font-bold" >
          <button className="text-white bg-olivegreen col-span-3 flex items-center justify-center"><CiPlay1 className="mr-2"/>LISTEN </button> 
          <button className="border text-white border-white col-span-2 flex items-center justify-center"><BsShare className="mr-2"/>SHARE</button>
          </div>
       </div>
       
    </div>
    <Section/>
    </div>
  )
}

export default Page