import React from 'react'
import { ImArrowRight2 } from "react-icons/im";
import f1 from '../images/f1.png'
function Feature() {
    return (
        <section className="container mx-auto md:px-1">
            <h1 className="font-bold text-2xl py-5 text-center">Featured Product For <br></br> Pre-Order</h1>
            <p className='flex absolute right-11'>Discover Our Products <ImArrowRight2 className='ml-5 mt-1'></ImArrowRight2></p>
            <br></br><br></br>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-1">
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                

            <div class="max-w-sm ">
                <div className='rounded-3xl overflow-hidden shadow-lg pb-3 transition hover:-translate-y-1 hover:scale-2 duration-300'>
                <img class="w-full" src={f1} alt="Sunset in the mountains" />
                <div class="px-6">
                    <div class="font-bold text-xl mb-2 pl-5">VERSACE</div>
                    <div class="font-bold text-xl mb-2 pl-5">EROS - W - Women</div>
                    <div class="text-sm mb-2 pl-5">$285.00 USD</div>
                </div>
                </div>
                <button class="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-11">
                    Order Now
                </button>
            </div>

            <div class="max-w-sm ">
                <div className='rounded-3xl overflow-hidden shadow-lg pb-3 transition hover:-translate-y-1 hover:scale-2 duration-300'>
                <img class="w-full" src={f1} alt="Sunset in the mountains" />
                <div class="px-6">
                    <div class="font-bold text-xl mb-2 pl-5">VERSACE</div>
                    <div class="font-bold text-xl mb-2 pl-5">EROS - W - Women</div>
                    <div class="text-sm mb-2 pl-5">$285.00 USD</div>
                </div>
                </div>
                <button class="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-11">
                    Order Now
                </button>
            </div>

            <div class="max-w-sm ">
                <div className='rounded-3xl overflow-hidden shadow-lg pb-3 transition hover:-translate-y-1 hover:scale-2 duration-300'>
                <img class="w-full" src={f1} alt="Sunset in the mountains" />
                <div class="px-6">
                    <div class="font-bold text-xl mb-2 pl-5">VERSACE</div>
                    <div class="font-bold text-xl mb-2 pl-5">EROS - W - Women</div>
                    <div class="text-sm mb-2 pl-5">$285.00 USD</div>
                </div>
                </div>
                <button class="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-11">
                    Order Now
                </button>
            </div>
            </div>
        </section>
    )
}

export default Feature