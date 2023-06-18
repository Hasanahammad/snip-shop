import React, { useState } from 'react';
import { ImSearch } from "react-icons/im";
function Search() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Perform search or other operations with the search term
        console.log(searchTerm);
    };

    return (
        <form onSubmit={handleFormSubmit} className='flex margin-search'>
            <input class="bg-white appearance-none border-2 border-gray-200 rounded-full w-3/4  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:blue" id="inline-full-name" type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleInputChange}
            />
            <button type="submit" class="margin-left text-lg w-16 bg-cyan-400 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-full ">
            <ImSearch/>
            </button>
        </form>
    )
}

export default Search