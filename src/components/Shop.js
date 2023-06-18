import React from 'react'
import r1 from '../images/r1.png'
import r9 from '../images/r9.png'
import r2 from '../images/r2.png'
import r3 from '../images/r3.png'
import r4 from '../images/r4.png'
import r5 from '../images/r5.png'
import r6 from '../images/r6.png'
import r7 from '../images/r7.png'
import r8 from '../images/r8.png'
import addicon from "../images/addicon.png";
function Shop() {
    return (
        <div className="container mx-auto md:px-1">
            <div className="container mx-auto md:px-1">
                <h1 className='text-4xl'>Shop by Category</h1><br></br>
                <div className='w-100 text-gray-500'>Life is hard enough already. Let us <br></br>make it a little easier.</div>
                <br></br>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

                    <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg pb-5 transition hover:-translate-y-1 hover:scale-2 duration-300">
                        <img className="w-full pl-11 pr-11 pt-11" src={r9} alt="Sunset in the mountains" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 pl-5">Wireless Headphones</div>
                        </div>
                        <div className="px-6 pl-11 flex">
                            <span className='mt-9'>$56.00</span><span className="line-through ... mt-9 ml-11 text-orange-400">$60.00</span>
                            <img className="ml-11 relative left-add" src={addicon} alt="Sunset in the mountains" />
                        </div>
                    </div>


                    <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg pb-5 transition hover:-translate-y-1 hover:scale-2 duration-300">
                        <img className="w-full pl-11 pr-11 pt-11" src={r1} alt="Sunset in the mountains" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 pl-5">Smart Television</div>
                        </div>
                        <div className="px-6 pl-11 flex">
                            <span className='mt-9'>$56.00</span><span className="line-through ... mt-9 ml-11 text-orange-400">$60.00</span>
                            <img className="ml-11 relative left-add" src={addicon} alt="Sunset in the mountains" />
                        </div>
                    </div>



                    <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg pb-5 transition hover:-translate-y-1 hover:scale-2 duration-300">
                        <img className="w-full pl-11 pr-11 pt-11" src={r2} alt="Sunset in the mountains" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 pl-5">Discount On Sports Equipment</div>
                        </div>
                        <div className="px-6 pl-11 flex">
                            <span className='mt-9'>$56.00</span><span className="line-through ... mt-9 ml-11 text-orange-400">$60.00</span>
                            <img className="ml-11 relative left-add" src={addicon} alt="Sunset in the mountains" />
                        </div>
                    </div>


                    <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg pb-5 transition hover:-translate-y-1 hover:scale-2 duration-300">
                        <img className="w-full pl-11 pr-11 pt-11" src={r3} alt="Sunset in the mountains" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 pl-5">Toys for Kid</div>
                        </div>
                        <div className="px-6 pl-11 flex">
                            <span className='mt-9'>$56.00</span><span className="line-through ... mt-9 ml-11 text-orange-400">$60.00</span>
                            <img className="ml-11 relative left-add" src={addicon} alt="Sunset in the mountains" />
                        </div>
                    </div>

                    <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg pb-5 transition hover:-translate-y-1 hover:scale-2 duration-300">
                        <img className="w-full pl-11 pr-11 pt-11" src={r4} alt="Sunset in the mountains" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 pl-5">Man’s Clothing</div>
                        </div>
                        <div className="px-6 pl-11 flex">
                            <span className='mt-9'>$56.00</span><span className="line-through ... mt-9 ml-11 text-orange-400">$60.00</span>
                            <img className="ml-11 relative left-add" src={addicon} alt="Sunset in the mountains" />
                        </div>
                    </div>

                    <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg pb-5 transition hover:-translate-y-1 hover:scale-2 duration-300">
                        <img className="w-full pl-11 pr-11 pt-11" src={r5} alt="Sunset in the mountains" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 pl-5">Auto& Tires (Car Wheel)</div>
                        </div>
                        <div className="px-6 pl-11 flex">
                            <span className='mt-9'>$56.00</span><span className="line-through ... mt-9 ml-11 text-orange-400">$60.00</span>
                            <img className="ml-11 relative left-add" src={addicon} alt="Sunset in the mountains" />
                        </div>
                    </div>

                    <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg pb-5 transition hover:-translate-y-1 hover:scale-2 duration-300">
                        <img className="w-full pl-11 pr-11 pt-11" src={r6} alt="Sunset in the mountains" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 pl-5">Bed & Matress</div>
                        </div>
                        <div className="px-6 pl-11 flex">
                            <span className='mt-9'>$56.00</span><span className="line-through ... mt-9 ml-11 text-orange-400">$60.00</span>
                            <img className="ml-11 relative left-add" src={addicon} alt="Sunset in the mountains" />
                        </div>
                    </div>

                    <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg pb-5 transition hover:-translate-y-1 hover:scale-2 duration-300">
                        <img className="w-full pl-11 pr-11 pt-11" src={r7} alt="Sunset in the mountains" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 pl-5">Chair</div>
                        </div>
                        <div className="px-6 pl-11 flex">
                            <span className='mt-9'>$56.00</span><span className="line-through ... mt-9 ml-11 text-orange-400">$60.00</span>
                            <img className="ml-11 relative left-add" src={addicon} alt="Sunset in the mountains" />
                        </div>
                    </div>

                    <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg pb-5 transition hover:-translate-y-1 hover:scale-2 duration-300">
                        <img className="w-full pl-11 pr-11 pt-11" src={r8} alt="Sunset in the mountains" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 pl-5">Women’s Fashion</div>
                        </div>
                        <div className="px-6 pl-11 flex">
                            <span className='mt-9'>$56.00</span><span className="line-through ... mt-9 ml-11 text-orange-400">$60.00</span>
                            <img className="ml-11 relative left-add" src={addicon} alt="Sunset in the mountains" />
                        </div>
                    </div>

                </div>



            </div>

        </div>
    )
}

export default Shop