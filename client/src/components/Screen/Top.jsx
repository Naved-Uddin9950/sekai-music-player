import React from 'react';
import rightArrow from '/images/rightArrow.svg';
import leftArrow from '/images/leftArrow.svg';

function Top() {
  return (
    <div className='bg-[#1c1c1c] py-4 px-6 rounded-t-xl flex flex-row justify-between items-center'>
        <div className='flex flex-row gap-4'>
            <img src={ leftArrow } alt="previous" />
            <img src={ rightArrow } alt="next" />
        </div>

        <div className='flex flex-row gap-4'>
            <button className='text-[#6b6b6b] font-bold'>Signup</button>
            <button className='rounded-[2rem] bg-white text-black font-semibold py-4 px-10'>Login</button>
        </div>
    </div>
  )
}

export default Top