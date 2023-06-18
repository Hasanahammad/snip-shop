import React from 'react'
import { ImArrowRight2 } from "react-icons/im";
import f1 from '../images/f1.png'
import f2 from '../images/f2.png'
import f3 from '../images/f3.png'
function Feature() {
    return (
        <section className="container mx-auto md:px-1 mt-5">
            <h1 className="font-bold text-2xl py-5 text-center">Featured Product For <br></br> Pre-Order</h1>
            <p className='flex absolute right-11'>Discover Our Products <ImArrowRight2 className='ml-5 mt-1'></ImArrowRight2></p>
            <br></br><br></br>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-1">
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">


                <div className="max-w-sm ">
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
                </div>

                <div className="max-w-sm ">
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
                </div>
            </div>
        </section>
    )
}

export default Feature