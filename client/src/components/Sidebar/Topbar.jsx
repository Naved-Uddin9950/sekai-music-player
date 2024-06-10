import React from 'react';
import logo from '/images/logo.jpeg';
import home from '/images/home.svg';
import search from '/images/search.svg';
import { NavLink } from 'react-router-dom';

function Topbar() {
    return (
        <div className='text-white bg-[#121212] w-full rounded-xl py-4 px-6 h-1/4'>
            <div className='sm:block'>
                <ul className='flex flex-col gap-3'>
                    <NavLink
                        to='/'
                        className={({ isActive }) => `${isActive ? "font-bold" : "font-thin"} flex flex-row items-center gap-2`}
                    >
                        <img
                            src={logo}
                            alt="logo"
                            className='w-7 rounded-full'
                        />Sekai Player
                    </NavLink>

                    <NavLink
                        to='/'
                        className={({ isActive }) => `${isActive ? "font-bold" : "font-thin"} flex flex-row items-center gap-2`} 
                    >
                        <img 
                            src={home}
                            alt="home"
                            className='w-6'
                        />Home
                    </NavLink>

                    <NavLink
                        to='#'
                        className={({ isActive }) => `${isActive ? "font-bold" : "font-thin"} flex flex-row items-center gap-2`} 
                    >
                        <img 
                            src={search}
                            alt="search"
                            className='w-6'
                        />Search
                    </NavLink>
                </ul>
            </div>
        </div>
    )
}

export default Topbar