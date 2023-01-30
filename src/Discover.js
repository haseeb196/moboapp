import React, { useRef } from 'react'
import {motion, useInView} from 'framer-motion'
import { useMediaQuery } from '@mui/material';
function Discover() {
  const media = useMediaQuery('(max-width:902px)'); 
  const ref = useRef(null);
  const view = useInView(ref,{once: true});
  return (
   <div  className='pt-[70px] pb-[70px]'>
    <div className='flex flex-col items-start justify-start  sm:mx-[40px] md:mx-[74.5px] px-[15px]'>
     {!media ? (<motion.div initial={{x: 400, opacity : 0}} animate={{x: view ? 0 : 400, opacity: view ? 1 : 0}} transition={{duration: 1.1}} className='flex flex-wrap  flex-col items-start md:ml-[0%] xl:ml-[50%] px-6 sm:mb-[20px] md:mb-[150px]'>
      <img className='h-[80px]' src="https://img.icons8.com/ios/344/iphone.png" alt="" />
      <h2 className='sm:text-[30px] text-[#633991] md:text-[45px]'>Discover our App</h2>
      <p  className='text-[#959094] text-[16.5px] xl:max-w-[380px] leading-6 mb-6 font-semibold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati vel exercitationem eveniet vero maxime ratione</p>
      <button ref={ref} className='capitalize bg-gradient-to-r from-[#e54595] to-[#fd378e] py-[8px] px-[15px] rounded-[4px] text-white active:translate-y-[0.8px] shadow'>read more</button>
      </motion.div>) : (
        <div  className='flex flex-wrap  flex-col items-start md:ml-[0%] xl:ml-[50%] px-6 sm:mb-[20px] md:mb-[150px]'>
      <img className='h-[80px]' src="https://img.icons8.com/ios/344/iphone.png" alt="" />
      <h2 className='sm:text-[30px] text-[#633991] md:text-[45px]'>Discover our App</h2>
      <p  className='text-[#959094] text-[16.5px] xl:max-w-[380px] leading-6 mb-6 font-semibold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati vel exercitationem eveniet vero maxime ratione</p>
      <button ref={ref} className='capitalize bg-gradient-to-r from-[#e54595] to-[#fd378e] py-[8px] px-[15px] rounded-[4px] text-white active:translate-y-[0.8px] shadow'>read more</button>
      </div>
      )}
     <div  className='z-[-1] mx-auto'>
     { !media ?
   (<motion.img initial={{y: 300, opacity : 0}} animate={{y: view ? 0 : 300, opacity: view ? 1 : 0}} transition={{duration: 1.1}} className='sm:mt-[-28px] md:mt-[-200px]' src="https://preview.colorlib.com/theme/mobapp/images/perspective.png.webp" alt="phone" />) :
    (<img  className='sm:mt-[-15px] md:mt-[-200px]' src="https://preview.colorlib.com/theme/mobapp/images/perspective.png.webp" alt="phone" />) } 
     </div>
    </div>
    </div>
  )
}

export default Discover