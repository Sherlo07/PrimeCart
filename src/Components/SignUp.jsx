import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const navigate = useNavigate(); // Corrected variable name

    const handlePage = (e) => {
        e.preventDefault();

        // Simulating form submission
        alert('Account created successfully! Redirecting to Home...');

        // Redirect user to Home page after sign-up
        navigate('/login');
    };

    return (
        <>
            <div className="flex flex-col items-center bg-gray-200">
                {/* Heading */}
                <p className="text-5xl font-bold text-blue-900 m-5">IrfanTrendz</p>

                {/* Subheading */}
                <p className="text-2xl text-amber-800 mt-2">Create a new account</p>

                {/* Content Box */}
                <div className="mt-6 border-2 p-9 border-gray-400 shadow-lg h-[550px] w-[470px] space-x-6">
                    <form onSubmit={handlePage}>
                        <input
                            className="w-full border-2 border-gray-300 rounded-sm p-2"
                            type="text"
                            placeholder="First Name"
                            value={firstname}
                            required
                            onChange={(e) => setFirstName(e.target.value)}
                        />

                        <input
                            className="w-full border-2 border-gray-300 rounded-sm p-2 mt-3"
                            type="text"
                            placeholder="Last Name"
                            value={lastname}
                            required
                            onChange={(e) => setLastName(e.target.value)}
                        />

                        <div className="flex flex-col mt-5">
                            <p className="text-sm mt-3">Gender?</p>
                            <label className="space-x-4 flex">
                                <input type="radio" name="gender" value="male" /> Male
                                <input type="radio" name="gender" value="female" /> Female
                                <input type="radio" name="gender" value="not to say" /> Others
                            </label>

                            <input
                                className="border-2 border-gray-200 rounded-md mt-7 p-2 w-full"
                                type="text"
                                placeholder="Email address or mobile number"
                                required
                            />

                            <input
                                className="border-2 border-gray-200 rounded-md mt-4 p-2 w-full"
                                type="password"
                                placeholder="New password"
                                required
                            />

                            <p className="text-blue-500 pt-6 mt-4">
                                People who use our service may have uploaded your contact information to IrfanTrendz.
                            </p>

                            <label className="text-[12px] text-gray-500 mt-4">
                                <input type="checkbox" className="mr-2" required />
                                By clicking Sign Up, you agree to our{" "}
                                <a href="#" className="text-blue-600 underline">
                                    Terms
                                </a>
                                ,{" "}
                                <a href="#" className="text-blue-600 underline">
                                    Privacy Policy
                                </a>
                                , and{" "}
                                <a href="#" className="text-blue-600 underline">
                                    Cookies Policy
                                </a>
                                . You may receive SMS notifications from us.
                            </label>

                            <button
                                type="submit"
                                className="bg-green-600 text-white font-bold mt-6 rounded-md p-3 w-full hover:bg-green-700"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default SignUp;
