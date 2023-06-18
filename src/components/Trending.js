import React from 'react'
import one from '../images/one.png';
import two from '../images/two.png';
import three from '../images/three.png';
import four from '../images/four.png';
import five from '../images/five.png';
function Trending() {

    return (
        <div className='container py-5 m-9'>
            <div className='container py-5 m-9'>
                <h1 className='text-4xl'>Shop Our Trending Products</h1>
                <br></br>
                <div className='w-100 text-gray-500'>Life is hard enough already. Let us make it a<br></br>little easier.</div>
                <br></br>

                <div className="grid grid-cols-8 place-content-center">
                    <div></div>
                    <div></div>
                    <div><a className="text-gray-600 hover:text-gray-800 underline-on-hover" href="/">Fashion</a></div>
                    <div><a className="text-gray-600 hover:text-gray-800 underline-on-hover" href="/">Technology</a></div>
                    <div><a className="text-gray-600 hover:text-gray-800 underline-on-hover" href="/">Interiors</a></div>
                    <div><a className="text-gray-600 hover:text-gray-800 underline-on-hover" href="/">Food & Drink</a></div>
                </div>

                <br></br>
                <br></br>
                <div className='flex m-3 gap-5'>
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
            </div>
        </div>
    )
}

export default Trending