import {BsSpotify,BsYoutube} from 'react-icons/bs'
import {SiAudiomack,SiSoundcloud,SiApplemusic} from 'react-icons/si'

const Section = () => {
  return (
    <div className='text-5xl font-semibold tracking-widest text-white border text-justify flex-col'>
      <div>STREAM IT YOUR WAY</div>
      <div className='w-1/2 grid grid-cols-5 text-3xl border border-white justify-center'>
        <BsSpotify className=''/>
        <BsYoutube/>
        <SiAudiomack/>
        <SiSoundcloud/>
        <SiApplemusic/>
      </div>
    </div>
  )
}

export default Section