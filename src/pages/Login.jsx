import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [hide, setHide] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { user, logIn } = UserAuth();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await logIn(email, password);
            navigate('/');
        } catch (error) {
            console.log(error);
            setError(error.message);
        }
    };
    const handleShowPassword = (event) => {
        event.preventDefault();
        setShowPassword((prev) => !prev);
    };
    const handlePassword = () => {
        setHide(false);
    };
    const handleBlurPassword = () => {
        setHide(true);
    };
    return (
        <>
            {!user && (
                <div className="w-full h-screen">
                    <img
                        className="hidden sm:block w-full h-full object-cover absolute"
                        src="https://assets.nflxext.com/ffe/siteui/vlv3/73334647-ad51-42a9-b07b-93298cc2a8e1/a13fedda-da19-4b61-8063-5f715391b742/VN-vi-20230605-popsignuptwoweeks-perspective_alpha_website_small.jpg"
                        alt="BackgroundLogin"
                    />
                    <div className="bg-black/60 fixed top-0 left-0 w-full h-full"></div>
                    <div className="fixed w-full h-full px-4 py-24 z-50">
                        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
                            <div className="max-w-[320px] mx-auto py-16">
                                <h1 className="font-bold text-3xl">Sign In</h1>
                                {error ? <p className="p-3 bg-red-400 my-2">{error.message}</p> : null}
                                <form onSubmit={handleSubmit} className="flex flex-col w-full py-4">
                                    <input
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="p-3 my-2 rounded bg-gray-700 outline-none"
                                        type="email"
                                        placeholder="Email"
                                        autoComplete="email"
                                    />
                                    <div className="flex w-full relative">
                                        <input
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="w-full p-3 my-2 pr-10 rounded bg-gray-700 outline-none"
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder="Password"
                                            autoComplete="current-password"
                                            onFocus={handlePassword}
                                            onBlur={handleBlurPassword}
                                        />
                                        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 ">
                                            {!hide && showPassword ? (
                                                <AiFillEyeInvisible
                                                    className="opacity-70"
                                                    onMouseDown={handleShowPassword}
                                                    size={24}
                                                />
                                            ) : (
                                                <></>
                                            )}
                                            {!hide && !showPassword ? (
                                                <AiFillEye
                                                    className="opacity-70"
                                                    onMouseDown={handleShowPassword}
                                                    size={24}
                                                />
                                            ) : (
                                                <></>
                                            )}
                                        </div>
                                    </div>
                                    <button type="submit" className="bg-red-600 py-3 my-6 rounded font-bold">
                                        Sign In
                                    </button>
                                    <div className="flex justify-between items-center text-gray-500">
                                        <p>
                                            <input className="mr-2" type="checkbox" />
                                            Remember me
                                        </p>
                                        <p>Need Help?</p>
                                    </div>
                                    <p className="py-16">
                                        <span className="text-gray-500 pr-2">New to Netflix?</span>
                                        <Link to="/login">Sign Up</Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Login;
