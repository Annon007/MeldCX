import React, { useState, useEffect, useContext } from "react";
import Dashboard from './components/dashboard/dashboard';
import Login from './components/login/login';
import { LogContext } from "./store/logContext";
import LogProvider from "./store/logProvider";

function App() {
  const LogCtx = useContext(LogContext)
  useEffect(() => {
    if (localStorage.getItem("MeldCX_Token")) {
      LogCtx.setIsLoggedIn(true);
    }
  }, [])

  return (
    <div >
      {!LogCtx.isLoggedIn && <Login />}

      <Dashboard />
    </div>
  );
}

export default App;
