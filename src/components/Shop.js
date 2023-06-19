import React, { useEffect, useState } from 'react';
import addicon from "../images/addicon.png";

function Shop() {

    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products'); // Replace with your API endpoint
                const jsonData = await response.json();
                setData(jsonData);
                console.log(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className="container mx-auto md:px-1 mt-10 mb-10 pt-10">
            <div className="container mx-auto md:px-1">
                <h1 className='text-4xl'>Shop by Category</h1><br></br>
                <div className='w-100 text-gray-500'>Life is hard enough already. Let us <br></br>make it a little easier.</div>
                <br></br>

                {data ? (

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 m-5">
                        {data.products.slice(0, 9).map((product) => (
                            <div key={product.id} className="hover:cursor-pointer max-w-sm rounded-3xl overflow-hidden shadow-xl pb-5 transition hover:-translate-y-1 hover:scale-2 duration-300">
                                <img className=" h-48 object-cover w-full pl-11 pr-11 pt-11" src={product.thumbnail} alt={product.thumbnail} />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2 pl-5">{product.title}</div>
                                </div>
                                <div className="px-6 pl-11 flex">
                                    <span className='mt-9'>${product.discountPercentage}</span><span className="line-through ... mt-9 ml-11 text-orange-400">${product.price}</span>
                                    <img className="ml-11 relative left-add" src={addicon} alt="Sunset in the mountains" />
                                </div>
                            </div>
                        ))}
                    </div>

                ) : (
                    <p>Loading...??</p>
                )}
            </div>
        </div>
    )
}

export default Shop