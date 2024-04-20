import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'; // Your home page component
import Login from './Login';
import Signup from './Signup';
import Watchlist from './watchlist';

function Main() {
 return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
    </Router>
 );
}

export default Main;
