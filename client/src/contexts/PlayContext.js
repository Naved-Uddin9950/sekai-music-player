import { createContext, useContext } from "react";

export const PlayContext = createContext({
    isPlaying : {
        id: "id",
        url: "this is url"
    },
    setIsPlaying : () => {}
});

export const PlayProvider = PlayContext.Provider;

export function usePlay () {
    return useContext(PlayContext);
}