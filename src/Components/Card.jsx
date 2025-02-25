
import React from 'react';
import model from '../assets/model.avif';
import india from '../assets/india.avif';
import kid from '../assets/kid.avif';

const Card = () => {
  return (
    <>
<div className=" p-7   grid grid-flow-col">
<div className="relative inline-block hover:scale-105 transition-all duration-300">
  <img 
    className="h-[620px] w-[410px] rounded-lg object-cover " 
    src={model} 
    alt="Profile" 
  />
  <p className="absolute bottom-0 left-2 bg-black text-white px-2 py-1 rounded">
    For him
  </p>
</div>

 <div className='relative inline-block hover:scale-105 transition-all duration-300'>
  <img className="h-50 w-[410px] rounded-lg object-cover"
  src={india}
  alt="model-img"></img>
  <p className="absolute bottom-2 left-2 bg-black text-white px-2 py-1 rounded"> For Her</p>
  </div>
<div className='relative inline-block hover:scale-105 transition-all duration-300'>
  <img className="h-50 w-[410px] rounded-lg object-cover" 
  src={kid}
  alt="kids-img">
  </img>
  <p className='absolute bottom-2 left-2 bg-black text-white px-2 py-1 rounded'>For Kids</p>
  </div>
 


</div>

</>
  );
};

export default Card;
