import React from 'react'
import camera from '../images/camera.png'
import camera2 from '../images/camera2.png'
import camera3 from '../images/camera1.png'
function Slider() {

  const imageSrc = require('../images/base.png');
  return (
    <div style={{
      backgroundImage: `url(${imageSrc})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      height: '90vh',
    }}>
      <div className='ml-5'>
        <ul class="flex">
          <li class="mr-6">
            <a class="text-gray-600 hover:text-gray-800" href="#">Jewelry & Accessories</a>
          </li>
          <li class="mr-6">
            <a class="text-gray-600 hover:text-gray-800" href="#">Clothing & Shoes</a>
          </li>
          <li class="mr-6">
            <a class="text-gray-600 hover:text-gray-800" href="#">Home & Living</a>
          </li>
          <li class="mr-6">
            <a class="text-gray-600 hover:text-gray-800" href="#">Wedding & Party</a>
          </li>
          <li class="mr-6">
            <a class="text-gray-600 hover:text-gray-800" href="#">Toys & Entertainment</a>
          </li>
          <li class="mr-6">
            <a class="text-gray-600 hover:text-gray-800" href="#">Art & Collectibles</a>
          </li>
          <li class="mr-6">
            <a class="text-gray-600 hover:text-gray-800" href="#">Craft Supplies & Tools</a>
          </li>
          <li class="mr-6">
            <a class="text-gray-600 hover:text-gray-800" href="#">Vintage</a>
          </li>
        </ul>
      </div>
      <div class="grid grid-cols-2 gap-4 text-start py-10 m-11">
        <div class="...">
          <p>100% QUALITY, 100% SATISFACTION</p>
          <h1 className='text-8xl'>Where the world comes to shop.</h1>
          <p>Life is hard enough already. Let us make it a little easier, Vision of Snipshop for a better outlook.</p>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Shop Now
          </button>
        </div>
        <div class="...">
          <div class="grid grid-cols-2 gap-4 text-start">
            <div>
              <img src={camera} alt="Camera" />
            </div>
            <div>
                <img src={camera2} alt="Camera" />
                <p>Fuji 14mm Lens</p>
                <img src={camera3} alt="Camera" />
                <p>Camera Stand</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Slider