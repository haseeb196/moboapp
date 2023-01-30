import { useMediaQuery } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import './Header.css'
import Menu from './Menu'
function Header() {
  const [wee, setWee] = useState(false)
const media = useMediaQuery('(max-width:902px)');
const onScroll = () => {
  if(window.scrollY <= 0) {
    setWee(false)
  } else if(window.scrollY > 0) {
    setWee(true)
  }
}
 useEffect(() => {
   window.addEventListener('scroll', onScroll)
 })
  return (
 <div className={`flex ${media ? 'justify-between' : 'justify-evenly'} items-center bg-gradient-to-r ${wee ? 'sm:py-2 xl:py-4 md:py-4 from-[#7e3bbf] to-[#e70095]' : 'py-7 from-[#673a92] to-[#c73592]'} sticky top-0   transition-all z-[100] ${media ? 'px-7' : 'px-0'}`}>
   <motion.div  initial={{x: media ? -200 : -390, opacity : 0}} animate={{x:0, opacity : 1}} transition={{duration : media ? 0.7 : 1}} className="header__title mr-4">
   <img className='bg-tranparent w-[85px]'  src="data:image/webp;base64,UklGRsIBAABXRUJQVlA4TLYBAAAvZgAEEH8gFkzmL90Xw/zPv0AghRt0D1DDABdAbm1bzxodvDcNuAoG0vFTgVAHkE2ICcdRgmw25qcDqQOfSx38i2wyPCzp4+cG3/fLdBDR/wkwGYDzA6Af6EcElpL0FmBfagMjSTpLwaMkfQPz2Vp7sC9JeyFKAOfSBXBuyY9hLH3EXFiBB8uLGLeKsixB3VSBuaRomKohk4hRHDryYJuHcpB1MG8DG0kpB/WthhiVuJZSZpeDse/RVALY1FzTLhAoUMHFQheOppQz/7uw+e3RUQRYtFyLNnyR1mqFTOU7kArmq095d+rRE8Cs66hvC3Cou0t5IQvdOZpS3qSC5OHZoUfPt6ZdlpLkR2GsYU+TiKO51YHjRkqb1Loyb7xEDNZq1KWkZb/ByJ5ETep++JB5Rgm+bCtglMMoFzKJh+xhUl+kqCVr5mI8pC6l2KjhOkvh+gYmhTng0KOjCLBouUYX9OQcWjiNStgmxaJiNZUANrUn3Lv8FwKLIA/lIOcaH7B0Kf4qq4sYt4o5yqbBg2pQljKv0pOkNixlJ8s7ZYFHVV/uABjs9DMS8pYvUhxYqjXSxPWoogM=" alt="" color/>
   </motion.div>
   { media  ?  (<Menu />)
   :
   ( <motion.nav initial={{x:600, opacity:0}} animate={{x:0, opacity: 1}} transition={{duration : 1.1}}>
      <ul>
         <Link spy={true} activeClass='active' smooth={true}   duration={700} to='home' className='m-4 font-semibold text-gray-400 hover:text-white  text-[14px]  uppercase md:m-3 md:text-[15px] sm:text-[15px] sm:m-[8px] transition-all  pb-1' >Home</Link>
         <Link spy={true} activeClass='active' smooth={true}   duration={700} to='features' className='m-4 font-semibold text-gray-400 hover:text-white  text-[14px]  uppercase md:m-3 md:text-[15px] sm:text-[15px] sm:m-[8px] transition-all pb-1' >features</Link>
         <Link spy={true} activeClass='active' smooth={true}  duration={700} to='gallery' className='m-4 font-semibold text-gray-400 hover:text-white  text-[14px]  uppercase md:m-3 md:text-[15px] sm:text-[15px] sm:m-[8px] transition-all pb-1' >gallery</Link>
         <Link spy={true} activeClass='active' smooth={true}   duration={700} to='pricing' className='m-4 font-semibold text-gray-400 hover:text-white  text-[14px]  uppercase md:m-3 md:text-[15px] sm:text-[15px] sm:m-[8px] transition-all pb-1' >pricing</Link>
         <Link spy={true} activeClass='active' smooth={true}   duration={700} to='contact' className='m-4 font-semibold text-gray-400 hover:text-white  text-[14px]  uppercase md:m-3 md:text-[15px] sm:text-[15px] sm:m-[8px] transition-all pb-1' >contact</Link>
         <Link spy={true} activeClass='active' smooth={true}   duration={700} to='' className='m-4 uppercase transition ease-in-out text-[11px] font-[400] border tracking-[1px] px-[12px] py-[7px] rounded-[5px] text-white hover:bg-white hover:text-[#b03792]'>Download</Link>
      </ul>
   </motion.nav> ) }
 </div>
  )
}

export default Header