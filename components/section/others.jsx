import Image from 'next/image'
import React from 'react'


const OtherReleases = () => {

    const othermusic= [
        {id:1,albumname:'St. Jhn Mix', artist:'St. Jhn', albumcover:'sntjhn.jpg'},
        {id:2,albumname:'Lil wayne Mix', artist:'Lil wayne', albumcover:'lilwayne.jpg'},
        {id:3,albumname:'J Cole Mix', artist:'J cole', albumcover:'jcole.jpg'},
        {id:4,albumname:'Kendrick Mix', artist:'Kendrick Lamar', albumcover:'kendrick.jpg'},
        {id:5,albumname:'Migos Mix', artist:'Migos', albumcover:'migos.jpg'},
    ]

  return (
    <div>
        <div className='text-5xl font-semibold tracking-widest didact-gothic my-6'>OTHER RELEASES JUST LIKE THIS</div>
        <div className='grid grid-cols-5 gap-10 items-center '>
            {othermusic.map(({id,albumcover,artist,albumname})=>(
                <div key={id} className='flex flex-col item-center'>
                    <div className='w-full min-w-32 h-32 relative '>
                        <Image
                        fill={true}
                        style={{objectFit:"cover"}}
                        src={`/images/${albumcover}`}
                        alt="album cover"
                        />
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-md font-semibold'>{albumname}</span>
                        <span className='text-sm'>{artist}</span>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default OtherReleases