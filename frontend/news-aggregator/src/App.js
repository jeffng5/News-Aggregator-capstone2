import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignUp from "./SignUp"
import Welcome from "./Welcome"
import Login from "./Login"
import Preferences from "./Preferences"
import FrontPage from "./FrontPage"

function App() {

  return (
  <>
  
    <div className="App">
 
      <BrowserRouter>
      <Routes>
        <Route exact path = "/" element={<Welcome />}></Route>
        <Route exact path = "/users" element={<Preferences />}></Route>
        <Route exact path = "/users/preferences" element={<FrontPage />}></Route>




      </Routes>
      </BrowserRouter>



</div>

    </>
  );

}

export default App;
