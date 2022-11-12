import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
function FeaturesBox({name}) {
  const [title, setTitle] = useState('');
  const [smf, setSmf] = useState('sm:flex-col');
  const [xlflex, setXlflex] = useState('xl:flex-row');

useEffect(() => {
if(name === 'communitcation'){
setTitle('Communicate with ease');
setXlflex('xl:flex-row');
setSmf('sm:flex-col');

}
 else if(name === 'scheduling') {
setTitle('Scheduling when you want');
setXlflex('xl:flex-row-reverse');
setSmf('sm:flex-col-reverse')

} 
else if(name === 'messages'){
  setTitle('Realtime Messaging service');
  setXlflex('xl:flex-row');
 setSmf('sm:flex-col');

} 
else if(name === 'live_chat'){
  setTitle('Live chat when you needed');
  setXlflex('xl:flex-row-reverse');
  setSmf('sm:flex-col-reverse')
 
}

}, [name])

  return (
    <div key={name} className={`bg-white transition-all duration-300 flex ${xlflex} gap-8 md:px-[70px] sm:px-[45px] ${smf} py-[50px]`}>
       <motion.div  initial={{opacity : 0}} animate={{opacity : 1}} transition={{duration : 0.5}}>
       <img className='xl:w-[1100px] sm:max-w-[200px]' src="https://preview.colorlib.com/theme/mobapp/images/graphic.png.webp" alt="images" />
       </motion.div>
       <motion.div  initial={{opacity : 0}} animate={{opacity : 1}} transition={{duration : 0.5}}>
        <motion.div className='flex flex-col'  initial={{opacity : 0}} animate={{opacity : 1}} transition={{duration : 0.5}}>
       <h1 className='text-[#633991] font-light text-[45px] mb-3'>{title}</h1>
       <p className='text-[#e38cb7] text-[20px] mb-8'>Uniquely underwhelm premium outsourcing with proactive leadership skills</p>
        </motion.div>
        <motion.div  initial={{opacity : 0}} animate={{opacity : 1}} transition={{duration : 0.5}}>
          <p className='text-[#959094] text-[20px] font-normal pb-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante. Ut placerat dui eu nulla congue tincidunt ac a nibh. Mauris accumsan pulvinar lorem placerat volutpat. Praesent quis facilisis elit. Sed condimentum neque quis ex porttitor,</p>
          <p className='text-[#959094] text-[20px] font-normal'>malesuada faucibus augue aliquet. Sed elit est, eleifend sed dapibus a, semper a eros. Vestibulum blandit vulputate pharetra. Phasellus lobortis leo a nisl euismod, eu faucibus justo sollicitudin. Mauris consectetur, tortor sed tempor malesuada, sem nunc porta augue, in dictum arcu tortor id turpis. Proin aliquet vulputate aliquam.</p>
        </motion.div>
       </motion.div>
     
    </div>
  )
}

export default FeaturesBox