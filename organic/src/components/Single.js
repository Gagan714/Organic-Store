import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { addToCart } from './CartSlice';
import Card from './Card';
import products from './Products';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

const Single = () => {
  const location = useLocation();
  const { product } = location.state || {};
  const [count, setCount] = useState(1);
  const [side, setSide] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (product) {
      const currentIndex = products.findIndex(p => p.id === product.id);
      const before = products.slice(Math.max(currentIndex - 3, 0), currentIndex);
      const after = products.slice(currentIndex + 1, currentIndex + 3);
      const sideProducts = [...before, ...after];
      setSide(sideProducts);
    }
  }, [product]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (!product) {
    return <div>Product not found</div>;
  }

  const review = product.comments;

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value === '') {
      setCount('');
    } else {
      const parsedValue = parseInt(value, 10);
      if (!isNaN(parsedValue) && parsedValue >= 1 && parsedValue <= 100) {
        setCount(parsedValue);
      }
    }
  };

  const handleInputBlur = () => {
    if (count === '' || isNaN(count) || count < 1) {
      setCount(1);
    }
  };

  const handleIncrement = () => {
    if (count < 100) {
      setCount(prevCount => (prevCount === '' ? 1 : prevCount + 1));
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(prevCount => prevCount - 1);
    }
  };

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: count,
    }));
    toast.success(`${product.name} added to cart!`); // Show toast message
  };

  return (
    <>
      <ToastContainer />
      <div className='flex justify-center items-start gap-20 mt-2 mx-52'>
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

        <div>
          <div className='font-semibold text-4xl'>{product.name}</div>
          <div className='font-semibold text-2xl mt-5'>₹ {product.price}<span className='text-lg font-normal'>+ free shipping</span></div>
          <div className='mt-4'>Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.</div>

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
              onBlur={handleInputBlur}
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
              <button 
                className='h-12 w-44 border-2 border-black bg-green-600 rounded-lg text-white font-bold'
                onClick={handleAddToCart}
              >
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

      <hr className='my-8 border-gray-300'/> 

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
      <div className='flex flex-wrap justify-center gap-6 mt-8' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        {side.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Single;
