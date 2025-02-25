import React from 'react';
import ramp from '../assets/ramp.mp4';

const Card4 = () => {
  return (
    <>
      <div className='h-[500px] w-full  overflow-hidden flex bg-black'>
        <video 
          className='w-[750px] h-full object-cover' 
          src={ramp} 
          autoPlay 
          loop 
          muted 
          
        ></video>
      <div className='flex flex-col items-center justify-center ml-32 p-3'>
            <p className='text-white text-2xl font-bold '>Make your style unique,</p> 
            <p className='text-white text-2xl font-bold '> let your fashion speak for itself</p>
            <p className='text-white text-2xl font-thin mt-9'>Road to Unity</p>
            <button className='text-white mt-6 rounded-lg text-2xl font-bold border-2 border-white
             hover:scale-105 transition-all duration-300 p-2 '> Shop Now </button>
           
            </div>
      </div>
    </>
  );
};

export default Card4;
