import React from 'react'

function Faq() {
  return (
    <div className='flex flex-col items-center mb-[85px] mx-auto px-20'>
    <div className='text-center mb-7'>
      <p className='uppercase text-[#998a9b] font-medium text-sm'>faq</p>
      <h1 className='text-[#633991]  capitalize text-[33px] font-medium'>frequently asked questions</h1>
    </div>
    <div className='flex md:flex-row sm:flex-col gap-12'>
    <div className='flex flex-col gap-10'>
    <div> 
    <h1 className='text-[#633991] text-[20px] font-bold mb-4'>Can I try before I buy?</h1>
    <p className='max-w-[540px] text-[#969094] font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante.</p>
    </div>
      <div>
       <h1 className='text-[#633991] text-[20px] font-bold mb-4'>What payment methods do you accept?</h1>
       <p className='max-w-[540px] text-[#969094] font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante.</p>
      </div>
    </div>
     <div className='flex flex-col gap-10'>
     <div>
      <h1 className='text-[#633991] text-[20px] font-bold mb-4'>Can I change my plan later?</h1>
      <p className='max-w-[540px] text-[#969094] font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante.</p>
     </div>
      <div>
      <h1 className='text-[#633991] text-[20px] font-bold mb-4'>Do you have a contract?</h1>
         <p className='max-w-[540px] text-[#969094] font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante.</p>
      </div>
     </div>
      
    </div>
    </div>
  )
}

export default Faq