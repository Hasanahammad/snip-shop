import React from 'react'
import r1 from '../images/r1.png'
import addicon from "../images/addicon.png";
function Shop() {
    return (
        <div className="container mx-auto md:px-1">
            <div className="container mx-auto md:px-1">
                <h1 className='text-4xl'>Shop by Category</h1>
                <div className='w-100 text-gray-500'>Life is hard enough already. Let us <br></br>make it a little easier.</div>
                <br></br>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

                    <div class="max-w-sm rounded-3xl overflow-hidden shadow-lg pb-5 transition hover:-translate-y-1 hover:scale-2 duration-300">
                        <img class="w-full pl-11 pr-11 pt-11" src={r1} alt="Sunset in the mountains" />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2 pl-5">Wireless Headphones</div>
                        </div>
                        <div class="px-6 pl-11 flex">
                            <span className='mt-9'>$56.00</span><span class="line-through ... mt-9 ml-11 text-orange-400">$60.00</span>
                            <img class="ml-11 relative left-add" src={addicon} alt="Sunset in the mountains" />
                        </div>
                    </div>


                    <div class="max-w-sm rounded-3xl overflow-hidden shadow-lg pb-5 transition hover:-translate-y-1 hover:scale-2 duration-300">
                        <img class="w-full pl-11 pr-11 pt-11" src={r1} alt="Sunset in the mountains" />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2 pl-5">Wireless Headphones</div>
                        </div>
                        <div class="px-6 pl-11 flex">
                            <span className='mt-9'>$56.00</span><span class="line-through ... mt-9 ml-11 text-orange-400">$60.00</span>
                            <img class="ml-11 relative left-add" src={addicon} alt="Sunset in the mountains" />
                        </div>
                    </div>



                    <div class="max-w-sm rounded-3xl overflow-hidden shadow-lg pb-5 transition hover:-translate-y-1 hover:scale-2 duration-300">
                        <img class="w-full pl-11 pr-11 pt-11" src={r1} alt="Sunset in the mountains" />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2 pl-5">Wireless Headphones</div>
                        </div>
                        <div class="px-6 pl-11 flex">
                            <span className='mt-9'>$56.00</span><span class="line-through ... mt-9 ml-11 text-orange-400">$60.00</span>
                            <img class="ml-11 relative left-add" src={addicon} alt="Sunset in the mountains" />
                        </div>
                    </div>


                    <div class="max-w-sm rounded-3xl overflow-hidden shadow-lg pb-5 transition hover:-translate-y-1 hover:scale-2 duration-300">
                        <img class="w-full pl-11 pr-11 pt-11" src={r1} alt="Sunset in the mountains" />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2 pl-5">Wireless Headphones</div>
                        </div>
                        <div class="px-6 pl-11 flex">
                            <span className='mt-9'>$56.00</span><span class="line-through ... mt-9 ml-11 text-orange-400">$60.00</span>
                            <img class="ml-11 relative left-add" src={addicon} alt="Sunset in the mountains" />
                        </div>
                    </div>

                    <div class="max-w-sm rounded-3xl overflow-hidden shadow-lg pb-5 transition hover:-translate-y-1 hover:scale-2 duration-300">
                        <img class="w-full pl-11 pr-11 pt-11" src={r1} alt="Sunset in the mountains" />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2 pl-5">Wireless Headphones</div>
                        </div>
                        <div class="px-6 pl-11 flex">
                            <span className='mt-9'>$56.00</span><span class="line-through ... mt-9 ml-11 text-orange-400">$60.00</span>
                            <img class="ml-11 relative left-add" src={addicon} alt="Sunset in the mountains" />
                        </div>
                    </div>

                    <div class="max-w-sm rounded-3xl overflow-hidden shadow-lg pb-5 transition hover:-translate-y-1 hover:scale-2 duration-300">
                        <img class="w-full pl-11 pr-11 pt-11" src={r1} alt="Sunset in the mountains" />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2 pl-5">Wireless Headphones</div>
                        </div>
                        <div class="px-6 pl-11 flex">
                            <span className='mt-9'>$56.00</span><span class="line-through ... mt-9 ml-11 text-orange-400">$60.00</span>
                            <img class="ml-11 relative left-add" src={addicon} alt="Sunset in the mountains" />
                        </div>
                    </div>

                </div>



            </div>

        </div>
    )
}

export default Shop