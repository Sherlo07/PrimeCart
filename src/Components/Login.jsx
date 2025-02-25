import React from 'react';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom'; 

    const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    // Save login data to local storage
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);

    alert('Login details saved successfully!');
    const savedEmail = localStorage.getItem('userEmail');
const savedPassword = localStorage.getItem('userPassword');
console.log(savedEmail, savedPassword);
    // Clear form fields after submission
    setEmail('');
    setPassword('');
    navigate('/');
  };
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Branding Section */}
      <div className="w-1/2 flex flex-col justify-center items-start pl-20">
        <h1 className="text-5xl font-bold text-blue-900">IrfanTrendz</h1>
        <p className="text-xl text-gray-600 mt-2 italic">Wear the Trend, Own the Moment – Define Your Style,
         Elevate Your Presence.</p>
      </div>

      {/* Right Login Section */}
      <div className="w-1/2 flex justify-center items-center">
        <div className="bg-white shadow-lg rounded-lg p-8 w-96">
          <h1 className="text-3xl font-semibold text-center text-gray-900 mb-6">Login</h1>

         
        <form onSubmit={handleSubmit}>
          <input
            className="border border-gray-300 text-black w-full h-12 px-4 rounded-md mb-4 focus:outline-none 
            focus:ring-2 focus:ring-blue-500"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email or phone number"
            required
          />

          <input
            className="border border-gray-300 text-black w-full h-12 px-4 rounded-md mb-4 focus:outline-none 
            focus:ring-2 focus:ring-blue-500"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />

          <button
            type="submit"
            className="w-full h-12 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

          <p className="text-sm text-gray-600 text-center mt-4">
            Don't have an account?{' '}
            <a href="/signup" className="text-blue-600 hover:underline">Sign up</a>
          </p>
        </div>
      </div>
    </div>
    
  );
};

export default Login;
