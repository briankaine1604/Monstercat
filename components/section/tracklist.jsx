"use client"
import {CiPlay1} from  'react-icons/ci'
import {BsShare} from  'react-icons/bs'

const Tracklist = () => {

    const tracks =[
        {id:'1',songname:'Walk it Like',artist:'Offset',timestamp:'3:23'},
        {id:'2',songname:'Amigo',artist:'Offset',timestamp:'2:50'},
        {id:'3',songname:'Stir fry',artist:'Offset',timestamp:'3:00'},
        {id:'4',songname:'Jelousy',artist:'Offset & Cardi B',timestamp:'3:13'},
        {id:'5',songname:'Road rage',artist:'Offset',timestamp:'2:23'},
        {id:'6',songname:'Domina', artist:'Offset',timestamp:'2:53'},
    ]

  return (
    <div className=''>
        <div className='text-5xl font-semibold tracking-widest didact-gothic my-6'>TRACK LIST</div>
        <div className='flex-col gap'>{tracks.map(({id,songname,artist,timestamp})=>(
            <div key={id}>
                <div  className='grid grid-cols-12 gap-4 my-5'>
                    <div className='col-span-1 flex items-center'>{id}</div>
                    <div className='col-span-1 flex items-center justify-start text-xl'><CiPlay1/></div>
                    <div className='col-span-8 flex flex-col items-start '><span className='text-xl font-semibold'>{songname}</span><span className=' text-sm'>{artist}</span></div>
                    <div className='col-span-1 flex items-center justify-center'>{timestamp}</div>
                    <div className='col-span-1 flex items-center text-xl'><BsShare/></div>
                </div>
            </div>
        ))}</div>
    </div>
  )
}

export default Tracklist