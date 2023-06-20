import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import useScrollY from '../hooks/useScrollY';
const Navbar = () => {
    const { user, logOut } = UserAuth();
    const navigate = useNavigate();
    const [scrollY] = useScrollY();
    const handleLogout = async () => {
        try {
            await logOut();
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div
            className={`flex item-center justify-between p-4 fixed z-[1000] w-full ${
                scrollY < 200 ? '' : 'bg-zinc-900'
            } bg-gradient-to-b from-black duration-300`}
        >
            <Link to="/">
                <h1 className="text-red-600 text-4xl font-bold cursor-pointer lg:ml-24">NETFLIX</h1>
            </Link>
            {user?.email ? (
                <div className="lg:mr-24">
                    <Link to="/account">
                        <button className="text-white pr-4">{user.email}</button>
                    </Link>
                    <button onClick={handleLogout} className="bg-red-600 px-6 py-2 cursor-pointer rounded text-white">
                        Log Out
                    </button>
                </div>
            ) : (
                <div className="lg:mr-24">
                    <Link to="/login">
                        <button className="text-white pr-4">Sign In</button>
                    </Link>
                    <Link to="/signup">
                        <button className="bg-red-600 px-6 py-2 cursor-pointer rounded">Sign Up</button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Navbar;
