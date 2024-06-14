import React, { useEffect, useRef, useState } from 'react';
import prev from '/images/prev.svg';
import next from '/images/next.svg';
import play from '/images/play.svg';
import pause from '/images/pause.svg';
import { usePlay } from '../../contexts/PlayContext';
import { useMusic } from '../../contexts/MusicContext';
import { useDuration } from '../../hooks';

function Play() {

  const { isPlaying, setIsPlaying } = usePlay();
  const [isPaused, setIsPaused] = useState(true);
  const audioInstance = useRef(new Audio());
  const playRef = useRef();
  // const remainTime = useDuration(duration);
  const [remain, setRemain] = useState(isPlaying.duration);

  const musicPlay = () => {
    setIsPaused((prev) => !prev);
  }

  useEffect(() => {
    if (isPlaying.url) {
      audioInstance.current.src = isPlaying.url;
      if (!isPaused) {
        audioInstance.current.play();
        playRef.current.src = pause;
      } else {
        audioInstance.current.pause();
        playRef.current.src = play;
      }
    }
  }, [isPlaying.url, isPaused]);

  useEffect(() => {
    audioInstance.current.addEventListener('ended', () => setIsPaused(true));

    return () => {
      audioInstance.current.removeEventListener('ended', () => setIsPaused(true));
    }
  }, []);

  setInterval(() => {
    setRemain(prev => prev - 1);
    const minutes = Math.floor(remain / 60);
    const seconds = remain % 60;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    setRemain(`${minutes}:${formattedSeconds}`);
    console.log(remain);    
  }, 1000);

  // useEffect(() => {
  //   setRemain(prev => prev - 1);
  //   const minutes = Math.floor(remain / 60);
  //   const seconds = remain % 60;
  //   const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  //   setRemain(`${minutes}:${formattedSeconds}`);
  //   console.log('hihihihihihi');
  // }, [isPlaying.duration]);

  const [per, setPer] = useState(20);

  return (
    <div className='absolute bottom-0 bg-[#1c1c1c] py-4 px-6 rounded-b-xl flex flex-col justify-between items-center w-full'>
      <div className='flex flex-col items-start w-full gap-2'>
        <div className='font-bold text-2xl'>{isPlaying.title} ( {isPlaying.artist} )</div>
        <div>{isPlaying.artist}</div>
        <div className='w-full h-2 bg-[#131212] rounded-xl'>
          <div   style={{width:`${per}%`}} className={`h-full  bg-blue-500 rounded-xl`}></div>
        </div>
      </div>
      <div className='flex flex-row items-center gap-6'>
        <img
          src={prev}
          alt="previous"
          className='hover:cursor-pointer'
        />

        <img
          src={play}
          alt="play"
          onClick={musicPlay}
          ref={playRef}
          className='hover:cursor-pointer'
        />

        <img
          src={next}
          alt="next"
          className='hover:cursor-pointer'
        />
      </div>

      <div className='flex flex-row w-full justify-between items-center'>
        <div>{isPlaying.time}</div>
        <div>- {isPlaying.duration}</div>
      </div>
    </div>
  )
}

export default Play