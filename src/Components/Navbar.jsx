import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import icon from '../assets/icon.png'

const Navbar = () => {
    const[login,setLogin]=useState('');
    const navigate=useNavigate();
  
    return (
        <div className="w-full h-12 flex relative items-end p-1 border-b  bg-slate-500 gap-5 hover:bg-slate-600
         transition-all duration-300 md:flex ">
          <div className='flex flex-row'>
          <div className='mx-3 my-1 sticky flex items-center gap-2'>
        <Link to="/" className="flex items-center gap-2">
          <h1 className='text-2xl font-semibold '>PrimeCart</h1>
          <img className='h-7 w-7'src={icon}></img></Link>
          </div>
          </div>
         
          <ul className='flex items-center justify-center p-1 m-1  space-x-5 gap-1 font-semibold hover:cursor-pointer    '>
            <li>New</li>
            <li>Men</li>
            <li>Women</li>
            <li>Sports</li>
                       
          </ul>
          
          
         <div className=' p-1 my-1 flex gap-1 space-x-7 ml-auto' >
         <p>{new Date().toLocaleString()}</p>
          {/* Icon */}
          <div className='space-x-2 gap-2 ' >
            <img src='https://cdn-icons-png.flaticon.com/512/126/126471.png'
            className="h-6 w-6 cursor-pointer object-cover"
            alt='Likes-icon'>
            
            </img>
          </div>
          <div className=''>
          <img 
            src="https://cdn-icons-png.flaticon.com/512/3602/3602156.png" 
            alt="User Icon" 
            className="h-6 w-6 cursor-pointer object-cover"/>
          </div> 
    
          {/* Buttons */}<div>
            
          <button onClick={()=>navigate('/login')} className="w-16 bg-black h-7 text-white rounded-md font-semibold 
            hover:text-red-600 brightness-75 transition-all duration-300"
            >Login
          </button>
          </div>
          <Link to="/signup"><button className="w-20 h-7 bg-purple-600 text-white rounded-md font-semibold 
            hover:text-red-600 brightness-75 transition-all duration-300">
            Sign up
          </button>
          </Link>
          </div>
        </div>
      );
    };
    
    export default Navbar;