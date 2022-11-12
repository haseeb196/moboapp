
import { Email, Facebook, HeadsetMic, Instagram, PlaceTwoTone, Twitter } from '@mui/icons-material'
import React from 'react'
import { useState } from 'react'
function Bottom() {
  const [face, setFace] = useState(false);
  const [twit, setTwit] = useState(false);
  const [insta, setInsta] = useState(false)
  return (
    <div>
    <div className='flex md:flex-row md:justify-around sm:flex-col sm:items-center py-12 bg-[#faf6fb] gap-3'>
   <div className='flex flex-col gap-2'>
     <div className='flex flex-row gap-2 text-[#959094] items-center'>
     <PlaceTwoTone htmlColor='#959094' fontSize='10'/><p> 1485 Pacific St, Brooklyn, NY 11216 USA</p>
     </div>
    <div className='flex md:flex-row sm:flex-col sm:items-center md:gap-4 sm:gap-2'>
     <div className='flex flex-row gap-2 justify-center items-center'><Email fontSize='6' htmlColor='#959094' /><a href="mailto:support@mobileapp.com" className='text-[#e38cb7] hover:underline'>support@mobileapp.com</a></div>
     <div className='flex flex-row gap-2 justify-center items-center'><HeadsetMic fontSize='6' htmlColor='#959094' /><a href="tel:518-3636-2800" className='text-[#e38cb7] hover:underline'>518-3636-2800</a></div>
    </div>
    </div>
    <div className='flex flex-row gap-4 items-center'>
    <button onMouseEnter={() => setFace(true)} onMouseLeave={() => setFace(false)} className='bg-white shadow-xl py-3 px-3 rounded-[5px] transition-all ease-in-out duration-[.04s] active:translate-y-1'>
   <Facebook htmlColor={face ? '#e38cb7' :'#f4c9e2'}/>
    </button>
    <button onMouseEnter={() => setTwit(true)} onMouseLeave={() => setTwit(false)} className='bg-white shadow-xl py-3 px-3 rounded-[5px] transition-all ease-in-out duration-[.04s] active:translate-y-1'>
    <Twitter htmlColor={twit ? '#e38cb7' :'#f4c9e2'}/>   
    </button>
    <button onMouseEnter={() => setInsta(true)} onMouseLeave={() => setInsta(false)}  className='bg-white shadow-xl py-3 px-3 rounded-[5px] transition-all ease-in-out duration-[.04s] active:translate-y-1'>
  <Instagram htmlColor={insta ? '#e38cb7' :'#f4c9e2'}/>
    </button>
    </div>
    </div>  
      <div className='flex flex-col items-center py-12 gap-2'>
      <div className='text-sm text-[#959094] uppercase font-normal'><p>COPYRIGHT © 2017. ALL RIGHTS RESERVED. </p></div>
      <div className='flex flex-row gap-3'>
      <button className='uppercase text-[#e38cb7] text-[13.5px] hover:underline'>
        press
      </button>
      <button className='uppercase text-[#e38cb7] text-[13.5px] hover:underline'>
     terms
      </button>
      <button className='uppercase text-[#e38cb7] text-[13.5px] hover:underline'>
        privacy
      </button>
      </div>
    </div>

    </div>
  )
}

export default Bottom