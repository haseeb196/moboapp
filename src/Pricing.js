import React from 'react'

function Pricing() {
  return (
    <div className='flex flex-col items-center pt-[80px] pb-[80px]'>
      <div className='flex flex-col items-center'>
        <p className='uppercase text-gray-500'>PRICING</p>
        <h2 className='text-[40px] text-[#633991]'>Upgrade to Pro</h2>
      </div>
      <div className='flex flex-wrap xl:flex-row sm:flex-col pt-[20px] flex-1 gap-5'>
       <div className='flex flex-col items-center  border-[1px] border-[#fleef1] rounded-[5px] xl:px-[49px] md:px-[40px] sm:px-16 py-[32px] flex-wrap'>
       <div className='text-center'>
        <p className='text-[#e38cb7] text-sm'>PERSONAL</p>
        <span className='text-[#633991] text-[45px] font-normal'>$14<sub>/m</sub></span>
        </div>
        <div className='flex flex-col items-center gap-6 pt-6 pb-8'>
          <p className='text-gray-500 font-medium'>10 Projects</p>
          <p className='text-gray-500 font-medium'>5 GB Storage</p>
          <p className='text-gray-500 font-medium'>Basic Support</p>
          <p className='line-through text-gray-400 font-medium'>Collaboration</p>
          <p className='line-through text-gray-400 font-medium'>Reports and analytics</p>
        </div> 
        <div><button className='bg-[#eb4193] text-[white] capitalize rounded-md md:px-40 xl:px-20 sm:px-16 shadow-2xl py-3 sm:text-[14px] md:text-[16px] active:translate-y-1'>choose this plan</button></div>
       </div>
       <div className='flex flex-col items-center shadow-2xl border-t-[#cc74b3] border-t-[3px] rounded-[5px] xl:px-[49px] md:px-[40px] sm:px-16 py-[32px] flex-wrap'>
       <div className='text-center'>
        <p className='text-[#e38cb7] text-sm'>FOR TEAMS</p>
        <span className='text-[#633991] text-[45px] font-normal'>$29<sub>/m</sub></span>
        </div>
        <div className='flex flex-col items-center gap-6 pt-6 pb-8'>
          <p className='text-gray-500 font-medium'>Unlimited Projects</p>
          <p className='text-gray-500 font-medium'>100 GB Storage</p>
          <p className='text-gray-500 font-medium'>Priority Support</p>
          <p className='text-gray-500 font-medium'>Collaboration</p>
          <p className='text-gray-500 font-medium'>Reports and analytics</p>
        </div>
        <div><button className='bg-[#eb4193] active:translate-y-1 text-[white] capitalize rounded-md md:px-40 xl:px-20 sm:px-16 shadow-2xl py-3 sm:text-[14px] md:text-[16px]'>choose this plan</button></div>
       </div>
       <div className='flex flex-col items-center border-[1px] border-[#fleef1] rounded-[5px] xl:px-[49px] md:px-[40px] sm:px-16 py-[32px] flex-wrap'>
       <div className='text-center'>
        <p className='text-[#e38cb7] text-sm'>ENTERPRISE</p>
        <span className='text-[#633991] text-[45px] font-normal'>$249<sub>/m</sub></span>
        </div>
        <div className='flex flex-col items-center gap-6 pt-6 pb-8'>
          <p className='text-gray-500 font-medium'>Unlimited Projects</p>
          <p className='text-gray-500 font-medium'>Unlimited Storage</p>
          <p className='text-gray-500 font-medium'>Collaboration</p>
          <p className='text-gray-500 font-medium'>Reports and analytics</p>
          <p className='text-gray-500 font-medium'>Web hooks</p>
      </div>
      <div><button className='bg-[#eb4193] active:translate-y-1 text-[white] capitalize rounded-md md:px-40 xl:px-20 sm:px-16 py-3 shadow-2xl sm:text-[14px] md:text-[16px]'>choose this plan</button></div>
        </div> 
      </div>
    </div>
   
  )
}

export default Pricing