import { Drawer, IconButton } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Link } from 'react-scroll';
import {motion} from 'framer-motion'
function Menu() {
 const [open, setOpen] = useState(false)
  return (
    <motion.div initial={{x:100}} animate={{x: 0}} transition={{duration : 0.5}}> 
    <IconButton onClick={() => setOpen(true)}><MenuIcon /></IconButton>
    <Drawer open={open} onClose={() => setOpen(false)} anchor={'top'}>
      <div className='bg-gradient-to-r from-[#673a92] to-[#c73592] w-auto'>
      <ul className='flex flex-col items-center'>
         <Link spy={true} activeClass='active' smooth={true} onClick={() => setOpen(false)}  duration={700} to='home' className='m-4 font-semibold text-gray-400 hover:text-white  text-[14px]  uppercase md:m-3 md:text-[15px] sm:text-[15px] sm:m-[8px] transition-all  pb-1' >Home</Link>
         <Link spy={true} activeClass='active' smooth={true} onClick={() => setOpen(false)}  duration={700} to='features' className='m-4 font-semibold text-gray-400 hover:text-white  text-[14px]  uppercase md:m-3 md:text-[15px] sm:text-[15px] sm:m-[8px] transition-all pb-1' >features</Link>
         <Link spy={true} activeClass='active' smooth={true} onClick={() => setOpen(false)} duration={700} to='gallery' className='m-4 font-semibold text-gray-400 hover:text-white  text-[14px]  uppercase md:m-3 md:text-[15px] sm:text-[15px] sm:m-[8px] transition-all pb-1' >gallery</Link>
         <Link spy={true} activeClass='active' smooth={true} onClick={() => setOpen(false)}  duration={700} to='pricing' className='m-4 font-semibold text-gray-400 hover:text-white  text-[14px]  uppercase md:m-3 md:text-[15px] sm:text-[15px] sm:m-[8px] transition-all pb-1' >pricing</Link>
         <Link spy={true} activeClass='active' smooth={true} onClick={() => setOpen(false)}  duration={700} to='contact' className='m-4 font-semibold text-gray-400 hover:text-white  text-[14px]  uppercase md:m-3 md:text-[15px] sm:text-[15px] sm:m-[8px] transition-all pb-1' >contact</Link>
         <Link spy={true} activeClass='active' smooth={true} onClick={() => setOpen(false)}  duration={700} to='' className='m-4 uppercase transition ease-in-out text-[11px] font-[400] border tracking-[1px] px-[12px] py-[7px] rounded-[5px] text-white hover:bg-white hover:text-[#b03792]'>Download</Link>
      </ul>
      </div>

    </Drawer>
    </motion.div>
  )
}

export default Menu