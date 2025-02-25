import React from 'react';
import shirt1 from '../assets/shirt1.avif';
import whitesuit from '../assets/whitesuit.jpeg';
import pant from '../assets/pant.jpeg';
import jordon from '../assets/jordon.avif';

const Card5 = () => {
  return (

    <div id="men" className="w-full  bg-gray-300 flex flex-col p-6">
      {/* Title */}
      <p className="text-3xl font-semibold text-center">Men's Latest</p>

      {/* Box Container */}
      <div className="flex flex-wrap justify-center gap-8 mt-6 px-6">
        
        {/* Box 1 */}
        <div className="flex flex-col items-center w-[250px]">
          <div className="h-[300px] w-full border-2 border-gray-200 bg-white rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 shadow-md">
            <img className="h-full w-full object-cover" src={shirt1} alt="Shirt" />
          </div>
          <p className="mt-3 font-semibold text-lg">Classic Spring White Shirt</p>
          <p className="text-gray-700 font-semibold">$65</p>
        </div>
      
        {/* Box 2 */}
        <div className="flex flex-col items-center w-[250px]">
          <div className="h-[300px] w-full border-2 border-gray-200 bg-white rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 shadow-md">
            <img className="h-full w-full object-cover" src={whitesuit} alt="White Suit" />
          </div>
          <p className="mt-3 font-semibold text-lg">White Suit</p>
          <p className="text-gray-700 font-semibold">$100</p>
        </div>

        {/* Box 3 */}
        <div className="flex flex-col items-center w-[250px]">
          <div className="h-[300px] w-full border-2 border-gray-200 bg-white rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 shadow-md">
            <img className="h-full w-full object-cover" src={pant} alt="Pant" />
          </div>
          <p className="mt-3 font-semibold text-lg">Brown Jeans Pant</p>
          <p className="text-gray-700 font-semibold">$70</p>
        </div>

        {/* Box 4 */}
        <div className="flex flex-col items-center w-[250px]">
          <div className="h-[300px] w-full border-2 border-gray-200 bg-white rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 shadow-md">
            <img className="h-full w-full object-cover" src={jordon} alt="Nike Air Jordan" />
          </div>
          <p className="mt-3 font-semibold text-lg">Nike Air Jordan</p>
          <p className="text-gray-700 font-semibold">$700</p>
        </div>

      </div>
    </div>
  );
};

export default Card5;
