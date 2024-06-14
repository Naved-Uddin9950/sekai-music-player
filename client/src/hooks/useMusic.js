import { useEffect, useRef } from "react";


export default function useMusic(url) {
    const audios = useRef([]);



    useEffect(() => {
        audios.current.forEach(audio => {
            audio.pause();
        },[url]);

        const music = new Audio(url);
        audios.current.push(music);
        music.play();

        return () => {
            music.pause();
            audios.current = audios.current.filter(audio => audio !== music);
        };

    }, [url]);

    return 'Music is playing.....';
}