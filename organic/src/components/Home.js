// Home.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faMoneyBill, faRecycle,faTruck,faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
    <>
    <div className='flex justify-center items-center m-40 mt-20 mb-20 gap-7'>
      <div>
    <img src='organic-products-hero.png' alt='main pic'></img>
    </div>
    <div className='flex flex-col justify-center items-start gap-5'>
      <div><img src='logo-leaf.png' alt='leaf'></img></div>
      <div className='font-semibold text-2xl'>Best Quality Products</div>
      <div className='font-bold text-6xl'>Join The Organic Movement!</div>
      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
      <div ><button className=' h-12 w-44 border-2 border-black bg-green-600 rounded-lg text-white font-bold'><div className='flex justify-center items-center gap-3'><div><FontAwesomeIcon icon={faShoppingCart} color="white" />
      </div><div>SHOP NOW</div></div></button></div>
    </div>
    </div>
    <div className=' bg-black h-40 w-auto flex justify-center items-center gap-16 text-white'>
      <div className='bg-gray-800 h-28 w-60 rounded-md flex justify-center items-center gap-4'>
        <div><FontAwesomeIcon icon={faTruck} size='2x' color="green" />
        </div>
        <div><div className='font-bold text-xl'>Free Shipping</div><div>Above ₹200 only</div> </div>
      </div>
      <div className='bg-gray-800 h-28 w-60 rounded-md flex justify-center items-center gap-4'>
        <div><FontAwesomeIcon icon={faAddressBook} size='2x' color="green" />
        </div>
        <div><div className='font-bold text-xl'>Certified Organic</div><div>100% Guarantee</div> </div>
      </div>
      <div className='bg-gray-800 h-28 w-60 rounded-md flex justify-center items-center gap-4'>
        <div><FontAwesomeIcon icon={faMoneyBill} size='2x' color="green" />
        </div>
        <div><div className='font-bold text-xl'>Huge Savings</div><div>At Lowest Price</div> </div>
      </div>
      <div className='bg-gray-800 h-28 w-60 rounded-md flex justify-center items-center gap-4'>
        <div><FontAwesomeIcon icon={faRecycle} size='2x' color="green" />
        </div>
        <div><div className='font-bold text-xl'>Easy Returns</div><div>No Questions Asked</div> </div>
      </div>
    </div>
    <div className='flex flex-col justify-center items-center m-10 gap-4'>
      <div className='font-bold text-3xl'>Best Selling Products</div>
      <div><img src='logo-leaf.png' alt='leaf'></img></div>
    </div>
    </>
  );
}

export default Home;
