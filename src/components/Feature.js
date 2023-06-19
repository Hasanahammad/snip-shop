import React, { useEffect, useState } from 'react';
// import { ImArrowRight2 } from "react-icons/im";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Feature() {

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products'); // Replace with your API endpoint
                const jsonData = await response.json();
                setData(jsonData);
                console.log(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    const truncateDescription = (description, maxLength) => {
        if (description.length <= maxLength) {
            return description;
        } else {
            return description.substring(0, maxLength) + "...";
        }
    }

    return (
        <section className="container mx-auto md:px-1 mt-10 mb-11">
            <h1 className=" text-3xl py-5 text-center">Featured Product For <br></br> Pre-Order</h1>
            {/* <p className='flex absolute right-11'>Discover Our Products <ImArrowRight2 className='ml-5 mt-1'></ImArrowRight2></p> */}
            <br></br><br></br>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-1">
            </div>

            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {/* <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide> */}
            


            {data ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 m-5">
                    {data.products.slice(0, 12).map((product) => (
                        <SwiperSlide>
                        <div className="max-w-sm mb-20">
                            <div key={product.id} className='rounded-3xl overflow-hidden shadow-lg pb-3 transition hover:-translate-y-1 hover:scale-2 duration-300'>
                                <img className="h-48 object-cover w-full" src={product.thumbnail} alt={product.title} />
                                <div className="px-6">
                                    <div className="font-bold text-xl mb-2 pl-5">{product.title}</div>
                                    <div className="font-light text-xl mb-2 pl-5">{truncateDescription(product.description, 50)}</div>
                                    <div className="text-sm mb-2 pl-5 font-bold text-blue-900">${product.price}</div>
                                </div>
                            </div>
                            <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-11">
                                Order Now
                            </button>
                        </div>
                        </SwiperSlide>
                    ))}

                </div>

            ) : (
                <p>Loading...??</p>
            )}

</Swiper>
            {/* <div className="max-w-sm ">
                    <div className='rounded-3xl overflow-hidden shadow-lg pb-3 transition hover:-translate-y-1 hover:scale-2 duration-300'>
                        <img className="w-full" src={f1} alt="Sunset in the mountains" />
                        <div className="px-6">
                            <div className="font-bold text-xl mb-2 pl-5">VERSACE</div>
                            <div className="font-bold text-xl mb-2 pl-5">EROS - W - Women</div>
                            <div className="text-sm mb-2 pl-5 font-bold text-blue-900">$285.00 USD</div>
                        </div>
                    </div>
                    <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-11">
                        Order Now
                    </button>
                </div> */}

            {/* <div className="max-w-sm ">
                    <div className='rounded-3xl overflow-hidden shadow-lg pb-3 transition hover:-translate-y-1 hover:scale-2 duration-300'>
                        <img className="w-full" src={f2} alt="Sunset in the mountains" />
                        <div className="px-6">
                            <div className="font-bold text-xl mb-2 pl-5">N.5 CHANEL</div>
                            <div className="font-bold text-xl mb-2 pl-5">EAU DE PARFUM - M - Man</div>
                            <div className="text-sm mb-2 pl-5 font-bold text-blue-900">$285.00 USD</div>
                        </div>
                    </div>
                    <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-11">
                        Order Now
                    </button>
                </div>

                <div className="max-w-sm ">
                    <div className='rounded-3xl overflow-hidden shadow-lg pb-3 transition hover:-translate-y-1 hover:scale-2 duration-300'>
                        <img className="w-full" src={f3} alt="Sunset in the mountains" />
                        <div className="px-6">
                            <div className="font-bold text-xl mb-2 pl-5">GABRIELLE</div>
                            <div className="font-bold text-xl mb-2 pl-5">CHANEL PARIS- M - Man</div>
                            <div className="text-sm mb-2 pl-5 font-bold text-blue-900">$285.00 USD</div>
                        </div>
                    </div>
                    <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-11">
                        Order Now
                    </button>
                </div> */}

        </section>
    )
}

export default Feature