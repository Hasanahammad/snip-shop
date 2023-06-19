import React, { useEffect, useState } from 'react';

const GetProducts = () => {
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

    // Render the data once it is fetched
    return (
        // <div>
        //   {data ? (
        //     <div>
        //       {data.products.map((product) => (
        //         <div key={product.id} className="card">
        //           <h2>{product.title}</h2>
        //           <p>{product.description}</p>
        //           <p>Price: {product.price}</p>
        //           <p>Discount: {product.discountPercentage}%</p>
        //           <p>Rating: {product.rating}</p>
        //           <p>Stock: {product.stock}</p>
        //           <p>Brand: {product.brand}</p>
        //           <p>Category: {product.category}</p>
        //           <img src={product.thumbnail} alt={product.title} />
        //           {/* {product.images.map((image, index) => (
        //             <img key={index} src={image} alt={`Image ${index + 1}`} />
        //           ))} */}
        //         </div>
        //       ))}
        //     </div>
        //   ) : (
        //     <p>Loading...??</p>
        //   )}
        // </div>

        <section className="container mx-auto md:px-1 mt-5">
            <h1 className="font-bold text-2xl py-5 text-center">Featured Product For <br></br> Pre-Order</h1>
            {/* <p className='flex absolute right-11'>Discover Our Products </p> */}
            <br></br><br></br>

            <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-5">

                {data ? (
                    
                    <div className="max-w-sm ">
                        {data.products.map((product) => (
                            <div key={product.id} className="card">
                        <div className='rounded-3xl overflow-hidden shadow-lg pb-3 transition hover:-translate-y-1 hover:scale-2 duration-300'>
                            <img className="w-full" src={product.thumbnail} alt={product.title} />
                            <div className="px-6">
                                <div className="font-bold text-xl mb-2 pl-5">{product.title}</div>
                                <div className="font-light text-xl mb-2 pl-5">{product.description}</div>
                                <div className="text-sm mb-2 pl-5 font-bold text-blue-900">${product.price}</div>
                            </div>
                        </div>
                                {/* <h2>{product.title}</h2>
                                <p>{product.description}</p>
                                <p>Price: {product.price}</p>
                                <p>Discount: {product.discountPercentage}%</p>
                                <p>Rating: {product.rating}</p>
                                <p>Stock: {product.stock}</p>
                                <p>Brand: {product.brand}</p>
                                <p>Category: {product.category}</p>
                                <img src={product.thumbnail} alt={product.title} /> */}
                                {/* {product.images.map((image, index) => (
                <img key={index} src={image} alt={`Image ${index + 1}`} />
              ))} */}
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Loading...??</p>
                )}



            </div>
        </section>
    );
};

export default GetProducts;
