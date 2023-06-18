import React from 'react';
import testiminialImage from "../images/testimonial-image.png";

// import Swiper core and required modules
import { Navigation, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
function Testimonial() {
  return (

    <section className='testimonial-block'>
      <div className='mx-auto overflow-hidden py-14'>
        <Swiper
          // install Swiper modules
          modules={[Navigation, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}

        >
          <SwiperSlide>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 text-base items-center' >
              <div className='testimonial-image-block'>
                <div className='testimonial-image bg-no-repeat bg-contain bg-center'>
                  <img src={testiminialImage} alt="instagram logo" />
                </div>
              </div>
              <div className='testimonial-content text-left'>
                <div>
                <h4 className='user-name text-xl font-semibold'>Justin Pierre</h4>
                  <p className='designation text-sm font-normal'>Products Seller</p>
                </div>
                <div className='text-content text-xl italic mt-12'>
                  “In 2 years, my business went from just me and my Shop site to 40 employees, my own fulfillment center and over 22 million dollars in revenue.”
                </div>

              </div>
            </div>
          </SwiperSlide>
          

          <SwiperSlide>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 text-base items-center' >
              <div className='testimonial-image-block'>
                <div className='testimonial-image bg-no-repeat bg-contain bg-center'>
                  <img src={testiminialImage} alt="instagram logo" />
                </div>
              </div>
              <div className='testimonial-content text-left'>
                <div>
                <h4 className='user-name text-xl font-semibold'>Justin Pierre</h4>
                  <p className='designation text-sm font-normal'>Products Seller</p>
                </div>
                <div className='text-content text-xl italic mt-12'>
                  “In 2 years, my business went from just me and my Shop site to 40 employees, my own fulfillment center and over 22 million dollars in revenue.”
                </div>

              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 text-base items-center' >
              <div className='testimonial-image-block'>
                <div className='testimonial-image bg-no-repeat bg-contain bg-center'>
                  <img src={testiminialImage} alt="instagram logo" />
                </div>
              </div>
              <div className='testimonial-content text-left'>
                <div>
                <h4 className='user-name text-xl font-semibold'>Justin Pierre</h4>
                  <p className='designation text-sm font-normal'>Products Seller</p>
                </div>
                <div className='text-content text-xl italic mt-12'>
                  “In 2 years, my business went from just me and my Shop site to 40 employees, my own fulfillment center and over 22 million dollars in revenue.”
                </div>

              </div>
            </div>
          </SwiperSlide>
        </Swiper>

      </div>


    </section>
  )
}

export default Testimonial