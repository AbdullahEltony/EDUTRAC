/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";


export let ActiveContext = createContext();

export default function ActiveContextProvider({ children }) {
    const [isActive, setIsActive] = useState(false);

    return <ActiveContext.Provider value={ { setIsActive , isActive } }>
        { children }
    </ActiveContext.Provider >
}