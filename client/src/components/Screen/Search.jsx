import React, { useEffect, useState } from 'react';
import Top from './Top';
import { MusicProvider } from '../../contexts/MusicContext';
import Cards from './Cards';
import Play from './Play';
import { useLoaderData } from 'react-router-dom';
import Topbar from '../Sidebar/Topbar';
import Bottombar from '../Sidebar/Bottombar';
import { useMenu } from '../../contexts/MenuContext';

function Search() {
  const tracks = useLoaderData();
  const [songsList, setSongsList] = useState(tracks);
  const [toggleMenu, setToggleMenu] = useState('block');
  const { isMenuOpen } = useMenu();

  useEffect(() => {
    isMenuOpen ? setToggleMenu('flex flex-col sm:hidden') : setToggleMenu('hidden');
  }, [isMenuOpen]);

  return (
    <div className='text-white bg-[#121212] w-full rounded-xl h-full relative'>
      <Top />
      <div className={`w-full rounded-xl ${toggleMenu}`}>
        <Topbar />
        <Bottombar />
      </div>
      <MusicProvider value={[songsList, setSongsList]}>
        <Cards />
      </MusicProvider>
      <Play />
    </div>
  )
}

export default Search