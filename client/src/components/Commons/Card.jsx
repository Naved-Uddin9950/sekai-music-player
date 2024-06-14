import React, { useEffect, useState } from 'react';
import { useDuration } from '../../hooks';
import { useMusic } from '../../hooks';
import { usePlay } from '../../contexts/PlayContext';

function Card({
    id,
    title,
    image,
    artist,
    album,
    audio,
    duration
}) {

    const time = useDuration(duration);
    const { isPlaying, setIsPlaying } = usePlay();

    const handlePlay = () => {
        setIsPlaying({
            id: id,
            url: audio,
            duration: duration,
            time: time,
            artist: artist,
            title: title
        });
    }

    return (
        <div className='bg-[#1c1c1c] rounded-xl shadow-sm hover:cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105' onClick={handlePlay}>
            <div className='w-full h-auto'>
                {
                    image ? <img src={image} alt={title} className='rounded-t-xl' /> : <img src="https://placehold.co/600x400?text=NO+IMAGE" alt={title} className='rounded-t-xl' />
                }
            </div>

            <div className='py-2 px-4'>
                <h2 className='text-xl mb-2'>{title} ({artist}) </h2>
                <p>Album : {album}</p>
                <p>Duration : {time}</p>
            </div>
        </div>
    )
}

export default Card