import React, {  } from "react";
import { Route, Routes } from 'react-router-dom';
// import "./App.scss";
import Login from './pages/login';
import SignUp from './pages/signup';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;

