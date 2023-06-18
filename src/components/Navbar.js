/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import logo from '../images/Logo.png'
import Search from './Search'
import account from '../images/Icon.png'
import items from '../images/Icon (1).png'
import { ImCart, ImMenu } from "react-icons/im";

export default () => {
    return (
        <nav className="items-center justify-between flex-wrap bg-blue-600 p-6">

            <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-5">

                <div>
                    <img className='text-blue-800' src={logo} alt="Logo" />
                </div>
                <div className="w-full col-span-3">
                    <Search />
                </div>
                <div className="w-full flex gap-2">
                    <span className='flex text-white hover:cursor-pointer'><img className='h-4 mr-1 mt-1' src={account} alt="Logo" /><span className='mr-1'>Account</span></span>
                    <span className='flex text-white hover:cursor-pointer'><img className='h-4 mr-1 mt-1' src={items} alt="Logo" /><span>My Items</span></span>
                    <ImCart className='text-white ml-1 mt-1 hover:cursor-pointer'></ImCart>
                    <ImMenu className='text-white ml-1 mt-1 hover:cursor-pointer'></ImMenu>
                </div>
            </div>


        </nav>
    )
}