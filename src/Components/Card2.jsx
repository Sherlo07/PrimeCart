import React from 'react'
import nike from '../assets/nike.avif';
import shoes from '../assets/shoes.jpg';
import brown from'../assets/brown.avif';

const Card2 = () => {
  return (
    <>
    <div className="flex flex-wrap justify-center items-center gap-6  mt-16">
    {/* Image 1 */}
    <div>
    <img 
        className="h-[300px] shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer rounded-lg" 
        src={nike} 
        alt="Nike Shoes"
    /> <p className='mt-2 font-bold text-black text-center text-xl '>Skyline Sneakers     </p>
    <div>
        <p className='mt-2 font-bold text-black text-center text-xl '>400$</p>
    </div>
    </div>

    {/* Image 2 */}
    <div>
    <img 
        className="h-[300px] shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer rounded-lg" 
        src={shoes} 
        alt="Shoes"
    /><p className='mt-2 font-bold text-black text-center text-xl '>Stealth Blue</p>
   
    <div>
        <p className='mt-2 font-bold text-black text-center text-xl '>250$</p>
    </div>
    </div>
    <div>
    {/*Image-3 */}
    <img className="h-[300px] shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer rounded-lg" 
    src={brown}></img>
    <p className='mt-2 font-bold text-black text-center text-xl'>UrbanSoles</p>
    <div>
        <p className='mt-2 font-bold text-black text-center text-xl '>500$</p>
    </div>
    </div>
     {/*Image-4 */}
     
</div>
<div className='bg-black mt-7 flex items-center justify-center '>

    <p className='text-white p-1 text-xl from-neutral-400'>Elevate Your Walk, Define Your Style.</p>
    </div>
    
    
    
    </>

  );
};
export default Card2;