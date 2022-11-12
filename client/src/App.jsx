import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom";

// Pages
import LoginPage from './pages/LoginPage';
import LoginSuccessPage from './pages/LoginSuccessPage';

const App = () => {

    const [user, setUser] = useState({});

    const handleSetUser = (loggedInUser) => {
        setUser(loggedInUser)
    };

  return (
    <>
        <Routes>
            <Route path="/" element={<LoginPage handleSetUser={handleSetUser} />} />
            <Route path="/login-success" element={<LoginSuccessPage user={user} />} />
        </Routes>
    </>
  )
}

export default App;