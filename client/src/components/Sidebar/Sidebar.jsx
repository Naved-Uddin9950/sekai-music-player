import React from 'react';
import Topbar from './Topbar';
import Bottombar from './Bottombar';

function Sidebar() {
  return (
    <div className='w-1/4 h-full flex flex-col gap-2'>
        <Topbar />
        <Bottombar />
    </div>
  )
}

export default Sidebar