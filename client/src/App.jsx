import React from 'react';
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from './Home/LogIn';
import Register from './Home/Register';
import Home from './Home/Home';


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path='/register' element={<Register/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App