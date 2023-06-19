import React from 'react'
import { ImArrowRight2 } from "react-icons/im";

function Sell() {
    const imageSrc = require('../images/sell.png');
    const image = require('../images/image.png');
    const sone = require('../images/sone.png');
    const s2 = require('../images/s2.png');
    const s3 = require('../images/s3.png');
    return (
        <section style={{
            background: '#F4FCFF'
        }}>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5 py-11 items-center max-h-screen">

            <div className="max-w-md text-start pl-11">
                    <h1 className='text-3xl font-bold'>Sell Easily on  Social media</h1>
                    <p className='text-gray-500 mt-5'>Life is hard enough already. Let us <br></br> make it a little easier.</p>
                    <p className='mt-11 flex hover:cursor-pointer'>See All <ImArrowRight2 className='ml-5 mt-1'></ImArrowRight2></p>
                </div>

                <div className="max-w-md" style={{
                    backgroundImage: `url(${imageSrc})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    // height: '70vh',
                    textAlign: 'center'
                }}>
                    <div className='sell-div'>
                    <img className='bg-white boy-image' src={image} alt="apple"></img>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3">
                        <img className='bg-white apple2' src={sone} alt="apple"></img>
                        <img className='bg-white apple2' src={s2} alt="apple"></img>
                        <img className='bg-white apple2' src={s3} alt="apple"></img>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sell