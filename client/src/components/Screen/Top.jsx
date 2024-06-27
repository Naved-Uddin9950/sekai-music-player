import React from 'react';
import menu from '/images/menu.svg';
import { useMenu } from '../../contexts/MenuContext';

function Top() {

  const { setIsMenuOpen } = useMenu();

  return (
    <div className='bg-[#1c1c1c] py-4 px-6 sm:rounded-t-xl flex flex-row justify-between items-center'>

      <img
        src={menu}
        alt="menu"
        className='w-8 cursor-pointer my-3'
        onClick={() => setIsMenuOpen((prev) => !prev)}
      />

      <div className='flex flex-row gap-4'>
        <button className='text-[#6b6b6b] font-bold'>Signup</button>
        <button className='rounded-[2rem] bg-white text-black font-semibold py-4 px-10'>Login</button>
      </div>
    </div>
  )
}

export default Top