import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Card({ product }) {
  const navigate = useNavigate();

  // Function to handle the card click event
  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      key={product.id}
      className='border rounded-md p-4 w-80 cursor-pointer'  // Added cursor-pointer for hover effect
      onClick={handleCardClick}  // Added onClick to navigate to product details
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
