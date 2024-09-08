import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <>
      <div className='flex flex-col justify-center items-center gap-20'>
        <div className='font-bold text-3xl'>Get In Touch :)</div>
        <div>
          <img src='leaf.png' alt='leaf'></img>
        </div>
      </div>
      <div className='bg-gray-200 h-80 mt-9 m-36 mb-0 flex justify-center items-center gap-32'>
        {/* Phone */}
        <div className='border-[1px] border-black h-40 w-60 flex flex-col justify-center items-center'>
          <FontAwesomeIcon icon={faPhone} className='text-3xl mb-2' color='green' />
          <div>+123 4567 7891</div>
          <div>+123 4567 7892</div>
        </div>
        {/* Email */}
        <div className='border-[1px] border-black h-40 w-60 flex flex-col justify-center items-center'>
          <FontAwesomeIcon icon={faEnvelope} className='text-3xl mb-2' color='green'/>
          <div>email@example.com</div>
          <div>support@example.com</div>
        </div>
        {/* Location */}
        <div className='border-[1px] border-black h-40 w-60 flex flex-col justify-center items-center'>
          <FontAwesomeIcon icon={faMapMarkerAlt} className='text-3xl mb-2' color='green' />
          <div>1234 Address St</div>
          <div>City, Country</div>
        </div>
      </div>
    </>
  );
}

export default Contact;
