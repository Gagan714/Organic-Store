import React, { useState, useEffect, useRef } from 'react';
import Product from './Products'

function About() {
  const [Customer, setCustomer] = useState(4800);
  const [product, setProduct] = useState(550);
  const [category, setCategory] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const[index,setIndex]=useState(0);
  const counterRef = useRef(null); // Reference for Intersection Observer

  // Intersection Observer to check when the component is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.2 } // 20% of the element should be visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current); // Start observing the element
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current); // Cleanup observer on unmount
      }
    };
  }, []);

  // Counter logic
  useEffect(() => {
    if (isVisible) {
      const increment = () => {
        setCustomer((prevCustomer) => Math.min(prevCustomer + 1, 5000));
        setProduct((prevProduct) => Math.min(prevProduct + 1, 800));
        setCategory((prevCategory) => Math.min(prevCategory + 1, 40));
      };

      const timeout = setTimeout(() => {
        if (Customer < 5000 || product < 800 || category < 40) {
          increment(); // Increment values
        }
      }, 5); // Delay between each increment (5ms)

      return () => clearTimeout(timeout); // Cleanup timeout
    }
  }, [Customer, product, category, isVisible]); // Dependency array
  useEffect(() => {
    const intervak=setInterval(()=>{
      setIndex((index)=>index===Product.length-1? 0 : index+1)
    },3000)
    return () => clearTimeout(intervak)
  }, [index]);

  return (
    <>
      <div className='flex flex-col justify-center items-center gap-20'>
        <div className='font-bold text-3xl'>About Us</div>
        <div>
          <img src='leaf.png' alt='leaf'></img>
        </div>
      </div>
      <div className='flex justify-center items-start gap-5 m-20'>
        <div className='w-1/2'>
          <div className='font-semibold text-3xl mb-10'>
            We Are Your Favourite Store.
          </div>
          <div className='text-gray-500 w-3/4'>
            <p>
              Tuas quisquam quo gravida proident harum, aptent ligula anim
              consequuntur, ultrices mauris, nunc voluptates lobortis, varius,
              potenti placeat! Fuga omnis. Cubilia congue. Recusandae. Vero
              penatibus quasi! Nostra tenetur dignissimos ultrices natus
              distinctio ultrices consequuntur numqu.
            </p>
            <br></br>
            <p>
              Officiis fuga harum porro et? Similique rhoncus atque! Netus
              blanditiis provident nunc posuere. Rem sequi, commodo, lorem
              tellus elit, hic sem tenetur anim amet quas, malesuada proident
              platea corrupti expedita.
            </p>
          </div>
        </div>
        <div className='w-1/2'>
          <img height={600} width={600} src='about-1.jpg' alt='banner'></img>
        </div>
      </div>
      <div
        ref={counterRef} // Reference to observe when this section is visible
        className='bg-black h-40 flex justify-center items-center gap-32 text-white'
      >
        <div className='text-2xl flex flex-col justify-center items-start'>
          <div>Numbers Speak For</div>
          <div>Themselves!</div>
        </div>
        <div>
          <div className='text-6xl font-bold '>{Customer.toLocaleString()}+</div>
          <div className='text-xl font-medium'>Happy Customers</div>
        </div>
        <div>
          <div className='text-6xl font-bold '>{product.toLocaleString()}+</div>
          <div className='text-xl font-medium'>Curated Products</div>
        </div>
        <div>
          <div className='text-6xl font-bold '>{category.toLocaleString()}+</div>
          <div className='text-xl font-medium'>Categories</div>
        </div>
      </div>
      <div className='flex justify-center items-center m-20'>
  <div className='slider-container'>
    <div className='w-[600px] h-[600px] overflow-hidden'>
      <img
        src={Product[index].image}
        alt='p'
        className='w-full h-full object-cover' // Ensures image fills the container and keeps aspect ratio
      />
    </div>
  </div>
</div>

    </>
  );
}

export default About;
