import { useInView } from 'framer-motion'
import React from 'react'
import { useRef } from 'react'
import {motion} from 'framer-motion'

function Launch() {
  const ref = useRef(null)
  const view = useInView(ref, {once : true})
  return (
    <div ref={ref} className='py-[80px] flex justify-center sm:flex-col md:flex-row items-center md:gap-20 sm:gap-10'>
    <motion.div initial={{x : -300, opacity : 0}} animate={{opacity : view ? 1 : 0, x : view ? 0 : -300}} transition={{duration : 0.9}}>
     <img  src="https://preview.colorlib.com/theme/mobapp/images/dualphone.png.webp" alt="" />
    </motion.div>
    <motion.div initial={{x : 300, opacity : 0}} animate={{opacity : view ? 1 : 0, x : view ? 0 : 300}} transition={{duration : 0.9}}>
     <div>
   <img className='max-h-[80px]' src="https://img.icons8.com/metro/344/launched-rocket.png" alt="phone" />
     </div>
 <div className='flex sm:px-[20px] flex-col items-start justify-center'>
  <h1 className='sm:text-[30px] text-[#633991] md:text-[45px]'>Launch your App</h1>
  <p className='text-[#959094] text-[16.5px] xl:max-w-[380px] leading-6 mb-6 font-semibold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati vel exercitationem eveniet vero maxime ratione</p>
      <button className='capitalize bg-gradient-to-r from-[#e54595] to-[#fd378e] py-[8px] px-[15px] rounded-[4px] text-white active:translate-y-[0.8px] shadow'>read more</button>
 </div>
    </motion.div>
    </div>
  )
}

export default Launch