import React from 'react';
import womenshirt from '../assets/womenshirt.webp';
import women2  from '../assets/women2.avif';
import tshirt from '../assets/tshirt.webp';
import shoes2 from '../assets/shoes2.webp';

const Card6 = () => {
  return (
    <div id="women" className="w-full  bg-gray-300 flex flex-col p-5">
      {/* Title */}
      <p className="text-3xl font-semibold text-center">Women's Latest</p>

      {/* Box Container */}
      <div className="flex flex-wrap justify-center gap-8 mt-6 px-6">
        
        {/* Box 1 */}
        <div className="flex flex-col items-center w-[250px]">
          <div className="h-[300px] w-full border-2 border-gray-200 bg-white rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 shadow-md">
            <img className="h-full w-full object-cover" src={womenshirt} alt="Shirt" />
          </div>
          <p className="mt-3 font-semibold text-lg">Classic White Blazer</p>
          <p className="text-gray-700 font-semibold">$55</p>
        </div>
      
        {/* Box 2 */}
        <div className="flex flex-col items-center w-[250px]">
          <div className="h-[300px] w-full border-2 border-gray-200 bg-white rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 shadow-md">
            <img className="h-full w-full object-cover" src={women2} alt="White Suit" />
          </div>
          <p className="mt-3 font-semibold text-lg">Zebra Print Shirt</p>
          <p className="text-gray-700 font-semibold">$150</p>
        </div>

        {/* Box 3 */}
        <div className="flex flex-col items-center w-[250px]">
          <div className="h-[300px] w-full border-2 border-gray-200 bg-white rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 shadow-md">
            <img className="h-full w-full object-cover" src={tshirt} alt="Pant" />
          </div>
          <p className="mt-3 font-semibold text-lg">Oversized Black T-Shirt</p>
          <p className="text-gray-700 font-semibold">$40</p>
        </div>

        {/* Box 4 */}
        <div className="flex flex-col items-center w-[250px]">
          <div className="h-[300px] w-full border-2 border-gray-200 bg-white rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 shadow-md">
            <img className="h-full w-full object-cover" src={shoes2} alt="Nike Air Jordan" />
          </div>
          <p className="mt-3 font-semibold text-lg">Black High Heels</p>
          <p className="text-gray-700 font-semibold">$500</p>
        </div>

      </div>
    </div>
  );
};

export default Card6;
