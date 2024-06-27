import React, { useEffect, useRef, useState } from 'react';
import prev from '/images/prev.svg';
import next from '/images/next.svg';
import play from '/images/play.svg';
import pause from '/images/pause.svg';
import { usePlay } from '../../contexts/PlayContext';

function Play() {
  const { isPlaying } = usePlay();
  const [isPaused, setIsPaused] = useState(true);
  const audioInstance = useRef(new Audio());
  const playRef = useRef();
  const [remainTime, setRemainTime] = useState("00:00");
  const [per, setPer] = useState(0);

  const musicPlay = () => {
    setIsPaused((prev) => !prev);
  }

  useEffect(() => {
    const audio = audioInstance.current;

    if (isPlaying.url && audio.src !== isPlaying.url) {
      audio.src = isPlaying.url;
    }

    if (isPaused) {
      audio.pause();
      playRef.current.src = play;
    } else {
      audio.play();
      playRef.current.src = pause;
    }

    const updateRemainTime = () => {
      const remainingTime = audio.duration - audio.currentTime;
      const minutes = Math.floor(remainingTime / 60);
      const seconds = Math.floor(remainingTime % 60);
      const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
      setRemainTime(`${minutes}:${formattedSeconds}`);

      const percentage = (audio.currentTime / audio.duration) * 100;
      setPer(percentage);
    };

    audio.addEventListener('timeupdate', updateRemainTime);
    audio.addEventListener('ended', () => setIsPaused(true));

    return () => {
      audio.removeEventListener('timeupdate', updateRemainTime);
      audio.removeEventListener('ended', () => setIsPaused(true));
    }
  }, [isPlaying.url, isPaused]);

  const handleSeek = (e) => {
    const seekTime = (e.target.value / 100) * audioInstance.current.duration;
    audioInstance.current.currentTime = seekTime;
  };

  return (
    <div className='absolute bottom-0 bg-[#1c1c1c] py-4 px-6 rounded-b-xl flex flex-col justify-between items-center w-full'>
      <div className='flex flex-col items-start w-full gap-2'>
        <div className='font-bold text-xl sm:text-2xl'>{isPlaying.title} ( {isPlaying.artist} )</div>
        <div>{isPlaying.artist}</div>
        <div className='w-full h-2 bg-[#131212] rounded-xl relative'>
          <input
            type="range"
            min="0"
            max="100"
            value={per}
            onChange={handleSeek}
            className='absolute w-full h-2 opacity-0 cursor-pointer'
          />
          <div style={{ width: `${per}%` }} className='h-full bg-blue-500 rounded-xl'></div>
        </div>
      </div>

      <div className='w-full flex flex-row items-center justify-between px-2'>
        <div>{isPlaying.time}</div>
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
        <div>- {remainTime} </div>
      </div>
    </div>
  )
}

export default Play;
