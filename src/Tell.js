import { useInView } from 'framer-motion'
import React, { useRef } from 'react'
import {motion} from 'framer-motion'
import { useMediaQuery } from '@mui/material';

function Tell() {
  const media = useMediaQuery('(max-width:902px)');
  const ref = useRef(null)
  const view = useInView(ref, {once : true})
  return !media ? (
    <div className='flex md:flex-row sm:flex-col justify-center sm:items-center md:items-start p-[80px] bg-[#faf6fb] gap-3'>
      <motion.div initial={{opacity : 0, x : -300}} animate={{opacity : view ? 1 : 0, x : view ? 0 : -300}} transition={{duration : 1.2}} ref={ref} className='flex flex-col mb-10'>
       <div className='flex flex-row group items-center gap-9 py-[26px] border-b-[1px] border-[#f8e3f0]'>
        <div>
        <h1 className='p-[10px] w-[100px] h-[100px] bg-white  rounded-[50%] font-light transition-all duration-[0.2s] ease-in-out text-[48px] text-center group-hover:bg-[#f5378e] shadow-xl group-hover:text-white'>1</h1>
        </div>
        <div className='flex flex-col'>
        <h2 className='text-[28px] text-[#633991] mb-[0.7] font-normal'>Create an Account</h2>
        <p className='text-[#959094] max-w-[609px] sm:text-[16px] xl:text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium obcaecati vel exercitationem</p>
        </div>
       </div>
       <div className='flex flex-row group items-center gap-9 py-[26px] border-b-[1px] border-[#f8e3f0] my-[24px]'>
       <div>
       <h1 className='p-[10px] w-[100px] h-[100px] bg-white  rounded-[50%] font-light transition-all duration-[0.2s] ease-in-out text-[48px] text-center group-hover:bg-[#f5378e] shadow-xl group-hover:text-white'>2</h1>
       </div>
       <div className='flex flex-col'>
       <h2 className='text-[28px] text-[#633991] mb-[0.7] font-normal'>Share with friends</h2>
       <p className='text-[#959094] max-w-[609px] sm:text-[16px] xl:text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium obcaecati vel exercitationem eveniet</p>
       </div>
       </div>
       <div className='flex flex-row group items-center gap-9 py-[26px] border-b-[1px] border-[#f8e3f0]'>
       <div>
       <h1 className='p-[10px] w-[100px] h-[100px] bg-white  rounded-[50%] font-light transition-all duration-[0.2s] ease-in-out text-[48px] text-center group-hover:bg-[#f5378e] shadow-xl group-hover:text-white'>3</h1>
       </div>
       <div className='flex flex-col'>
       <h2 className='text-[28px] text-[#633991] mb-[0.7] font-normal'>Enjoy your life</h2>
       <p className='text-[#959094] max-w-[609px] sm:text-[16px] xl:text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium obcaecati vel exercitationem</p>
       </div>
       </div>
      </motion.div>
      <motion.div initial={{opacity : 0, x : 300}} animate={{opacity : view ? 1 : 0,  x: view ? 0 : 300}} transition={{duration: 1.2}} >
         <img className='max-w-[350px]' src="https://preview.colorlib.com/theme/mobapp/images/iphonex.png.webp" alt="phone" />
      </motion.div>
    </div>
  ) : (
    <div className='flex md:flex-row sm:flex-col justify-center sm:items-center md:items-start p-[80px] bg-[#faf6fb] gap-3'>
    <div ref={ref} className='flex flex-col mb-10'>
     <div className='flex flex-row group items-center gap-9 py-[26px] border-b-[1px] border-[#f8e3f0]'>
      <div>
      <h1 className='p-[10px] w-[100px] h-[100px] bg-white  rounded-[50%] font-light transition-all duration-[0.2s] ease-in-out text-[48px] text-center group-hover:bg-[#f5378e] shadow-xl group-hover:text-white'>1</h1>
      </div>
      <div className='flex flex-col'>
      <h2 className='text-[28px] text-[#633991] mb-[0.7] font-normal'>Create an Account</h2>
      <p className='text-[#959094] max-w-[609px] sm:text-[16px] xl:text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium obcaecati vel exercitationem</p>
      </div>
     </div>
     <div className='flex flex-row group items-center gap-9 py-[26px] border-b-[1px] border-[#f8e3f0] my-[24px]'>
     <div>
     <h1 className='p-[10px] w-[100px] h-[100px] bg-white  rounded-[50%] font-light transition-all duration-[0.2s] ease-in-out text-[48px] text-center group-hover:bg-[#f5378e] shadow-xl group-hover:text-white'>2</h1>
     </div>
     <div className='flex flex-col'>
     <h2 className='text-[28px] text-[#633991] mb-[0.7] font-normal'>Share with friends</h2>
     <p className='text-[#959094] max-w-[609px] sm:text-[16px] xl:text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium obcaecati vel exercitationem eveniet</p>
     </div>
     </div>
     <div className='flex flex-row group items-center gap-9 py-[26px] border-b-[1px] border-[#f8e3f0]'>
     <div>
     <h1 className='p-[10px] w-[100px] h-[100px] bg-white  rounded-[50%] font-light transition-all duration-[0.2s] ease-in-out text-[48px] text-center group-hover:bg-[#f5378e] shadow-xl group-hover:text-white'>3</h1>
     </div>
     <div className='flex flex-col'>
     <h2 className='text-[28px] text-[#633991] mb-[0.7] font-normal'>Enjoy your life</h2>
     <p className='text-[#959094] max-w-[609px] sm:text-[16px] xl:text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium obcaecati vel exercitationem</p>
     </div>
     </div>
    </div>
    <div>
       <img className='max-w-[350px]' src="https://preview.colorlib.com/theme/mobapp/images/iphonex.png.webp" alt="phone" />
    </div>
  </div>
  )
}

export default Tell