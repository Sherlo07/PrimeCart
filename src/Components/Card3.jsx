import React from 'react'
import shopping from '../assets/shopping.webp';
import suit from '../assets/suit.webp';
import women from '../assets/women.webp';
import kids from '../assets/kids.webp';
import acc from '../assets/acc.avif';
const Card3 = () => {
  return (
    <>
    <div className=' bg-gray-200 w-full shadow-2xl h-[500px] opacity-100 flex  gap-2 justify-center'>

       {/* Box 1 */}
         <div className=' relative m-5 mt-3 w-[500px] h-[412px] border-2 border-gray-600 flex items-center 
          hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer rounded-lg
          shadow-2xl justify-center overflow-hidden'>
          <img className=' w-full h-full object-cover ' src={shopping} alt="Shopping" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 
          selection: text-white text-xl font-bold p-4 ">
            Elevate Your Walk, Define Your Style.
         </div>
       </div>

  {/* Box 2 */}
        <div className='flex flex-col'>
        <div className='mt-3 border-2 border-gray-600 h-[200px] w-[250px] relative rounded-lg 
        hover:scale-105 transition-all duration-300'>
            <img className='absolute w-full h-full object-cover' src={suit}></img>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 
          selection: text-white text-xl font-bold p-1 ">
            Men Maverick.
         </div>
        </div>

        {/* Box 3 */}
        <div className='mt-3 border-2 border-gray-600 h-[200px] w-[250px] relative rounded-lg 
        hover:scale-105 transition-all duration-300'>
 <img className='absolute w-full h-full object-cover' src={women}></img>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 
          selection: text-white text-xl font-bold p-1 ">
           Vogue Vibes
         </div>
        </div>
        </div>


   {/* Box 4 */}

        <div className='flex flex-col'>
            <div className='mt-3 border-2 border-gray-600 h-[200px] w-[250px] relative rounded-lg 
        hover:scale-105 transition-all duration-300'>
            <img className='absolute w-full h-full object-cover' src={kids}></img>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 
          selection: text-white text-xl font-bold p-1 ">
           Junior Style
         </div>


            </div>


            <div className='mt-3 border-2 border-gray-600 h-[200px] w-[250px] relative rounded-lg 
        hover:scale-105 transition-all duration-300'>
            <img className='absolute w-full h-full object-cover' src={acc}></img>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 
          selection: text-white text-xl font-bold p-1 ">
           Accessories
         </div>
        </div>
        </div>

        
    </div>
    </>
  );
};

export default Card3;
