import Image from 'next/image'
import React from 'react'


const OtherReleases = () => {

    const othermusic= [
        {id:1,albumname:'St. Jhn Mix',albumcover:'sntjhn.jpg'},
        {id:2,albumname:'Lil wayne Mix', albumcover:'lilwayne.jpg'},
        {id:3,albumname:'J Cole Mix',  albumcover:'jcole.jpg'},
        {id:4,albumname:'Kendrick Mix',  albumcover:'kendrick.jpg'},
        {id:5,albumname:'Migos Mix',  albumcover:'migos.jpg'},
        {id:6,albumname:'Rick ross Mix', albumcover:'rickross.jpg'},
    ]

  return (
    <div>
        <div className='text-5xl font-semibold tracking-widest didact-gothic my-6 '>OTHER RELEASES JUST LIKE THIS</div>
        <div className='grid grid-cols-6 gap-2 items-center didact-gothic uppercase'>
            {othermusic.map(({id,albumcover,albumname})=>(
                <div key={id} className='flex flex-col item-center'>
                    <div className='w-36 min-w-36 h-32 relative '>
                        <Image
                        fill={true}
                        style={{objectFit:"cover"}}
                        src={`/images/${albumcover}`}
                        alt="album cover"
                        />
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-md font-semibold'>{albumname}</span>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default OtherReleases