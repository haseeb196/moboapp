import { useInView } from 'framer-motion'
import React from 'react'
import { useRef } from 'react'
import {motion} from 'framer-motion'
function Testimonial() {
  const ref = useRef(null)
  const view = useInView(ref, {once : true})
  return (
    <motion.div  initial={{opacity : 0, y : 100}} animate={{opacity : view ? 1 : 0, y : view ? 0 : 100 }} transition={{duration : 0.9}} className='flex flex-col items-center pt-[80px] pb-[110px]'>
      <div ref={ref} className='text-center'>
      <p className='text-[#998a9b] text-sm font-normal'>TESTIMONIALS</p>
      <h1 className='text-[#633991] text-[33px] font-medium'>What our Customers Says</h1>
      </div>
      <div className='flex flex-col items-center pl-2 -mt-4'>
     <img src="https://static.vecteezy.com/system/resources/previews/011/381/904/non_2x/cool-man-3d-cartoon-avatar-portrait-png.png" className='max-w-[230px]' alt="" />
     <p className='text-[#7a767a] font-light text-[1.25rem] max-w-[890px]'>Uniquely streamline highly efficient scenarios and 24/7 initiatives. Conveniently embrace multifunctional ideas through proactive customer service. Distinctively conceptualize 2.0 intellectual capital via user-centric partnerships.</p>
      </div>
   <div className='flex flex-col items-center pt-5'>
  <h2 className='capitalize text-[#633991] text-[28px] font-normal'>crystal gordon</h2>
  <p className='capitalize text-[#e38cb7]'>united states</p>
   </div>
    </motion.div>
  )
}

export default Testimonial