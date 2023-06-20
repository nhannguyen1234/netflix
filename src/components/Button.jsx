import React, { useRef, useState } from 'react';
import useScrollY from '../hooks/useScrollY';
import { BsArrowUpCircleFill } from 'react-icons/bs';
import '../components/Button.scss';
const Button = () => {
    const [scrollY] = useScrollY();
    const iconRef = useRef();
    console.log(iconRef);
    const handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div ref={iconRef} className="container">
            <BsArrowUpCircleFill
                className={`fixed top-[800px] right-16 text-white opacity-80 hover:opacity-100 hover:scale-125 duration-300 ${
                    scrollY < 400 ? 'btn-fadeOut' : 'btn-fadeIn'
                }`}
                onClick={handleScrollTop}
                size={48}
            />
        </div>
    );
};

export default Button;
