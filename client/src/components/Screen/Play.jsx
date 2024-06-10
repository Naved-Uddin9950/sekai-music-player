import React from 'react';
import prev from '/images/prev.svg';
import next from '/images/next.svg';
import play from '/images/play.svg';

function Play() {
  return (
    <div className='absolute bottom-0 bg-[#1c1c1c] py-4 px-6 rounded-b-xl flex flex-col justify-between items-center w-full'>
        <div>Artist info</div>

        <div className='flex flex-row items-center gap-6'>
            <img src={ prev } alt="previous" />
            <img src={ play } alt="play" />
            <img src={ next } alt="next" />
        </div>
    </div>
  )
}

export default Play