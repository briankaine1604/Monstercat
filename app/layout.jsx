import Logo from '@components/logo/logo'
import Navbar from '@components/navbar/navbar'
import '@styles/global.css'


const Layout = ({children}) => {
  return (
    <div className='grid grid-cols-7'>

        <div className='border mx-auto mt-10'><Logo /></div>
        <div className='col-span-5 border mt-40'>{children}</div>
        <div className='border mx-auto mt-10'> <Navbar /></div>
        </div>
  )
}

export default Layout