import React from 'react'

import {motion} from 'framer-motion'

function Home() {
  return (
  
    <div className='bg-gradient-to-r from-[#673a92] to-[#c73592] flex flex-col items-center justify-center pt-8'>
    <motion.div initial={{opacity:0}} animate={{opacity: 1}} transition={{duration: 1}} className='px-2 mb-3'>
    <h2 className='text-center  text-white xl:text-[50px] font-[400] capitalize sm:text-[40px] md:text-[50px]  ml-[50px] pb-6 '>Mobile App landing page template</h2>
      <p className='text-center  text-gray-300 xl:text-[22px] sm:text-[17px] md:text[20px] font-[300] max-w-[830px]'>The one and only solution for any kind of mobila app landing needs. Just change the screenshots and texts and you are good to go.</p>
    </motion.div>
    <div className='pt-2 pb-0 overflow-hidden xl:h-[700px] md:h-[700px] sm:h-[600px]'>
    <motion.img initial={{opacity:0}} animate={{opacity: 1}} transition={{duration: 1}} src="https://preview.colorlib.com/theme/mobapp/images/iphonex.png.webp" alt='phone' />
    </div>
   
     </div>
     
  )
}

export default Home