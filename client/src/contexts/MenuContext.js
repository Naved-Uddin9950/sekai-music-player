import { createContext, useContext } from "react";

export const MenuContext = createContext({
    isMenuOpen: false,
    setIsMenuOpen : () => {}
});

export const MenuProvider = MenuContext.Provider;

export function useMenu () {
    return useContext(MenuContext);
}