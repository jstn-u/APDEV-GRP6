import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login'; 
import Home from './pages/home';
import Profile from './pages/profile';
import Lost from './pages/lost';
import Adopt from './pages/adopt';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} /> 
          <Route path="/profile" element={<Profile />} /> 
          <Route path="/lost" element={<Lost />} /> 
          <Route path="/adopt" element={<Adopt />} /> 

          <Route path="*" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}



export default App;
