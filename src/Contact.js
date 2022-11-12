import { Button } from '@mui/material'
import React from 'react'
import Bottom from './Bottom'
function Contact() {
  return (
   
    <div>
      <div className='flex flex-col gap-4 items-center bg-gradient-to-r from-[#3c0876cc] to-[#fa0076cc] py-[80px]'>
         <div className='flex flex-col items-center gap-2'>
            <img className='max-w-[80px] p-[10px]  rounded-[5px] scale-[0.85] shadow-xl border bg-white' src="https://www.lifepng.com/wp-content/uploads/2020/11/Smartphone-Icon-png-hd.png" alt="phone" />
            <h1 className='text-white md:text-[45px] sm:text-[35px] capitalize font-light '>download anywhere</h1>
         </div>
         <div className='text-center mt-3 mb-6'>
         <p className='max-w-[650px] text-[#ffb8f6] text-[16px] font-normal'>Available for all major mobile and desktop platforms. Rapidiously visualize optimal ROI rather than enterprise-wide methods of empowerment.</p>
         </div>
         <div className='flex flex-row gap-4 mb-6 md:flex-wrap'>
         <Button className='flex flex-row items-center  gap-2 shadow-2xl' style={{backgroundColor : 'white', padding : '0.6rem 0.96rem'}}>
          <img className='mb-1' src="https://preview.colorlib.com/theme/mobapp/images/appleicon.png" alt="" />
         <span className='text-[#633991] sm:text-[12px] md:text-[14px]'>app store</span>
         </Button>
         <Button className='flex flex-row items-center  gap-2 shadow-2xl' style={{backgroundColor : 'white', padding : '0.6rem 0.96rem'}}>
          <img src="https://preview.colorlib.com/theme/mobapp/images/playicon.png" alt="" />
         <span className='text-[#633991] sm:text-[12px] md:text-[14px]'>google play</span>
         </Button>
         </div>
         <div className='mb-2 italic font-normal text-sm text-[#e38cb7]'><i>*Works on iOS 10.0.5+, Android Kitkat and above.</i></div>
      </div>
      <Bottom />
    </div>
   
  )
}

export default Contact