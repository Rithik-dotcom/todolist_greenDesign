import { createContext, useEffect, useState } from "react";

//the actual value we want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
    loggedIn : false,
    setLoggedin : () => null,
})


//provider provides the access to the data in user-context
// the children will have access to the data using provider 
export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(() => {
        const storedUser = localStorage.getItem('currentUser');
        return storedUser ? JSON.parse(storedUser) : null;
    });

    const [loggedIn, setLoggedin] = useState(() => {
        const storedLoggedIn = localStorage.getItem('loggedIn');
        return storedLoggedIn ? JSON.parse(storedLoggedIn) : false;
    });

    // Update local storage whenever state changes
    useEffect(() => {
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
    }, [currentUser]);

    useEffect(() => {
        localStorage.setItem('loggedIn', JSON.stringify(loggedIn));
    }, [loggedIn]);

    const value = { currentUser, setCurrentUser, loggedIn, setLoggedin };



    return <UserContext.Provider value={value} >{children}</UserContext.Provider>
}

