import React from 'react'
// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import one from '../images/one.png';
import two from '../images/two.png';
import three from '../images/three.png';
import four from '../images/four.png';
import five from '../images/five.png';
function Trending() {

    return (
        <div className="container mx-auto md:px-1 mb-10">
            <div className="container mx-auto md:px-1">
                <h1 className='text-4xl'>Shop Our Trending Products</h1><br></br>
                <br></br>
                <div className='w-100 text-gray-500'>Life is hard enough already. Let us make it a<br></br>little easier.</div>
                <br></br>

                <div className="grid md:grid-cols-8 place-content-center mb-11">
                    <div></div>
                    <div></div>
                    <div><a className="text-gray-600 hover:text-gray-800 underline-on-hover" href="/">Fashion</a></div>
                    <div><a className="text-gray-600 hover:text-gray-800 underline-on-hover" href="/">Technology</a></div>
                    <div><a className="text-gray-600 hover:text-gray-800 underline-on-hover" href="/">Interiors</a></div>
                    <div><a className="text-gray-600 hover:text-gray-800 underline-on-hover" href="/">Food & Drink</a></div>
                </div>

                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={60}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5  place-content-center m-5 mb-11">
                            <div className="card-size rounded-2xl shadow-lg flex card-one overflow-visible">
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">Seven Zero Five</div>
                                    <p className="text-gray-700 text-base">
                                        Starting</p>
                                    <b className="text-orange-500 text-base">
                                        $10.00</b>
                                </div>
                                <div className="card-pic-wrap relative">
                                    <img className="w-full" src={one} alt="Sunset in the mountains" />
                                </div>
                            </div>
                            <div className="card-size rounded-2xl shadow-lg flex card-two overflow-visible">
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">Clock</div>
                                    <p className="text-gray-700 text-base">
                                        Starting</p>
                                    <b className="text-orange-500 text-base">
                                        $25.00</b>
                                </div>
                                <div className="card-pic-wrap relative">
                                    <img className="w-full" src={two} alt="Sunset in the mountains" />
                                </div>
                            </div>
                            <div className="card-size rounded-2xl shadow-lg flex card-three overflow-visible">
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">Curology</div>
                                    <p className="text-gray-700 text-base">
                                        Starting</p>
                                    <b className="text-orange-500 text-base">
                                        $10.00</b>
                                </div>
                                <div className="card-pic-wrap relative">
                                    <img className="w-full" src={three} alt="Sunset in the mountains" />
                                </div>
                            </div>
                            <div className="card-size rounded-2xl shadow-lg flex card-four overflow-visible">
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">Chair</div>
                                    <p className="text-gray-700 text-base">
                                        Starting</p>
                                    <b className="text-orange-500 text-base">
                                        $10.00</b>
                                </div>
                                <div className="card-pic-wrap relative">
                                    <img className="w-full" src={four} alt="Sunset in the mountains" />
                                </div>
                            </div>
                            <div className="card-size rounded-2xl shadow-lg flex card-five overflow-visible">
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">Curology</div>
                                    <p className="text-gray-700 text-base">
                                        Starting</p>
                                    <b className="text-orange-500 text-base">
                                        $10.00</b>
                                </div>
                                <div className="card-pic-wrap relative">
                                    <img className="w-full" src={five} alt="Sunset in the mountains" />
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide><div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5  place-content-center m-5">
                        <div className="card-size rounded-2xl shadow-lg flex card-one overflow-visible">
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Seven Zero Five</div>
                                <p className="text-gray-700 text-base">
                                    Starting</p>
                                <b className="text-orange-500 text-base">
                                    $10.00</b>
                            </div>
                            <div className="card-pic-wrap relative">
                                <img className="w-full" src={one} alt="Sunset in the mountains" />
                            </div>
                        </div>
                        <div className="card-size rounded-2xl shadow-lg flex card-two overflow-visible">
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Clock</div>
                                <p className="text-gray-700 text-base">
                                    Starting</p>
                                <b className="text-orange-500 text-base">
                                    $25.00</b>
                            </div>
                            <div className="card-pic-wrap relative">
                                <img className="w-full" src={two} alt="Sunset in the mountains" />
                            </div>
                        </div>
                        <div className="card-size rounded-2xl shadow-lg flex card-three overflow-visible">
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Curology</div>
                                <p className="text-gray-700 text-base">
                                    Starting</p>
                                <b className="text-orange-500 text-base">
                                    $10.00</b>
                            </div>
                            <div className="card-pic-wrap relative">
                                <img className="w-full" src={three} alt="Sunset in the mountains" />
                            </div>
                        </div>
                        <div className="card-size rounded-2xl shadow-lg flex card-four overflow-visible">
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Chair</div>
                                <p className="text-gray-700 text-base">
                                    Starting</p>
                                <b className="text-orange-500 text-base">
                                    $10.00</b>
                            </div>
                            <div className="card-pic-wrap relative">
                                <img className="w-full" src={four} alt="Sunset in the mountains" />
                            </div>
                        </div>
                        <div className="card-size rounded-2xl shadow-lg flex card-five overflow-visible">
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Curology</div>
                                <p className="text-gray-700 text-base">
                                    Starting</p>
                                <b className="text-orange-500 text-base">
                                    $10.00</b>
                            </div>
                            <div className="card-pic-wrap relative">
                                <img className="w-full" src={five} alt="Sunset in the mountains" />
                            </div>
                        </div>

                    </div></SwiperSlide>
                    <SwiperSlide><div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5  place-content-center m-5">
                        <div className="card-size rounded-2xl shadow-lg flex card-one overflow-visible">
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Seven Zero Five</div>
                                <p className="text-gray-700 text-base">
                                    Starting</p>
                                <b className="text-orange-500 text-base">
                                    $10.00</b>
                            </div>
                            <div className="card-pic-wrap relative">
                                <img className="w-full" src={one} alt="Sunset in the mountains" />
                            </div>
                        </div>
                        <div className="card-size rounded-2xl shadow-lg flex card-two overflow-visible">
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Clock</div>
                                <p className="text-gray-700 text-base">
                                    Starting</p>
                                <b className="text-orange-500 text-base">
                                    $25.00</b>
                            </div>
                            <div className="card-pic-wrap relative">
                                <img className="w-full" src={two} alt="Sunset in the mountains" />
                            </div>
                        </div>
                        <div className="card-size rounded-2xl shadow-lg flex card-three overflow-visible">
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Curology</div>
                                <p className="text-gray-700 text-base">
                                    Starting</p>
                                <b className="text-orange-500 text-base">
                                    $10.00</b>
                            </div>
                            <div className="card-pic-wrap relative">
                                <img className="w-full" src={three} alt="Sunset in the mountains" />
                            </div>
                        </div>
                        <div className="card-size rounded-2xl shadow-lg flex card-four overflow-visible">
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Chair</div>
                                <p className="text-gray-700 text-base">
                                    Starting</p>
                                <b className="text-orange-500 text-base">
                                    $10.00</b>
                            </div>
                            <div className="card-pic-wrap relative">
                                <img className="w-full" src={four} alt="Sunset in the mountains" />
                            </div>
                        </div>
                        <div className="card-size rounded-2xl shadow-lg flex card-five overflow-visible">
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Curology</div>
                                <p className="text-gray-700 text-base">
                                    Starting</p>
                                <b className="text-orange-500 text-base">
                                    $10.00</b>
                            </div>
                            <div className="card-pic-wrap relative">
                                <img className="w-full" src={five} alt="Sunset in the mountains" />
                            </div>
                        </div>

                    </div></SwiperSlide>
                    <SwiperSlide><div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5  place-content-center m-5">
                        <div className="card-size rounded-2xl shadow-lg flex card-one overflow-visible">
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Seven Zero Five</div>
                                <p className="text-gray-700 text-base">
                                    Starting</p>
                                <b className="text-orange-500 text-base">
                                    $10.00</b>
                            </div>
                            <div className="card-pic-wrap relative">
                                <img className="w-full" src={one} alt="Sunset in the mountains" />
                            </div>
                        </div>
                        <div className="card-size rounded-2xl shadow-lg flex card-two overflow-visible">
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Clock</div>
                                <p className="text-gray-700 text-base">
                                    Starting</p>
                                <b className="text-orange-500 text-base">
                                    $25.00</b>
                            </div>
                            <div className="card-pic-wrap relative">
                                <img className="w-full" src={two} alt="Sunset in the mountains" />
                            </div>
                        </div>
                        <div className="card-size rounded-2xl shadow-lg flex card-three overflow-visible">
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Curology</div>
                                <p className="text-gray-700 text-base">
                                    Starting</p>
                                <b className="text-orange-500 text-base">
                                    $10.00</b>
                            </div>
                            <div className="card-pic-wrap relative">
                                <img className="w-full" src={three} alt="Sunset in the mountains" />
                            </div>
                        </div>
                        <div className="card-size rounded-2xl shadow-lg flex card-four overflow-visible">
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Chair</div>
                                <p className="text-gray-700 text-base">
                                    Starting</p>
                                <b className="text-orange-500 text-base">
                                    $10.00</b>
                            </div>
                            <div className="card-pic-wrap relative">
                                <img className="w-full" src={four} alt="Sunset in the mountains" />
                            </div>
                        </div>
                        <div className="card-size rounded-2xl shadow-lg flex card-five overflow-visible">
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Curology</div>
                                <p className="text-gray-700 text-base">
                                    Starting</p>
                                <b className="text-orange-500 text-base">
                                    $10.00</b>
                            </div>
                            <div className="card-pic-wrap relative">
                                <img className="w-full" src={five} alt="Sunset in the mountains" />
                            </div>
                        </div>

                    </div></SwiperSlide>
                </Swiper>

                <br></br>
                <br></br>

            </div>
        </div>
    )
}

export default Trending