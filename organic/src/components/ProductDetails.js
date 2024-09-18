import React from 'react';
import { useParams } from 'react-router-dom';
import products from './Products'; // Assuming products data is stored here

function ProductDetails() {
  const { id } = useParams(); // Get the product ID from the URL
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <img src={product.image} alt={product.name} className="w-64 h-64" />
      <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
      <p>Price: ₹{product.price}</p>
      <p>Reviews: {product.reviews}</p>
      <p>Description: {product.description}</p>
    </div>
  );
}

export default ProductDetails;
