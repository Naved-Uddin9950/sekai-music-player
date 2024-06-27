import React, { useEffect, useState } from 'react';
import Topbar from './Topbar';
import Bottombar from './Bottombar';
import { useMenu } from '../../contexts/MenuContext';

function Sidebar() {

  const [toggleMenu, setToggleMenu] = useState('hidden');
  const { isMenuOpen } = useMenu();

  useEffect(() => {
    isMenuOpen ? setToggleMenu('sm:flex flex-col gap-2 hidden') : setToggleMenu('hidden');
  }, [isMenuOpen]);

  return (
    <div className={`w-1/4 rounded-xl ${toggleMenu}`}>
      <Topbar />
      <Bottombar />
    </div>
  )
}

export default Sidebar