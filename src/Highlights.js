import React  from 'react'
import {motion, useInView} from 'framer-motion'
import { useRef } from 'react'
import { useMediaQuery } from '@mui/material';


function Highlights() {
  const media = useMediaQuery('(max-width:902px)');
  const ref = useRef(null)
  const isview = useInView(ref, {once : true});

  return (
    
    <div ref={ref} className='flex flex-col justify-center items-center py-[80px] px-[5px] bg-[#faf6fb]'>
   <div>
   <p className='uppercase text-gray-500 pl-[136px]'>Highlights</p>
   <h2 className='text-[40px] text-[#633991]'>Features you love</h2>
   </div>
  {!media ?
  (
   <motion.div   initial={{opacity : 0, y:100}} animate={{y: isview ? 0 : 100, opacity: isview ?  1 : 0}} transition={{duration:1.2}} className='flex flex-row md:flex-row  xl:flex-row  sm:flex-col gap-6 mt-5'>
    <div className='flex flex-row gap-2 shadow-xl px-[11px]  py-[35px] hover:translate-y-[-9px] transition ease-out hover:scale-x-[1.01] scale-x-[1]'><img className='h-[60px] text-[#fc73b4]' src="https://img.icons8.com/glyph-neue/344/happy.png" alt="" /><div className='flex flex-col items-start justify-center'><h3 className='text-[20px] text-[#633991] m-1'>Simple</h3><p className='leading-6 text-[14px] text-[#959094] max-w-[300px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque</p></div></div>
   <div className='flex flex-row gap-2 shadow-xl px-[11px]  py-[35px] hover:translate-y-[-9px] transition ease-out hover:scale-x-[1.01] scale-x-[1]'><img className='h-[60px] text-[#fc73b4]' src="https://img.icons8.com/wired/344/gear.png" alt="" /><div className='flex flex-col items-start justify-center'><h3 className='text-[20px] text-[#633991] m-1'>Customize</h3><p className='leading-6 text-[14px] text-[#959094] max-w-[300px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque</p></div></div>
   <div className='flex flex-row gap-2 shadow-xl px-[11px] py-[35px] hover:translate-y-[-9px] transition ease-out hover:scale-x-[1.01] scale-x-[1]'><img className='h-[60px] text-[#fc73b4]' src="https://img.icons8.com/ios/344/lock--v1.png" alt="" /><div className='flex flex-col items-start justify-center'><h3 className='text-[20px] text-[#633991] m-1'>Secure</h3><p className='leading-6 text-[14px] text-[#959094] max-w-[300px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque</p></div></div>
   
   </motion.div> 
 ) : (
  <div   className='flex flex-row md:flex-row  xl:flex-row  sm:flex-col gap-6 mt-5'>
    <div className='flex flex-row gap-2 shadow-xl px-[11px]  py-[35px] hover:translate-y-[-9px] transition ease-out hover:scale-x-[1.01] scale-x-[1]'><img className='h-[60px] text-[#fc73b4]' src="https://img.icons8.com/glyph-neue/344/happy.png" alt="" /><div className='flex flex-col items-start justify-center'><h3 className='text-[20px] text-[#633991] m-1'>Simple</h3><p className='leading-6 text-[14px] text-[#959094] max-w-[300px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque</p></div></div>
   <div className='flex flex-row gap-2 shadow-xl px-[11px]  py-[35px] hover:translate-y-[-9px] transition ease-out hover:scale-x-[1.01] scale-x-[1]'><img className='h-[60px] text-[#fc73b4]' src="https://img.icons8.com/wired/344/gear.png" alt="" /><div className='flex flex-col items-start justify-center'><h3 className='text-[20px] text-[#633991] m-1'>Customize</h3><p className='leading-6 text-[14px] text-[#959094] max-w-[300px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque</p></div></div>
   <div className='flex flex-row gap-2 shadow-xl px-[11px] py-[35px] hover:translate-y-[-9px] transition ease-out hover:scale-x-[1.01] scale-x-[1]'><img className='h-[60px] text-[#fc73b4]' src="https://img.icons8.com/ios/344/lock--v1.png" alt="" /><div className='flex flex-col items-start justify-center'><h3 className='text-[20px] text-[#633991] m-1'>Secure</h3><p className='leading-6 text-[14px] text-[#959094] max-w-[300px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque</p></div></div>
   
   </div> 
 ) }
    </div>
   
  )
}

export default Highlights