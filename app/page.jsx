
import Image from "next/image"

const Page = () => {
  return (
    
    <div className="grid grid-cols-2">
       <div className="w-11/12 h-[400] border border-blue-700 relative  mx-auto">
       <Image
       fill={true}
       style={{objectFit:"cover"}}
       src="/images/offset.jpg"
       alt="album cover"
       loading="lazy"
       className="object-right"
       />
       </div>
       <div  className="w-full border border-blue-700 flex flex-col">
        <div>WITHOUT WARNING</div>
        <div>OFFSET</div>
       
        <div ><button className="btn_design">LISTEN</button> <button>SHARE</button></div>
       </div>
    </div>
  )
}

export default Page