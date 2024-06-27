import React, { useEffect, useState } from 'react';
import Top from './Top';
import Play from './Play';
import { useLoaderData } from 'react-router-dom';
import Cards from './Cards';
import { MusicProvider } from '../../contexts/MusicContext';
import Topbar from '../Sidebar/Topbar';
import Bottombar from '../Sidebar/Bottombar';
import { useMenu } from '../../contexts/MenuContext';

function MainScreen() {
    const tracks = useLoaderData();
    const [songsList, setSongsList] = useState(tracks);
    const [toggleMenu, setToggleMenu] = useState('block');
    const { isMenuOpen } = useMenu();

    useEffect(() => {
        isMenuOpen ? setToggleMenu('flex flex-col sm:hidden') : setToggleMenu('hidden');
    }, [isMenuOpen]);

    return (
        <div className='text-white bg-[#121212] w-full sm:rounded-xl h-full relative'>
            <MusicProvider value={[songsList, setSongsList]}>
                <Top />
                <div className={`w-full rounded-xl ${toggleMenu}`}>
                    <Topbar />
                    <Bottombar />
                </div>
                <Cards />
                <Play />
            </MusicProvider>
        </div>
    )
}

export default MainScreen