import React from 'react'
import Swiperimage from './swiperImage'
import {Swiper, SwiperSlide} from 'swiper/react'
import {  Pagination, Autoplay, Zoom, A11y } from 'swiper';
import 'swiper/css'
import 'swiper/css/bundle'

function Gallery() {

  return (
  
    <div className='flex flex-col items-center justify-center bg-[#faf6fb] p-[80px]'>
    <div>
      <p className='uppercase text-gray-500 text-center'>Gallery</p>
      <h2 className='md:text-[40px] sm:text-[35px] text-center text-[#633991] capitalize' >app screenshots</h2>
    </div>
    <div  className='sm:w-[300px] xl:w-[1000px] md:w-[700px] flex flex-row items-center justify-center pt-8 transition-all'> 
    <Swiper  modules={[Pagination, Autoplay, Zoom, A11y ]}
    spaceBetween={0}
    breakpoints={{ 100 : {slidesPerView : 1}, 500 : {slidesPerView : 1, spaceBetween : 50, width : 1000}, 740 : {slidesPerView : 2.01, spaceBetween : 0,}, 830 : {slidesPerView : 3 ,spaceBetween : 50} }}
    autoplay={{delay : 5000, reverseDirection : true, }} 
     pagination={{ clickable: true }} >
     
<SwiperSlide><Swiperimage src={'https://preview.colorlib.com/theme/mobapp/images/screen3.jpg.webp'}/></SwiperSlide>
<SwiperSlide><Swiperimage src={'https://preview.colorlib.com/theme/mobapp/images/screen1.jpg.webp'}/></SwiperSlide>
<SwiperSlide><Swiperimage src='https://preview.colorlib.com/theme/mobapp/images/screen2.jpg.webp'/></SwiperSlide>
<SwiperSlide><Swiperimage src={'https://preview.colorlib.com/theme/mobapp/images/screen1.jpg.webp'} /></SwiperSlide>
 </Swiper>
 </div>
    </div>
    
    
   
  )
}

export default Gallery