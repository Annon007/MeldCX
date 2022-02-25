import React, { useState } from "react";
import { LogContext } from "./logContext";

const LogProvider = props => {
    const [log, setLog] = useState(false);
    const handleLog = state => {
        setLog(state);
    }
    const initialValue = {
        isLoggedIn: log,
        setIsLoggedIn: handleLog
    }
    return <LogContext.Provider value={initialValue}>
        {props.children}
    </LogContext.Provider>
};

export default LogProvider;