import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faMoneyBill,faRecycle, faTruck, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import products from './Products'; 
import Card from './Card';

function Home() {
  // Get the first 4 products
  const firstFourProducts = products.slice(0,4);
  const lastFourProducts = products.slice(8,12);

  return (
    <>
      <div className='flex justify-center items-center m-40 mt-20 mb-20 gap-7'>
        <div>
          <img src='organic-products-hero.png' alt='main pic' />
        </div>
        <div className='flex flex-col justify-center items-start gap-5'>
          <div><img src='logo-leaf.png' alt='leaf' /></div>
          <div className='font-semibold text-2xl'>Best Quality Products</div>
          <div className='font-bold text-6xl'>Join The Organic Movement!</div>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
          <div>
            <button className='h-12 w-44 border-2 border-black bg-green-600 rounded-lg text-white font-bold'
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className='flex justify-center items-center gap-3'>
                <div><FontAwesomeIcon icon={faShoppingCart} color="white" /></div>
                <div>SHOP NOW</div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className='bg-black h-40 w-auto flex justify-center items-center gap-16 text-white'>
        <div className='bg-gray-800 h-28 w-60 rounded-md flex justify-center items-center gap-4'>
          <div><FontAwesomeIcon icon={faTruck} size='2x' color="green" /></div>
          <div><div className='font-bold text-xl'>Free Shipping</div><div>Above ₹200 only</div></div>
        </div>
        <div className='bg-gray-800 h-28 w-60 rounded-md flex justify-center items-center gap-4'>
          <div><FontAwesomeIcon icon={faAddressBook} size='2x' color="green" /></div>
          <div><div className='font-bold text-xl'>Certified Organic</div><div>100% Guarantee</div></div>
        </div>
        <div className='bg-gray-800 h-28 w-60 rounded-md flex justify-center items-center gap-4'>
          <div><FontAwesomeIcon icon={faMoneyBill} size='2x' color="green" /></div>
          <div><div className='font-bold text-xl'>Huge Savings</div><div>At Lowest Price</div></div>
        </div>
        <div className='bg-gray-800 h-28 w-60 rounded-md flex justify-center items-center gap-4'>
          <div><FontAwesomeIcon icon={faRecycle} size='2x' color="green" /></div>
          <div><div className='font-bold text-xl'>Easy Returns</div><div>No Questions Asked</div></div>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center m-10 gap-4'>
        <div className='font-bold text-3xl'>Best Selling Products</div>
        <div><img src='logo-leaf.png' alt='leaf' /></div>
      </div>
      <div className='flex flex-wrap justify-center gap-6'>
        {firstFourProducts.map((product) => (
          <Card product={product}/>
        ))}
      </div>
      <div className='flex justify-center items-center mb-14 mt-16'><img src='leaf.png' alt='leaf'></img></div>
      <div className='bg-black h-32 w-full flex justify-around items-center gap-80'>
        <div className='text-white text-4xl font-bold'>Get 25% Off On Your First Purchase!</div>
        <div>
            <button className='h-12 w-44 border-2 border-black bg-green-600 rounded-lg text-white font-bold'
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className='flex justify-center items-center gap-3'>
                <div><FontAwesomeIcon icon={faShoppingCart} color="white" /></div>
                <div>SHOP NOW</div>
              </div>
            </button>
          </div>
      </div>
      <div className='w-full bg-slate-300 font-semibold text-2xl text-black flex justify-center items-center p-3'>Try It For Free. No Registration Needed.</div>
      <div className='flex flex-col justify-center items-center m-10 mt-24 gap-4'>
        <div className='font-bold text-3xl'>Trending Products</div>
        <div><img src='logo-leaf.png' alt='leaf' /></div>
      </div>
      <div className='flex flex-wrap justify-center gap-6'>
        {lastFourProducts.map((product) => (
          <Card product={product} />
        ))}
      </div>
      <div className='flex justify-center items-center mb-14 mt-16'><img src='leaf.png' alt='leaf'></img></div>
      <div className='flex justify-center items-center'>
        <div className='font-semibold text-2xl'>Featured Brands:</div>
        <div><img src='logo-1.svg' alt='logo'></img></div>
        <div><img src='logo-2.svg' alt='logo'></img></div>
        <div><img src='logo-3.svg' alt='logo'></img></div>
        <div><img src='logo-4.svg' alt='logo'></img></div>
        <div><img src='logo-5.svg' alt='logo'></img></div>
      </div>
    </>
  );
}

export default Home;
