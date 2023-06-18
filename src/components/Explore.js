import React from 'react'
import { ImArrowRight2 } from "react-icons/im";

function Explore() {
    const imageSrc = require('../images/explore.png');
    const apple = require('../images/apple.png');
    const bmw = require('../images/bmw.png');
    const nike = require('../images/nike.png');
    const fila = require('../images/fila.png');
    const mi = require('../images/mi.png');
    const adidas = require('../images/adidas.png');
    return (
        <section className='mt-11' style={{
            background: '#F4FCFF'
        }}>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5 py-11 items-center">


                <div className="max-w-md" style={{
                    backgroundImage: `url(${imageSrc})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '50vh',
                    textAlign: 'center',
                    padding:'40px'
                }}>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 icon-bg">
                        <img className='bg-white apple' src={apple} alt="apple"></img>
                        <img className='bg-white apple' src={bmw} alt="apple"></img>
                        <img className='bg-white apple' src={nike} alt="apple"></img>
                        <img className='bg-white apple' src={fila} alt="apple"></img>
                        <img className='bg-white apple' src={mi} alt="apple"></img>
                        <img className='bg-white apple' src={adidas} alt="apple"></img>
                    </div>

                </div>

                <div className="max-w-sm text-start">
                    <h1 className='text-3xl font-bold'>Explore Most Popular<br></br> Brands</h1>
                    <p className='text-gray-500 mt-5'>Life is hard enough already. Let us <br></br> make it a little easier.</p>
                    <p className='mt-11 flex hover:cursor-pointer'>See All <ImArrowRight2 className='ml-5 mt-1'></ImArrowRight2></p>
                </div>



            </div>
        </section>
    )
}

export default Explore