import React from "react";

export const LogContext = React.createContext({
    isLoggedIn: false,
    setIsLoggedIn: () => { }
});