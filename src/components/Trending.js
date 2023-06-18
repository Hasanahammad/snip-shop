import React from 'react'
import one from '../images/one.png';
function Trending() {

    return (
        <div className='container py-5 m-9'>
            <div className='container py-5 m-9'>
            <h1 className='text-4xl'>Shop Our Trending Products</h1>
            <div className='w-100 text-gray-500'>Life is hard enough already. Let us make it a<br></br>little easier.</div>
            <br></br>
            <div>
                <ul class="flex">
                    <li class="mr-6">
                        <a class="text-gray-600 hover:text-gray-800" href="#">Fashion</a>
                    </li>
                    <li class="mr-6">
                        <a class="text-gray-600 hover:text-gray-800" href="#">Technology</a>
                    </li>
                    <li class="mr-6">
                        <a class="text-gray-600 hover:text-gray-800" href="#">Interiors</a>
                    </li>
                    <li class="mr-6">
                        <a class="text-gray-600 hover:text-gray-800" href="#">Food & Drink</a>
                    </li>
                </ul>
            </div>
            <br></br>
            <br></br>
<div className='flex m-3 gap-5'>
            
            <div class="card-size rounded-2xl shadow-lg flex bg-lime-500 overflow-visible">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Seven Zero Five</div>
                    <p class="text-gray-700 text-base">
                        Starting</p>
                        <b class="text-gray-700 text-base">
                        10.00</b>
                </div>
                <div class="card-pic-wrap relative">
                    <img class="w-full" src={one} alt="Sunset in the mountains" />
                </div>
            </div>
            <div class="card-size rounded-2xl shadow-lg flex bg-lime-500 overflow-visible">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Seven Zero Five</div>
                    <p class="text-gray-700 text-base">
                        Starting</p>
                        <b class="text-gray-700 text-base">
                        10.00</b>
                </div>
                <div class="card-pic-wrap relative">
                    <img class="w-full" src={one} alt="Sunset in the mountains" />
                </div>
            </div>
            <div class="card-size rounded-2xl shadow-lg flex bg-lime-500 overflow-visible">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Seven Zero Five</div>
                    <p class="text-gray-700 text-base">
                        Starting</p>
                        <b class="text-gray-700 text-base">
                        10.00</b>
                </div>
                <div class="card-pic-wrap relative">
                    <img class="w-full" src={one} alt="Sunset in the mountains" />
                </div>
            </div>
            <div class="card-size rounded-2xl shadow-lg flex bg-lime-500 overflow-visible">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Seven Zero Five</div>
                    <p class="text-gray-700 text-base">
                        Starting</p>
                        <b class="text-gray-700 text-base">
                        10.00</b>
                </div>
                <div class="card-pic-wrap relative">
                    <img class="w-full" src={one} alt="Sunset in the mountains" />
                </div>
            </div>
            <div class="card-size rounded-2xl shadow-lg flex bg-lime-500 overflow-visible">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Seven Zero Five</div>
                    <p class="text-gray-700 text-base">
                        Starting</p>
                        <b class="text-gray-700 text-base">
                        10.00</b>
                </div>
                <div class="card-pic-wrap relative">
                    <img class="w-full" src={one} alt="Sunset in the mountains" />
                </div>
            </div>

            </div>
            </div>
        </div>
    )
}

export default Trending