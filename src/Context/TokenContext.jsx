import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export let UserToken = createContext();

export default function UserTokenContextProvider({ children }) {
    
    const [userToken, setUserToken] = useState(null);
    useEffect(() => {
        if (localStorage.getItem('token')) {
            setUserToken(localStorage.getItem('token'));
        }
    }, [])

    return <UserToken.Provider value={ { userToken , setUserToken } } >
        {children}
    </UserToken.Provider>
    
}