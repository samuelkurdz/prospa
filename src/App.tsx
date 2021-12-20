import React, {  } from "react";
import { Route, Routes } from 'react-router-dom';

import Login from './pages/login';
import SignUp from './pages/signup';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;

