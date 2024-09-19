import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons';
import Card from './Card';
import products from './Products';

const Single = () => {
    const location = useLocation(); // Get location from useLocation
    const { product } = location.state || {}; // Retrieve the product from state
    const [count, setCount] = useState(1);
    const [side, setSide] = useState([]);

    useEffect(() => {
        if (product) {
            const sideProducts = products.slice(3, 8);
            setSide(sideProducts);
        }
    }, [product]);

    if (!product) {
        return <div>Product not found</div>;
    }

    const review = product.comments;

    // Handle input change (user typing)
    const handleInputChange = (e) => {
        const value = e.target.value;
        if (value === '') {
            setCount(''); // Allow the user to clear the input
        } else {
            const parsedValue = parseInt(value, 10);
            if (!isNaN(parsedValue) && parsedValue >= 1 && parsedValue <= 100) {
                setCount(parsedValue);
            }
        }
    };

    // Handle input blur (when user leaves input field)
    const handleInputBlur = () => {
        if (count === '' || isNaN(count) || count < 1) {
            setCount(1); // Set the default value to 1 if input is invalid
        }
    };

    // Increment the number
    const handleIncrement = () => {
        if (count < 100) {
            setCount(prevCount => (prevCount === '' ? 1 : prevCount + 1));
        }
    };

    // Decrement the number
    const handleDecrement = () => {
        if (count > 1) {
            setCount(prevCount => prevCount - 1);
        }
    };

    return (
        <>
            <div className='flex justify-center items-start gap-20 mt-2 mx-52'>
                {/* Image Section */}
                <div className="overflow-hidden">
                    <Zoom>
                        <img
                            className="transition-transform duration-300 ease-in-out transform hover:scale-150"
                            height={1600}
                            width={1600}
                            src={product.image}
                            alt={product.name}
                        />
                    </Zoom>
                </div>

                {/* Product Details Section */}
                <div>
                    <div className='font-semibold text-4xl'>{product.name}</div>
                    <div className='font-semibold text-2xl mt-5'>₹ {product.price}<span className='text-lg font-normal'>+ free shipping</span></div>
                    <div className='mt-4'>Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.</div>

                    {/* Number Input for Product Quantity */}
                    <div className='flex items-center space-x-4 mt-6'>
                        <button
                            onClick={handleDecrement}
                            className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
                        >
                            -
                        </button>
                        
                        <input
                            type="number"
                            value={count}
                            onChange={handleInputChange}
                            onBlur={handleInputBlur} // Restore valid value on blur
                            className="w-16 text-center border border-gray-300 rounded py-2 text-lg"
                            min={1}
                            max={100}
                        />

                        <button
                            onClick={handleIncrement}
                            className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
                        >
                            +
                        </button>
                        <div>
                            <button className='h-12 w-44 border-2 border-black bg-green-600 rounded-lg text-white font-bold'>
                                <div className='flex justify-center items-center gap-3'>
                                    <div><FontAwesomeIcon icon={faShoppingCart} color="white" /></div>
                                    <div>ADD TO CART</div>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className='mt-8 text-xl'>Category :<span className='text-green-500'>{product.category}</span></div>
                </div>
            </div>

            <hr className='my-8 border-gray-300'/> {/* Adds spacing and a light border color */}

            <div className='flex justify-center items-center mt-6'>
                <div className='font-bold text-4xl'>Reviews</div>
            </div>
            
            <div className='flex flex-wrap justify-center gap-6'>
                {review.map((r, index) => (
                    <div key={index} className='bg-white shadow-md p-4 rounded-lg w-full max-w-sm'>
                        <div className='font-semibold text-lg'>{r.user}</div>
                        <div className='flex items-center mt-1'>
                            {[...Array(5)].map((_, starIndex) => (
                                <FontAwesomeIcon
                                    key={starIndex}
                                    icon={faStar}
                                    color={starIndex < Math.round(4) ? 'gold' : 'gray'}
                                />
                            ))}
                        </div>
                        <div className='mt-2 text-gray-700'>{r.text}</div>
                    </div>
                ))}
            </div>
            <hr className='my-8 border-gray-300'/>
            <div className='flex justify-center items-center mt-6'>
                <div className='font-bold text-4xl'>Related Products</div>
            </div>
            <div className='flex flex-wrap justify-center gap-6 mt-8'>
                {side.map((product) => (
                    <Card key={product.id} product={product}/>
                ))}
            </div>
        </>
    );
};

export default Single;
