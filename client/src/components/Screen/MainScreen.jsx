import React, { useState } from 'react';
import Top from './Top';
import Play from './Play';
import { useLoaderData } from 'react-router-dom';
import Cards from './Cards';
import { MusicProvider } from '../../contexts/MusicContext';

function MainScreen() {
    const tracks = useLoaderData();
    const [songsList, setSongsList] = useState(tracks);

    return (
        <div className='text-white bg-[#121212] w-full rounded-xl h-full relative'>
            <Top />
            <MusicProvider value={[songsList, setSongsList]}>
                <Cards />
            </MusicProvider>
            <Play />
        </div>
    )
}

export default MainScreen