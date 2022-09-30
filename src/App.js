import React, { Component }  from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import About  from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Home from "./Home";

class App extends Component{
  render(){
    return(
    
      // <Router>
      //   <div className="App">
      //     <li>
      //       <Link to="/">Home</Link>
      //     </li>
      //     <li>
      //       <Link to="/about">About</Link>
      //     </li>
      //     <li>
      //       <Link to="/contact">Contact</Link>
      //     </li>
      //   </div>
      // </Router>

      <Routes>
        <Route  path="/" element={<Home/>}> </Route>
        <Route exact path="/about" element={<About/>}> </Route>
        <Route exact path="/contact" element={<Contact/>}> </Route>
        <Route exact path="*" element={<Error/>}> </Route>
      </Routes> 
    )
  }
}

export default App;