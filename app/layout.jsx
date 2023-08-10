import Logo from '@components/logo/logo'
import Navbar from '@components/navbar/navbar'
import '@styles/global.css'
import Image from "next/image"


const Layout = ({children}) => {
  
  return (
    <div>
    <div className='fixed w-full h-screen z-0 '>
      <Image
       fill={true}
       style={{objectFit:"cover"}}
       src="/images/offset.png"
       alt="album cover"
       loading="lazy"
       className="object-right blur "
       />
       <div className="dark-overlay"></div>
       </div>
       <div className='z-10  grid grid-cols-7 relative w-full h-screen'>
       <div className='mx-auto mt-10'><Logo /></div>
        <div className='col-span-5 mt-48 border'>{children}</div>
        <div className='mx-auto mt-10 '> <Navbar /></div>
       </div>
        
        
        </div>
  )
}

export default Layout