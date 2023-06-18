/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import logo from '../images/Logo.png'
import Search from './Search'
import account from '../images/Icon.png'
import items from '../images/Icon (1).png'

export default () => {
    return (
        <nav class="flex items-center justify-between flex-wrap bg-blue-600 p-6">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                {/* <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
                <span class="font-semibold text-xl tracking-tight">Tailwind CSS</span> */}
                <img src={logo} alt="Logo" />;
            </div>
            <div class="block lg:hidden">
                <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>
            <div class="w-16 block flex-grow md:flex md:items-center lg:w-auto">
                <div class="text-sm md:flex-grow">
                    {/* <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        Docs
                    </a>
                    <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        Examples
                    </a>
                    <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                        Blog
                    </a> */}
                    <Search/>
                </div>
                <div className='flex'>
                    <div className='flex text-white'><img src={account} alt="Logo" />Account</div>
                    <div className='flex text-white'><img src={items} alt="Logo" />My Items</div>
                </div>
            </div>
        </nav>
    )
}