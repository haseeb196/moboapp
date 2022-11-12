import React, { useState } from 'react'
import FeaturesBox from './FeaturesBox'

function Features() {
   const [text, setText] = useState('communitcation')
  return (
    <div className='flex flex-col items-center bg-[#faf6fb] py-[80px]'>
      <div className='mt-8'>
      <p className='uppercase text-gray-500 text-center'>Features</p>
      <h2 className='text-[40px] sm:text-[31px] text-[#633991]'>Do more with our app</h2>
      </div>
    <div className='flex flex-col mt-3 max-w-[1300px] rounded-3xl'>
     <div className='grid xl:grid-cols-4 md:grid md:grid-cols-3 sm:grid-cols-2'>
       <button onClick={() => setText('communitcation')} className='capitalize text-gray-500 xl:text-[19px] md:text-[17px] sm:text-[14px] font-medium bg-[#f5eff7] border border-[#faf6fb] active:bg-white focus:bg-white md:px-[50px] sm:px-[20px] py-[20px]  focus:border-t-[#cc74b3] focus:border-t-2 mb-0'>
       communitcation
       </button>
       <button onClick={() => setText('scheduling')} className='capitalize text-gray-500 xl:text-[19px] md:text-[17px] sm:text-[14px] font-medium bg-[#f5eff7] border border-[#faf6fb] active:bg-white focus:bg-white md:px-[50px] sm:px-[20px] py-[20px]  focus:border-t-[#cc74b3] focus:border-t-2 mb-0'>
       scheduling
       </button>
       <button onClick={() => setText('messages')} className='capitalize text-gray-500 xl:text-[19px] md:text-[17px] sm:text-[14px] font-medium bg-[#f5eff7] border border-[#faf6fb] active:bg-white focus:bg-white md:px-[50px] sm:px-[20px] py-[20px]  focus:border-t-[#cc74b3] focus:border-t-2 mb-0'>
       messages
       </button>
       <button onClick={() => setText('live_chat')} className='capitalize text-gray-500 xl:text-[19px] md:text-[17px] sm:text-[14px] font-medium bg-[#f5eff7] border border-[#faf6fb] active:bg-white focus:bg-white md:px-[50px] sm:px-[20px] py-[20px] md:col-start-1 md:col-end-4 xl:col-auto  focus:border-t-[#cc74b3] focus:border-t-2 mb-0'>
       live chat
       </button>
     </div> 
     <FeaturesBox name={text} />
     </div>
    </div>
  )
}

export default Features