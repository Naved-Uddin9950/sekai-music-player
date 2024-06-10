import { createContext, useContext } from "react";

export const musicContext = createContext({
    sontList : [],
    setSongList : () => {}
});

export const MusicProvider = musicContext.Provider;

export function useMusic () {
    return useContext(musicContext);
}