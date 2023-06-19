import React from 'react'
import camera from '../images/camera.png'
import camera2 from '../images/camera2.png'
import camera3 from '../images/camera1.png'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function Slider() {

  const imageSrc = require('../images/base.png');
  return (
    <div className='pt-10' style={{
      backgroundImage: `url(${imageSrc})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%'
    }}>

      <div className="grid md:grid-cols-10 sm:grid-cols-2 place-content-center text-center text-sm gap-0">
        <div></div>
        <div><a className=" text-gray-600 hover:text-gray-800 underline-on-hover" href="/">Jewelry & Accessories</a></div>
        <div><a className="text-gray-600 hover:text-gray-800 underline-on-hover" href="/">Clothing & Shoes</a></div>
        <div><a className="text-gray-600 hover:text-gray-800 underline-on-hover" href="/">Home & Living</a></div>
        <div><a className="text-gray-600 hover:text-gray-800 underline-on-hover" href="/">Wedding & Party</a></div>
        <div><a className="text-gray-600 hover:text-gray-800 underline-on-hover" href="/">Toys & Entertainment</a></div>
        <div> <a className="text-gray-600 hover:text-gray-800 underline-on-hover" href="/">Art & Collectibles</a></div>
        <div><a className="text-gray-600 hover:text-gray-800 underline-on-hover" href="/">Craft Supplies & Tools</a></div>
        <div><a className="text-gray-600 hover:text-gray-800 underline-on-hover" href="/">Vintage</a></div>
      </div>



      <div className="grid grid-cols-2 gap-4 text-start py-10 m-11">
        <div className="...">
          <p>100% QUALITY, 100% SATISFACTION</p>
          <h1 className='text-8xl'>Where the world comes to shop.</h1>
          <br></br>
          <p className='text-gray-500'>Life is hard enough already. Let us make it a little <br></br> easier, Vision of Snip shop for a better outlook.</p>
          <br></br>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Shop Now
          </button>
        </div>
        <div className="...">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            // spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide><div className="grid grid-cols-2 gap-4 text-start mb-11">
              <div>
                <img className='camera' src={camera} alt="Camera" />
              </div>
              <div>
                <img src={camera2} alt="Camera" />
                <p className='text-sm'>Fuji 14mm Lens</p>
                <img src={camera3} alt="Camera" />
                <p className='text-sm'>Camera Stand</p>
              </div>
            </div>
            </SwiperSlide>
            <SwiperSlide><div className="grid grid-cols-2 gap-4 text-start">
              <div>
                <img className='camera' src={camera} alt="Camera" />
              </div>
              <div>
                <img src={camera2} alt="Camera" />
                <p className='text-sm'>Fuji 14mm Lens</p>
                <img src={camera3} alt="Camera" />
                <p className='text-sm'>Camera Stand</p>
              </div>
            </div>
            </SwiperSlide>
            <SwiperSlide><div className="grid grid-cols-2 gap-4 text-start">
              <div>
                <img className='camera' src={camera} alt="Camera" />
              </div>
              <div>
                <img src={camera2} alt="Camera" />
                <p className='text-sm'>Fuji 14mm Lens</p>
                <img src={camera3} alt="Camera" />
                <p className='text-sm'>Camera Stand</p>
              </div>
            </div>
            </SwiperSlide>
            <SwiperSlide><div className="grid grid-cols-2 gap-4 text-start">
              <div>
                <img className='camera' src={camera} alt="Camera" />
              </div>
              <div>
                <img src={camera2} alt="Camera" />
                <p className='text-sm'>Fuji 14mm Lens</p>
                <img src={camera3} alt="Camera" />
                <p className='text-sm'>Camera Stand</p>
              </div>
            </div>
            </SwiperSlide>
          </Swiper>


        </div>
      </div>
    </div>
  )
}

export default Slider