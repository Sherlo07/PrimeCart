import React from 'react';
import icon from '../assets/icon.png';

const Bottom = () => {
  return (<>
<div className='w-full h-[250px]  p-9 flex justify-between items-center bg-zinc-800'>

{/*Box 1 */}
  <div className=' h-[200px] w-[300px] flex flex-col  gap-2 p-4 rounded-lg'>
  <div className="flex items-center space-x-2">
      <h1 className="text-2xl font-semibold text-white">PrimeCart</h1>
      <img className="h-7 w-7" src={icon} alt="PrimeCart Logo" />
    </div>
              
              <div className="mt-4 text-white font-extralight">
                <p >Address:Hyderabad</p>
      <a href="mailto:irfanmohammad0607@gmail.com" className="text-blue-500 hover:underline">
  Email:irfanmohammad0607@gmail.com
</a>
      <p>Contact:8185847964</p>
    </div>
 </div>
 {/*Box 2 */}

  <div className=' h-[200px] w-[300px] flex flex-col gap-2 p-4 text-white  '>
  <div className="flex items-center space-x-2">
      <h1 className="text-2xl font-semibold text-white">Shopping & categories</h1>
   
    </div>
    <div className="mt-4 text-white font-extralight flex flex-col">
                <a href="#men" >Men's Shopping</a>
                <a href="#women" >Women's Shopping</a>
                    
    
    </div>
    </div>



    {/*Box 3 */}

  <div className=' h-[200px] w-[300px] flex flex-col gap-2 p-4 text-white '>
  <div className="flex items-center space-x-2">
      <h1 className="text-2xl font-semibold text-white">Useful Links</h1>
   
    </div>
    <div className="mt-4 text-white font-extralight">
                <p >Homepage</p>
                <p >About us</p>
                    
      <p>Help</p>
    </div>
              

  </div>

{/*Box 4 */}
  <div className='h-[200px] w-[300px] p-4 gap-2 '>
  <div className="flex items-center space-x-2">
      <h1 className="text-2xl font-semibold text-white">Help & Information</h1>
   
    </div>
    <div className="mt-4 text-white font-extralight">
                <p >FAQ</p>
                <p >Shipping</p>
                    
      <p>Tracking Id</p>
    </div>
</div>





</div>

</>
  );
};

export default Bottom;
