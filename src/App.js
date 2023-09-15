import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import React, { useEffect } from 'react';

import Globalnav from './components/globalnav';
import Footer from './components/footer';

import Home from './screens/home';
import Coding from './screens/coding';
import Design from './screens/design';
import About from './screens/about';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  useEffect(() => {
    document.title = "Thanh Quach | Not an ordinary Tech guy"
  })
  
  return (
      <Router>
        <div className='App'>
        <Globalnav/>
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/coding" element={<Coding/>} />
            <Route path="/design" element={<Design/>} />
            <Route path="/about" element={<About/>} />
          </Routes>
        <Footer/>
        </div>
      </Router>
  )
}

export default App;
