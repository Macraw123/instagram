import { useCallback } from "react";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";

const themeState = atom< "light" | "dark">({key: 'themeState', default: "light"})
export default themeState

export function useToggleTheme(){
    const setTheme  = useSetRecoilState(themeState)
    return useCallback(
        () => {
            document.body.classList.toggle("dark")
            setTheme( (prev) => prev === "dark" ?   "light"  : "dark") 
        },
        [setTheme],
    )
}

export function useTheme(){
    const theme = useRecoilValue(themeState)
    return theme
}