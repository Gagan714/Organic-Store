import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Card({ product }) {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleClick = () => {
    navigate('/single', { state: { product } }); // Pass the product as state
  };

  return (
    <div
      key={product.id}
      className='border rounded-md p-4 w-80 cursor-pointer'
      onClick={handleClick} // Attach click handler
    >
      <img src={product.image} alt={product.name} className='w-full h-60 object-cover mb-2' />
      <div className='text-center'>
        <p className='text-sm text-gray-500'>{product.category}</p>
        <h3 className='font-bold text-xl mt-1'>{product.name}</h3>
        <p className='text-lg mt-1'>₹{product.price}</p>
        <div className='mt-1'>
          {[...Array(5)].map((_, index) => (
            <FontAwesomeIcon
              key={index}
              icon={faStar}
              color={index < Math.round(product.review) ? 'gold' : 'gray'}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
