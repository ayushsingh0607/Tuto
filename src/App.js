import React from 'react';
import Navbar from "./Navbar"
import Home from "./Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from './Create';
import Blogdetails from './Blogdetails';
import Pagenotfound from './Pagenotfound';
function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} >
            </Route>
            <Route path="/create" element={<Create />} >
            </Route>
            <Route path="/blogs/:id" element={<Blogdetails />} >
            </Route>
            <Route path="*" element={<Pagenotfound />}>
            </Route>
          </Routes>

         </div>
        </div>
    </Router>
    
  );

}

export default App;
