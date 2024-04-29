import { createContext, useEffect, useState } from "react";

//the actual value we want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
    
    loggedIn : false,
    setLoggedin : () => null,
 
    userData: [],
    setUserData: () => [],

    userRelatedData : [],
    setUserRelatedData: () => []
})
//  localStorage.clear();

//provider provides the access to the data in user-context
// the children will have access to the data using provider 
export const UserProvider = ({ children }) => {
    const [userRelatedData, setUserRelatedData] = useState(() => {
        const storedUserRelatedData = localStorage.getItem('userRelatedData');
        return storedUserRelatedData ? JSON.parse(storedUserRelatedData) : []
    });
    console.log(userRelatedData);
    const [currentUser, setCurrentUser] = useState(() => {
        const storedUser = localStorage.getItem('currentUser');
        return storedUser ? JSON.parse(storedUser) : null;
    });

    const [loggedIn, setLoggedin] = useState(() => {
        const storedLoggedIn = localStorage.getItem('loggedIn');
        return storedLoggedIn ? JSON.parse(storedLoggedIn) : false;
    });

    //for user data
    const [userData, setUserData] = useState(() => {
        const storedUserData = localStorage.getItem('userData');
        return storedUserData ? JSON.parse(storedUserData) : [];
    });

    // Update local storage whenever state changes
    useEffect(() => {
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
    }, [currentUser]);

    useEffect(() => {
        localStorage.setItem('loggedIn', JSON.stringify(loggedIn));
    }, [loggedIn]);

    useEffect(() => {
        localStorage.setItem('userData', JSON.stringify(userData));
    }, [userData]);

    useEffect(() => {
        localStorage.setItem('userRelatedData', JSON.stringify(userRelatedData));
    }, [userRelatedData]);

    const value = { currentUser, setCurrentUser, loggedIn, setLoggedin , userData, setUserData, userRelatedData,setUserRelatedData };



    return <UserContext.Provider value={value} >{children}</UserContext.Provider>
}

