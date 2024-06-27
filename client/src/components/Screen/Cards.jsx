import React, { useCallback, useState, useRef } from 'react';
import Card from '../Commons/Card';
import { useMusic } from '../../contexts/MusicContext';

function Cards() {

    const [songsList, setSongsList] = useMusic();

    return (
        <div className='my-4 mx-2 grid sm:grid-cols-4 grid-cols-1 min-[360px]:grid-cols-2 md:grid-cols-5 gap-4 overflow-y-scroll h-[68%] overflow-x-hidden'>
            {
                songsList.map((item) => (
                    <Card
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        artist={item.artist}
                        album={item.album}
                        audio={item.audio} 
                        duration={item.duration}
                    />
                ))
            }
        </div>
    )
}

export default Cards