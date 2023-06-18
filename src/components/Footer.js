import React from 'react';
import instagramIcon from "../images/Footer_instagram_icon.png";
import dribbbleIcon from "../images/Footer_Dribbble_icon.png";
import facebookIcon from "../images/Footer_Facebook_icon.png";
import pinterestIcon from "../images/Footer_Pinterest_icon.png";
import twitterIcon from "../images/Footer_Twitter_icon.png";

function Footer() {
  return (
    <section>
      <div className='footer'>
        <div class="container mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
            <div class="text-left text-white">
              <h4 className='font-bold'>Shop</h4>
              <ul className='text-base font-normal leading-8'>
                <li>Gift cards</li>
                <li>SnipShop blog</li>
              </ul>
            </div>
            <div class="text-left text-white">
              <h4 className='font-bold'>Sell</h4>
              <ul className='text-base font-normal leading-8'>
                <li>Sell on SnipShop</li>
                <li>Tearms</li>
                <li>Forums</li>
                <li>Affiliates</li>
              </ul>
            </div>
            <div class="text-left text-white">
              <h4 className='font-bold'>About</h4>
              <ul className='text-base font-normal leading-8'>
                <li>SnipShop, Inc.</li>
                <li>Policies</li>
                <li>Investors</li>
                <li>Careers</li>
                <li>Press</li>
                <li>Impact</li>
              </ul>
            </div>
            <div class="text-left text-white">
              <h4 className='font-boldb'>Help</h4>
              <ul className='text-base font-normal leading-8'>
                <li>Help center</li>
                <li>Trust and safety</li>
                <li>Privacy settings</li>
              </ul>
              <div class="button">
                <button className='text-sm'>Download the SnipShop App</button>
              </div>
              <div className='social-icons'>
                <ul className='flex gap-x-3.5'>
                  <li><img src={instagramIcon} alt="instagram logo" /></li>
                  <li><img src={facebookIcon} alt="facebook logo" /></li>
                  <li><img src={twitterIcon} alt="twitter logo" /></li>
                  <li><img src={dribbbleIcon} alt="dribble logo" /></li>
                  <li><img src={pinterestIcon} alt="pinterest logo" /></li>

                </ul>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <div class="container mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 text-base">
            <div className='text-left'>© 2021-2023 SnipShop.com</div>
            <div>
              <ul className='flex gap-x-3.5 justify-end'>
                <li>Terms of use</li>
                <li>Privacy</li>
                <li>Interest-based ads</li>
              </ul>
            </div>

          </div>

        </div>
      </div>

    </section>
  )
}

export default Footer